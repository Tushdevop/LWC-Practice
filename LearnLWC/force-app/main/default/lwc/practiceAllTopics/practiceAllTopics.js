import { LightningElement, wire } from 'lwc';

import getContactList from '@salesforce/apex/DataTablePractice.getContactList';
import updateContacts from '@salesforce/apex/DataTablePractice.updateContacts'

import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const COLS = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true }
];

const CARS = [ 'Maruti', 'Audi', 'Hundai', 'Mercedes'];

export default class PracticeAllTopics extends LightningElement {

    word = 'All!';
    inputvalue = 'default';
    handleChange(event){
        this.inputvalue = event.target.value;
    }

    get name(){
        return `${this.inputvalue}`.toUpperCase();
    }

    //Render Data in LWC
     cars = CARS;
     showdata = false;
     showdataIterator = false;
     handleButtonClick(){
         this.showdata = true;
     }
     handleCheckboxChange(event){
         this.showdataIterator = event.target.checked;
     }

     //Datatable practice
     columns = COLS;
     draftValues = [];

    @wire(getContactList)
    contacts;

    async handleSave(event) {
        const updatedFields = event.detail.draftValues;

        // Clear all datatable draft values
        this.draftValues = [];

        try {
            // Pass edited fields to the updateContacts Apex controller
            await updateContacts({ contactsForUpdate: updatedFields });

            // Report success with a toast
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contacts updated',
                    variant: 'success'
                })
            );

            // Display fresh data in the datatable
            await refreshApex(this.contacts);
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error while updating or refreshing records',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        }

    }

}