import { LightningElement } from 'lwc';

export default class PracticeAllTopics extends LightningElement {

    word = 'All!';
    inputvalue;
    handleChange(event){
        this.inputvalue = event.target.value;
    }

    get name(){
        return `$(this.inputvalue)`.toUpperCase();
    }

}