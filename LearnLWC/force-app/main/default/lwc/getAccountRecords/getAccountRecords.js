import { LightningElement, wire, track } from 'lwc';
import getAccountRecordList from '@salesforce/apex/GetAccountRecords.getAccountRecordList';
export default class GetAccountRecords extends LightningElement {

   @track accList;
   @track error;

    @wire(getAccountRecordList) 
    wiredAccounts({
        error,
        data
    }){
        if (data) {
            this.accList=data;
        }
        else if(error){
            this.error=error;
        }
     }
    
}