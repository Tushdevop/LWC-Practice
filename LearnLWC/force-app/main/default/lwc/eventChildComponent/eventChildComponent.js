import { LightningElement, api } from 'lwc';

export default class EventChildComponent extends LightningElement {

    @api childtoParent;
    @api textSize;
    
    get textClassName(){
       return `slds-text-heading_${this.textSize}`;
    }

    handleValueChange(){
        this.childtoParent = 'Changed Value';
    }
    

    /*
    @api headerText
    @api bodyText

    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'))
    } */
}