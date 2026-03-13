import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class FormController extends ViewElement {
    
    /**
     * @type {AuthorManager} 
     */
    #manager;

    /**
     * @type {FormInput[]}
     */
    #formInputList;
    
    
    
    constructor(id, formFieldList, manager) {
        super(id);
        this.#manager = manager;
        this.#formInputList = [];
        const form = document.createElement('form');
        for(const field of formFieldList){
            const formInput = new FormInput(field.id, field.label, field.name, form);
            this.#formInputList.push(formInput);
        }
        const button = document.createElement("button");
        button.innerText = "Küldés";
        form.appendChild(button);
        const resultDiv = document.createElement("div");
        this.div.appendChild(resultDiv);
        this.div.appendChild(form);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const element = this.#createElement();
            this.#manager.addElement(element);
            e.target.reset();
        })

        this.#manager.AddElemenetResultCallback = (result) => {
            resultDiv.innerText = result;
            setTimeout(() => {
                resultDiv.innerText = "";
            }, 1500)
        }
    }

    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){
        /**
         * @type {import("./index.js").AuthorType}
         */
        let result = {}
        for(const formFieldInput of this.#formInputList){
            if(formFieldInput.validate()){
                result[formFieldInput.name] = formFieldInput.value;
            }
        }
        return result;
    }
}

class FormInput{
    /**
     * @type {HTMLInputElement}
     */
    #inputelement;

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv;

    /**
     * @type {string}
     */
    #name;

    get value(){
        return this.#inputelement.value ? this.#inputelement.value : undefined;
    }

    get name(){
        return this.#name;
    }

    /**
     * 
     * @param {*} id 
     * @param {*} label 
     * @param {*} name 
     * @param {*} parent 
     * @param {*} b 
     * @param {any} 
     * @param {*} param6 
     * @param {*} this 
     * @param {*} #name 
     * @param {*} this 
     * @param {*} #input 
     */
    
    constructor(id, label, name, parent ){
        const {input, errorDiv} = createInputAndErrorDiv({id, label, name, parent});
        this.#name = name;
        this.#inputelement = input;
        this.#errorDiv = errorDiv;
    }

    validate(){
        let result = true;
        if(!this.value){
            this.#errorDiv.innerText = "Ez a mező kötelező";
            result = false;
        }else{
            this.#errorDiv.innerText = "";
        }
        return result;
    }
    get value(){
        return this.#inputelement.value ? this.#inputelement.value : undefined;
    }
    get name(){
        return this.#name;
    }
    
}

export {FormController}