import { LightningElement } from 'lwc';

export default class DataCommunicationChildComp extends LightningElement {

    closeHandler(){
        const childEvent = new CustomEvent('close',  { bubbles:true, detail: "Modal closed successfully"})
        this.dispatchEvent(childEvent)
    }

    footerHandler(){
        console.log('Footer is called');
    }
}