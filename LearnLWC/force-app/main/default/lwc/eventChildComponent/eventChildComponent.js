import { LightningElement, api } from 'lwc';

export default class EventChildComponent extends LightningElement {

    @api childtoParent;
    @api textSize;
    childValue = 'default';
    
    get textClassName(){
       return `slds-text-heading_${this.textSize}`;
    }

    handleValueChange(){
        this.childValue = 'Changed Value';
    }
    

    /*
    @api headerText
    @api bodyText

    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'))
    } */
}