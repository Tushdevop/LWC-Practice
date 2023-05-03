/*
*/
public without sharing class fetchAccountRecords {
   //@AuraEnabled is annotation enables LWC to access below apex method
    //(cacheable=true) is for caching the data on client side storage without 
    //waiting for server trips. Which imporves the performance
    @AuraEnabled
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Id, Name FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}