public with sharing class GetAccountRecords {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecordList(){
        return [SELECT Id, Name FROM Account];  
    }
}