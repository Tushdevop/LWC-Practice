import { LightningElement ,api, wire, track} from 'lwc';
import getContactList from '@salesforce/apex/ContactHelper.getContactList';
export default class ContactDatatableLWCExample extends LightningElement {
   
    @track error;
    @track ConList ;
    @wire(getContactList)
    wiredContacts({
        error,
        data
    }) {
        if (data) {
            this.ConList = data;
        } else if (error) {
            this.error = error;
        }   
    }
}