import { LightningElement, api } from 'lwc';

export default class EventChildComponent extends LightningElement {

    @api headerText
    @api bodyText

    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'))
    }
}