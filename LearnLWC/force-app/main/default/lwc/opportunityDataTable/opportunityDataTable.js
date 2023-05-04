import { LightningElement, track, wire } from 'lwc';
import getOpportunityRecords from '@salesforce/apex/GetAllOpportunites.getOpportunityRecords';

export default class OpportunityDataTable extends LightningElement {

@track oppList;
@track error;

@wire(getOpportunityRecords)
wiredOpportunities({
    error, data
}) {
    if (data) {
        this.oppList=data;
    } else if(error){
        this.error=error;
    }
}


}