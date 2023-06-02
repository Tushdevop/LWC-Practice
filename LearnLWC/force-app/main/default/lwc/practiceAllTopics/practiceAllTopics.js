import { LightningElement } from 'lwc';

const CARS = [ 'Maruti', 'Audi', 'Hundai', 'Mercedes'];

export default class PracticeAllTopics extends LightningElement {

    word = 'All!';
    inputvalue = 'default';
    handleChange(event){
        this.inputvalue = event.target.value;
    }

    get name(){
        return `${this.inputvalue}`.toUpperCase();
    }

    //Render Data in LWC
     cars = CARS;
     showdata = false;
     showdataIterator = false;
     handleButtonClick(){
         this.showdata = true;
     }
     handleCheckboxChange(event){
         this.showdataIterator = event.target.checked;
     }

}