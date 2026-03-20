/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * @callback AddElemenetResultCallback
 * 
 * @callback ImportResultCallback
 * @param {string} resultMessage
 * @returns {void}
 */


class AuthorManager {
    /**@type {Author[]} */
    #authorList;
    /**@type {TableCallback} */
    #tableCallback;
    #AddElementResultCallback;
    #importResultCallback;
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
     * @returns {string}
     */
    getExportContent(){
        const result = [];
        for(const author of this.#authorList){
            result.push(`${author.name};${author.work};${author.concept}`);
        }
        return result.join("\n");
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
    /**
     * @param {ImportResultCallback} value
     */
    set importResultCallback(value){
        this.#importResultCallback = value;
    }

    /**
     * @param {import(".").AuthorType[]} elementList
     * @returns {void}
     */
    addElementList(elementList){
        for(const elem of elementList){
            const author = new Author();
            author.id = this.#authorList.length;
            author.name = elem.author;
            author.concept = elem.concept;
            author.work = elem.work;
            if(author.validate()){
                this.#authorList.push(author);
                this.#importResultCallback("Sikeres volt a filefeltöltés")
            }else{
                this.#importResultCallback("Nem volt sikeres a filefeltöltés")
                break;
            }
        }
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