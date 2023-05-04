import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';

import getAccountList from '@salesforce/apex/AccountDataMethods.getAccountList'
import getAccountById from '@salesforce/apex/AccountDataMethods.getAccountById'
import getContactList from '@salesforce/apex/AccountDataMethods.getContactList'

import NAME_FIELD from '@salesforce/schema/Account.Name'
export default class ApexDemoLwc extends LightningElement {
    results
    contacts

    get name(){
        return this.wireAccounts.data ? getSObjectValue(this.wireAccounts.data[0], NAME_FIELD):''
    }


    //1. Wire a Property
    @wire(getAccountById, { accId:'0015i00000hE9icAAC'})
    wireAccounts

    //2. Wire a function
    @wire(getAccountList)
    accounts({data, error}){
        if(data){
            this.results = data
        }
        if(error){
            console.error(error)
        }
    }
    //3. Imperative approach
    handleLoad(){
        getContactList().then(result=>{
            this.contacts = result
        }).catch(error=>{
            console.error(error)
        })
    }


}