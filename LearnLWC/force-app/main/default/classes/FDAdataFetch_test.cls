@isTest
public with sharing class FDAdataFetch_test {
    @isTest static void testParse() {
        String json=		'{'+
        '  "meta": {'+
        '    "disclaimer": "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service.",'+
        '    "terms": "https://open.fda.gov/terms/",'+
        '    "license": "https://open.fda.gov/license/",'+
        '    "last_updated": "2023-05-09",'+
        '    "results": {'+
        '      "skip": 0,'+
        '      "limit": 1,'+
        '      "total": 13105'+
        '    }'+
        '  },'+
        '  "results": ['+
        '    {'+
        '      "submissions": ['+
        '        {'+
        '          "submission_type": "SUPPL",'+
        '          "submission_number": "3",'+
        '          "submission_status": "AP",'+
        '          "submission_status_date": "20101029",'+
        '          "submission_class_code": "LABELING",'+
        '          "submission_class_code_description": "Labeling"'+
        '        },'+
        '        {'+
        '          "submission_type": "SUPPL",'+
        '          "submission_number": "1",'+
        '          "submission_status": "AP",'+
        '          "submission_status_date": "20080630",'+
        '          "submission_class_code": "LABELING",'+
        '          "submission_class_code_description": "Labeling"'+
        '        },'+
        '        {'+
        '          "submission_type": "SUPPL",'+
        '          "submission_number": "4",'+
        '          "submission_status": "AP",'+
        '          "submission_status_date": "20140918",'+
        '          "review_priority": "STANDARD",'+
        '          "submission_class_code": "LABELING",'+
        '          "submission_class_code_description": "Labeling"'+
        '        },'+
        '        {'+
        '          "submission_type": "SUPPL",'+
        '          "submission_number": "2",'+
        '          "submission_status": "AP",'+
        '          "submission_status_date": "20101029",'+
        '          "submission_class_code": "LABELING",'+
        '          "submission_class_code_description": "Labeling"'+
        '        },'+
        '        {'+
        '          "submission_type": "ORIG",'+
        '          "submission_number": "1",'+
        '          "submission_status": "AP",'+
        '          "submission_status_date": "20080228"'+
        '        }'+
        '      ],'+
        '      "application_number": "ANDA078334",'+
        '      "sponsor_name": "INTRA SANA LABS",'+
        '      "products": ['+
        '        {'+
        '          "product_number": "001",'+
        '          "reference_drug": "No",'+
        '          "brand_name": "GRANISOL",'+
        '          "active_ingredients": ['+
        '            {'+
        '              "name": "GRANISETRON HYDROCHLORIDE",'+
        '              "strength": "EQ 2MG BASE/10ML"'+
        '            }'+
        '          ],'+
        '          "reference_standard": "No",'+
        '          "dosage_form": "SOLUTION",'+
        '          "route": "ORAL",'+
        '          "marketing_status": "Discontinued"'+
        '        }'+
        '      ]'+
        '    }'+
        '  ]'+
        '}';
        FDAdataFetch obj = FDAdataFetch.parse(json);
        System.assert(obj != null, 'Json return all values');
    }
}