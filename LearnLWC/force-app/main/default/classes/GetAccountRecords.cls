public with sharing class GetAccountRecords {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecordList(){
        return [SELECT Id, Name 
                FROM Account
                limit 10
                ];  
    }


     @AuraEnabled(cacheable=true)
    public static List<Account> getAccountListwithParam(String type){
        return [SELECT Id, Name, Type 
                FROM Account
                WHERE Type=:type
                limit 10
                ];  
    }


    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsParam(String searchkey){
        String key = '%'+searchkey+'%';
        return [SELECT Id, Name, Type 
                FROM Account
                WHERE Name LIKE:key
                limit 5
                ];  
    }

    
}
