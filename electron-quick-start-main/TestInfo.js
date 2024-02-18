    //const preload = require("electron/preload");
    function al()
    {
        alert("al")
    }
    class TestInfo {
        constructor(name = "Not Found", genInfo = "", answers = {}, qFinished = 0, numOfQuestions = 0, wasStarted = false, questions = []) {
            this.name = name;
            this.genInfo = genInfo;
            this.answers = answers; // Note: Object used as a map from int to string
            this.qFinished = qFinished;
            this.numOfQuestions = numOfQuestions;
            this.wasStarted = wasStarted;
            this.questions = questions; // Assume Question is defined elsewhere
        }
        // Assuming Question class or constructor function is defined somewhere else
    }
    function  dissectTest(text,fileName = "null") 
    {
        let name = fileName;
        text = text.substring(text.indexOf("Directions:") + 1);
        let genInfo = text.substring(0, text.indexOf("Form ") - 1);
        text = text.substring(text.indexOf("Form ") + "Form ".length);
        text = text.substring(text.indexOf("\n") + 1);
        let numLines = text.substring(0, text.indexOf("\n01") + "\n01".length).split('\n').length - 1;
        answers = {};
        let numOfQuestions = 0;
        for (let i = 0; i < Math.floor(numLines / 3); i++) 
        {
            let temp = text.substring(0, text.indexOf("\n")).replace(/\s+/g, " ");
            let nums = temp.split(' ');
            text = text.substring(text.indexOf("\n") + 1);

            temp = text.substring(0, text.indexOf("\n")).replace(/\s+/g, " ");
            let ans = temp.split(' ');
            text = text.substring(text.indexOf("\n") + 2);

            if (nums[0] === "")
                nums.shift();
            if (ans[0] === "")
                ans.shift();
            nums.forEach((num, j) => {
                try {
                    answers[parseInt(num)] = ans[j];
                    numOfQuestions = parseInt(num);

                } catch (e) {
                    // continue on error
                }
            });
            //alert(text.substring(0,text.indexOf("\n") + 2))

            //text = text.substring(text.indexOf("\n") + 2);
        }
        let question = [];
        let numToAns = { 0: "A)", 1: "B)", 2: "C)", 3: "D)", 4: "E)" };
        let prevFig = "";
        for (let i = 1; i < numOfQuestions + 1; i++) 
        {
            let isPartOfMQ = false;
            let questionTextIndex = text.indexOf(numToAns[0]);
            let questionText = text.substring(0, questionTextIndex !== -1 ? questionTextIndex - 3 : 0);
            let questionNumIndex = questionText.indexOf(".");
            let questionNum = parseInt(questionText.substring(0, questionNumIndex !== -1 ? questionNumIndex : 0));
            
            if (questionText.includes("Figure")) 
            {
                isPartOfMQ = true;
                questionText = prevFig + questionText;
            }
            
            text = text.substring(text.indexOf(numToAns[0]) !== -1 ? text.indexOf(numToAns[0]) - 1 : 0);
            
            let options =[];
            for (let j = 0; j < 6; j++) {
                let numOfNextQ = (i + 1).toString().padStart(2, '0');
                let nextQuestionPattern = "\n" + numOfNextQ;
                let a = text.indexOf("############");
                let b = text.indexOf(nextQuestionPattern);
                if (j === 5) {
                    if (numOfQuestions !== i) {
                        if (b < a || a === -1) {
                            options.push(text.substring(0, b));
                            text = text.substring(b);
                        } else {
                            options.push(text.substring(0, a));
                            text = text.substring(a);
                            prevFig = text.substring(0, text.indexOf(nextQuestionPattern));
                            text = text.substring(text.indexOf(nextQuestionPattern));
                        }
                    } else {
                        options.push(text);
                        text = "";
                    }
                } else {
                    if (i === numOfQuestions && !text.includes(numToAns[j])) {
                        options.push(text);
                        text = "";
                    } else if (!text.includes(nextQuestionPattern) || text.indexOf(nextQuestionPattern) > text.indexOf(numToAns[j]) - 1) {
                        if (text.substring(0, text.indexOf(numToAns[j]) - 1) === "") {
                            text = text.substring(text.indexOf(numToAns[j]) - 1);
                            continue;
                        }
                        options.push(text.substring(0, text.indexOf(numToAns[j]) - 1));
                        text = text.substring(text.indexOf(numToAns[j]) - 1);
                    } else {
                        continue;
                    }
                }
            }
            question.push(new Question(questionText,options,isPartOfMQ));
    }
    let temp = new TestInfo(name, genInfo, answers,0, numOfQuestions, false, question);
    return temp
}
