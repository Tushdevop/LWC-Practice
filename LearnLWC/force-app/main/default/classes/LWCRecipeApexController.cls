
public with sharing class LWCRecipeApexController {
    

    //contact list for wired property
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Email 
                FROM Contact
                WITH SECURITY_ENFORCED
                LIMIT 5];
    }

    //contact list for wired function
    @AuraEnabled(cacheable=true)
    public static List<Contact> getMultipleContacts(){
        return [SELECT Id, Name, Email 
                FROM Contact
                WHERE Name!=null
                WITH SECURITY_ENFORCED 
                LIMIT 5];
    }
}