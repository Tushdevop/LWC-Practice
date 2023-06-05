import { LightningElement } from 'lwc';

export default class DataCommunicationParentComp extends LightningElement {

    showModal = false;
    message
    clickHandler(){
        this.showModal = true;
    }
    parrentCloseHandler(event){
        this.message = event.detail
        this.showModal = false;
    }
}