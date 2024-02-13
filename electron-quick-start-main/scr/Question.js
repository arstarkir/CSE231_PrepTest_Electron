const AnswerdQ = {
    Correct: "Correct",
    Incorrect: "Incorrect",
    Started: "Started",
    NotStarted: "NotStarted"
};

class Question {
    constructor(question, options, isPartOf = false, qNum = 0) {
        this.state = AnswerdQ.NotStarted;
        this.isPartOfMQ = isPartOf;
        this.questionText = question || "No Question Found";
        this.questionNum = qNum;
        this.options = options;
    }
}
