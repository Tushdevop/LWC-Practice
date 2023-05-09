
public with sharing class LWCRecipeApexController {
    

    //contact list for wired property
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, FirstName, LastName, title, Phone, Email 
                FROM Contact
                WITH SECURITY_ENFORCED
                LIMIT 10];
    }

    @AuraEnabled
    public static void updateContacts(List<Contact> contactsForUpdate) {
        // Make sure we can update the database before trying to update
        if (!Schema.sObjectType.Contact.isUpdateable()) {
            throw new SecurityException(
                'Insufficient permissions to update contacts'
            );
        }
        update contactsForUpdate;
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

    //Get Single contact for Static schema
    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact(){
        return [ SELECT Id, Name, Email 
                 FROM Contact
                 WHERE Name!=null
                 WITH SECURITY_ENFORCED
                 limit 1];
    }

    //get account list
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String searchString){
        String key = '%' + searchString + '%';

        return [SELECT Id, Name
                FROM Account
                WHERE Name LIKE :key
                WITH SECURITY_ENFORCED
                LIMIT 5];
    }

    //get all opportunities
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityList(String searchString){
        String key = '%' + searchString + '%';

        return [SELECT Id, Name
                FROM Opportunity
                WHERE Name LIKE :key
                WITH SECURITY_ENFORCED
                LIMIT 5];
    }
}