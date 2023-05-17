public with sharing class FDAdataFetch {
        public Meta meta;
        public Results[] results;
        class Meta {
            public String disclaimer;	//Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service.
            public String terms;	//https://open.fda.gov/terms/
            public String license;	//https://open.fda.gov/license/
            public String lastupdated;	//2023-05-09
            public Results results;
        }
        class Results {
            public Submissions[] submissions;
            public String applicationNumber;	//ANDA078334
            public String sponsorName;	//INTRA SANA LABS
            public Products[] products;
        }
        class Submissions {
            public String submissionType;	//SUPPL
            public String submissionNumber;	//3
            public String submissionStatus;	//AP
            public String submissionStatusDate;	//20101029
            public String submissionClassCode;	//LABELING
            public String submissionClassCodeDescription;	//Labeling
        }
        class Products {
            public String productNumber;	//001
            public String referenceDrug;	//No
            public String brandName;	//GRANISOL
            public ActiveIngredients[] activeIngredients;
            public String referenceStandard;	//No
            public String dosageForm;	//SOLUTION
            public String route;	//ORAL
            public String marketingStatus;	//Discontinued
        }
        class ActiveIngredients {
            public String name;	//GRANISETRON HYDROCHLORIDE
            public String strength;	//EQ 2MG BASE/10ML
        }
        public static FDAdataFetch parse(String json){
            return (FDAdataFetch) System.JSON.deserialize(json, FDAdataFetch.class);
        }
}