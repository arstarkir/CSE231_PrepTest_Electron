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
    alert(text)
    let name = fileName;
    text = text.substring(text.indexOf("Directions:") + 1);
    alert("a")
    let genInfo = text.substring(0, text.indexOf("Form ") - 1);
    text = text.substring(text.indexOf("Form ") + "Form ".length);
    text = text.substring(text.indexOf("\n") + 1);
    let numLines = text.substring(0, text.indexOf("\n01") + "\n01".length).split('\n').length - 1;
    let answers = {};
    let numOfQuestions = 0;
    alert("1")
    for (let i = 0; i < Math.floor(numLines / 3); i++) {
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
                alert(numOfQuestions)

            } catch (e) {
                // continue on error
            }
        });
        text = text.substring(text.indexOf("\n") + 2);
    }

    alert("2")
    let numToAns = {0: "A)", 1: "B)", 2: "C)", 3: "D)", 4: "E)"};
    let prevFig = "";
    for (let i = 1; i <= numOfQuestions; i++) {
        let isPartOfMQ = false;
        let questionText = text.substring(0, text.indexOf(numToAns[0]) - 3);
        let questionNum = parseInt(questionText.substring(0, questionText.indexOf(".")));
        if (questionText.includes("Figure")) {
            isPartOfMQ = true;
            questionText = prevFig + questionText;
        }
        text = text.substring(text.indexOf(numToAns[0]) - 1);
        let options = {};

        for (let j = 0; j < 5; j++) { // Assuming up to 5 options per question for simplicity
            let numOfNextQ = (i + 1).toString().padStart(2, '0');
            let numOfNextQPattern = `\n${numOfNextQ}`;
            let currentOptionPattern = numToAns[j];
            let nextOptionPattern = numToAns[j + 1] || ""; // Handle the last option differently
        
            let optionEndIndex = text.indexOf(nextOptionPattern) !== -1 ? text.indexOf(nextOptionPattern) : text.indexOf(numOfNextQPattern);
            if (optionEndIndex === -1) optionEndIndex = text.length; // If it's the last question or option
        
            let optionText = text.substring(0, optionEndIndex).trim();
            options[optionText] = false; // Assuming all options are initially marked as incorrect
        
            // Prepare text for next iteration by removing the current option text
            text = text.substring(optionEndIndex);
        
            // Break if this was the last option or if the next question pattern appears before the next option pattern
            if (text.indexOf(numOfNextQPattern) < text.indexOf(currentOptionPattern) && text.indexOf(numOfNextQPattern) !== -1) break;
        }

        this.questions.push(new Question(questionText, options, isPartOfMQ, questionNum)); // Assuming Question structure
    }
    let temp = new TestInfo(name, genInfo, answers,0, numOfQuestions, false, questions = []);
    alert(name)
    alert(genInfo)
    alert(answers)
    
    return temp
    }
