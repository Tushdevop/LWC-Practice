import { LightningElement } from 'lwc';
import {GetSobjectType} from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/AccountDataMethods.getSingleContact';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class GetSobjectType extends LightningElement {

    @wire(getSingleContact) contact
    
    get Name(){
        return this.contact.data ? GetSobjectType(this.contact.data, NAME_FIELD):'';
    }
    get title() {
        return this.contact.data ? getSObjectValue(this.contact.data, TITLE_FIELD) : '';
    }
    get email() {
        return this.contact.data ? getSObjectValue(this.contact.data, EMAIL_FIELD) : '';
    }
}