/*
*
*/
public with sharing class GetAllOpportunites {
    //method to get all opportunites
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityRecords(){
        try {
                return [SELECT Id, Name, AccountId, Account.Name, StageName, Amount, CloseDate 
                        FROM Opportunity 
                        WHERE StageName != 'Perception Analysis'
                        WITH SECURITY_ENFORCED
                        order by Name];
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
    }
}