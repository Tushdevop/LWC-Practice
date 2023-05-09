
public with sharing class AccountDataMethods {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId) {
        return [SELECT Id, Name, Phone FROM Account WHERE Id=:accId];
    } 

    @AuraEnabled(cacheable=true)
    public static List<account>  getAccountListforDel(){
        return [SELECT Id, Name,Phone,Industry FROM Account order by createddate desc  WITH SECURITY_ENFORCED LIMIT 5 ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue!=null LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name FROM Contact];
    }

    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 1];
    }

     @AuraEnabled(cacheable=true)
    public static List<Contact> testHandler(Contact newRecord, list<Contact> newRecordList){
        system.debug('offeridstr='+newRecord);
        system.debug('productdetails='+newRecordList);
         return [SELECT Id, Name FROM Contact];
    }
}