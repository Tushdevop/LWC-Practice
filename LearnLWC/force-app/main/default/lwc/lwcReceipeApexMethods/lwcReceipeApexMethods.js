import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';

import getContactList from '@salesforce/apex/LWCRecipeApexController.getContactList';
import getMultipleContacts from '@salesforce/apex/LWCRecipeApexController.getMultipleContacts';
import getSingleContact from '@salesforce/apex/LWCRecipeApexController.getSingleContact';
import getAccountList from '@salesforce/apex/LWCRecipeApexController.getAccountList';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;

export default class LwcReceipeApexMethods extends LightningElement {

conList;
errors;

Bcontacts;
Berror;

searchKey='';

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
//Call Apex method and get SObject values using a static schema definition.
@wire(getSingleContact) contact;
get name() {
    return this.contact.data ? getSObjectValue(this.contact.data, NAME_FIELD) : '';
}
get email() {
    return this.contact.data ? getSObjectValue(this.contact.data, EMAIL_FIELD) : '';
}


//method Retrieve a list of records using an imperative Apex method call.
handleLoad(){
    getContactList()
    .then((result) =>{
        this.Bcontacts = result;
        this.Berror = undefined;
    })
    .catch((error) => {
        this.Berror = error;
        this.Bcontacts = undefined;
    })
}

//Call an Apex method with parameters using @wire
@wire(getAccountList, { searchString : '$searchKey' }) Accounts;

handleChange(event){
    window.clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
    this.delayTimeout = setTimeout(() => {
        this.searchKey = searchKey;
    }, DELAY);
}   

}