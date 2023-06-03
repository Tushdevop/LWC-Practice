/*
********************************************************
@decription : Handler class for lwc datatble calls
@Author     : Developer Scenes
Modification Log :
ver     author      date        modification
v1.0    devscence   03Jun2023   initial version
********************************************************
*/
public class DataTablePractice {

    //contact list for wired property
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, FirstName, LastName, title, Phone, Email 
                FROM Contact
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
    
}