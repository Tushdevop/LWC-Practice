import { LightningElement } from 'lwc';

export default class EventParentComponent extends LightningElement {

    parentTextSize = 'small';

    get options() {
        return [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
        ];
    }
    handleChange(event){
        this.parentTextSize = event.detail.value;
    }

    handleClick(){
        this.template.querySelector("c-event-child-component").handleValueChange();
    }

    /*showModal=false;

    showHandler(){
        this.showModal = true
    }

    modalCloseHandler(){
        this.showModal = false
    } */
}