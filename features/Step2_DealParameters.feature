Feature: Step2_DealParameters
      
  Scenario: Adding data
    Given I compile "Step2_DealParameters.cmacc"
    Then it contains the following variables and values:
      | deal.intro.party1.full_Name | Gerry's Grapes, LLC |
      | deal.intro.party2.full_Name | Roberta Robinson    |
      

