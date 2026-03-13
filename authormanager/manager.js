/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * @callback AddElemenetResultCallback
 * 
 */


class AuthorManager {
    /**@type {Author[]} */
    #authorList;
    /**@type {TableCallback} */
    #tableCallback;
    #AddElementResultCallback;
    constructor() {
        this.#authorList = [];
    }
    /**
     * @param {import(".").AuthorType} element 
     */
    addElement(element) {
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        if(author.validate()){
            this.#authorList.push(author);
            this.#AddElementResultCallback("Sikeres elem felvétel!");
        }
        else{
            this.#AddElementResultCallback("Sikertelen elem felvétel");
        }
        
    }
    /**
     * @returns {void}
     */
    getAllElement() {
        this.#tableCallback(this.#authorList);
    }
    /**
     * @param {TableCallback} value 
     */
    set tableCallback(value) {
        this.#tableCallback = value;
    }
    /**
     * @param {AddElemenetResultCallback} value
     */
    set AddElemenetResultCallback(value){
        this.#AddElementResultCallback = value;
    }
}

class Author {
    /**@type {string} */
    #id;
    /**@type {string} */
    #name;
    /**@type {string} */
    #work;
    /**@type {string} */
    #concept;
    constructor() {

    }
    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get work() {
        return this.#work;
    }
    get concept() {
        return this.#concept;
    }
    set id(value) {
        this.#id = value;
    }
    set name(value) {
        this.#name = value;
    }
    set work(value) {
        this.#work = value;
    }
    set concept(value) {
        this.#concept = value;
    }

    /**
     * @returns {boolean}
     */
    validate(){
        return this.#id >= 0 && this.#name && this.#concept && this.work;
    }
}

export {AuthorManager}