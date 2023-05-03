public with sharing class ContactHelper {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, AccountId, email
                FROM Contact];
    }
}