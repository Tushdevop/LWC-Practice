import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {

    dataElement= 'JS Data'

    @track name

    chnageHandler(event){
        this.name=event.target.value
    }
}