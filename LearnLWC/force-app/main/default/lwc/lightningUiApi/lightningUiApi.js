import { LightningElement,api, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class LightningUiApi extends LightningElement {

    accResult
    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName:'AllAccounts'
    })wiredListView({error, data}){
        if(data){
            console.log("data============",data)
            this.accResult = data.records.records;
        }
    }

}