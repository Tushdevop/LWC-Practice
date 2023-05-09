import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Id from '@salesforce/user/Id';


import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

const fields = [NAME_FIELD, EMAIL_FIELD];

export default class WireLWCTrial extends LightningElement {

    userId = Id;

    @wire(getRecord, { recordId: '$userId', fields })
    user;
    
    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    get email() {
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }

    //Get metadata about a specific object. The metadata includes fields, child relationships, 
    //record type, and theme.
    objectApiName;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo;

    handleBtnClick() {
        this.objectApiName = this.template.querySelector('lightning-input').value;
    }

    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }
}