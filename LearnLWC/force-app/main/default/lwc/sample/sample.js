import { LightningElement, wire, track } from 'lwc';
import getAccountRecordList from '@salesforce/apex/GetAccountRecords.getAccountRecordList';
import getAccountListwithParam from '@salesforce/apex/GetAccountRecords.getAccountListwithParam';
import getAccountsParam from '@salesforce/apex/GetAccountRecords.getAccountsParam'

const OPTIONS = [ 
                    { label: "Technology Partner", value: "Technology Partner"},
                    { label: "Customer - Direct", value: "Customer - Direct"},
                    { label: "Customer - Channel", value: "Customer - Channel"}
                ];

export default class Sample extends LightningElement {

@track selectedAccList;
@track errors;
accType='';
options = OPTIONS;

buttonAccList;
buttonErrors;

//apex method as wore property
@wire(getAccountRecordList) Acclist;

//apex method with parameter
@wire(getAccountListwithParam, {type : '$accType'})
selectedAccList;

handleChange(event){
    this.accType = event.target.value; 
}

//imperative method
handleButtonChange(){
    getAccountRecordList()
    .then(result=>{
        //console.log(result);
        this.buttonAccList = result;
        this.buttonErrors = undefined;
    })
    .catch(error=>{
        //console.log(error);
        this.buttonAccList = undefined;
        this.buttonErrors = error;
    })
}

// imperative with parameter
searchKey='';
accounts;
timer

searchHandler(event){
    window.clearTimeout(this.timer)
    this.searchKey = event.target.value
    this.timer = setTimeout(()=>{
        this.searchApex()
    }, 2000)
}

searchApex(){
    getAccountsParam({ searchkey: this.searchKey})
    .then(result=>{
        console.log(result)
        this.accounts = result;
    })
    .catch(error=>{
        console.log(error)
    })
}


}