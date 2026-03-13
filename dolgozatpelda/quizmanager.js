/**
 * @typedef {}
 */

class QuizManager {
    /**
     * @type {number}
     */
    #currentQuestionNumber;
    /**
     * @type {QuestionType[]}
     */
    #questions;
    /**
     * @type {string[]}
     */
    #questionAnswers;
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;
    /**
     * @type {FinishResultCallback}
     */
    #finishResultCallback;
    /**
     * @param {QuestionType} questions 
     */
    constructor(questions) {
        this.#currentQuestionNumber = 0;
        this.#questionAnswers = [];
        this.#questions = questions;
    }
    startQuiz() {

    }
    /**
     * @param {string} answer 
     */
    nextQuestion(answer) {

    }
    /**
     * @param {NextQuestionCallback} value
     */
    set nextQuestionCallback(value) {
        this.#nextQuestionCallback = value;
    }
    /**
     * @param {FinishResultCallback} value
     */
    set FinishResultCallback(value) {
        this.#finishResultCallback = value;
    }
}