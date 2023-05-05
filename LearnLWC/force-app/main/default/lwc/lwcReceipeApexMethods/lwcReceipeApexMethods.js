import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/LWCRecipeApexController.getContactList';
import getMultipleContacts from '@salesforce/apex/LWCRecipeApexController.getMultipleContacts';

export default class LwcReceipeApexMethods extends LightningElement {

conList;
errors;

//wired property
@wire(getContactList) contacts;


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
}