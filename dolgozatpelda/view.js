class View {
    /**
     * @type {QuizManager}
     */
    #manager;
    /**
     * @type {HTMLDivelement}
     */
    #container;
    /**
     * @param {QuizManager} manager
     */
    constructor(manager) {
        this.#container = document.createElement('div');
    }
    /**
     * @param {HTMLElement} parent
     */
    appendTo(parent) {

    }
}