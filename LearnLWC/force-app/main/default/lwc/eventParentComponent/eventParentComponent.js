import { LightningElement } from 'lwc';

export default class EventParentComponent extends LightningElement {

    showModal=false;

    showHandler(){
        this.showModal = true
    }

    modalCloseHandler(){
        this.showModal = false
    }
}