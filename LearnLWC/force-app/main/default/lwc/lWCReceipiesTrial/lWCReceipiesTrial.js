import { LightningElement } from 'lwc';

export default class LWCReceipiesTrial extends LightningElement {


    inputText='default';
    enteredChar='';
    areDetailsVisible = false;

    handleBindingChange(event){
        this.inputText=event.target.value;
    }

    handleInputChange(event){
        const field = event.target.name;
        if(field === 'character'){
                this.enteredChar=event.target.value;
        }        
    }

    get CharUpperCase(){
            return this.enteredChar.toUpperCase();
            }
    
    handleChange(event){
        this.areDetailsVisible = event.target.checked;  
    }
}