import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';

import getContactList from '@salesforce/apex/LWCRecipeApexController.getContactList';
import getMultipleContacts from '@salesforce/apex/LWCRecipeApexController.getMultipleContacts';
import getSingleContact from '@salesforce/apex/LWCRecipeApexController.getSingleContact';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class LwcReceipeApexMethods extends LightningElement {

conList;
errors;

//wired property
@wire(getContactList) contacts;


// Wired function
@wire(getMultipleContacts) 
contactLists({ error, data}){
    if(data){
        this.conList = data;
        this.errors = undefined;
    }else if(error){
        this.errors = error;    
        this.conList = undefined;
    }
}

//getter method to get name 
@wire(getSingleContact) contact;
get name() {
    return this.contact.data ? getSObjectValue(this.contact.data, NAME_FIELD) : '';
}
get email() {
    return this.contact.data ? getSObjectValue(this.contact.data, EMAIL_FIELD) : '';
}

//method

}