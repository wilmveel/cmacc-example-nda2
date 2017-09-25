Feature: Step3_Signatures
      
  Scenario: Adding signatures
    Given I compile "Step3_Signatures.cmacc"
    Then it contains the following variables and values:
      | finalized_Deal.deal.closing.sign_Party1_Date      | 2014-08-13:12:03 |
      | finalized_Deal.deal.closing.sign_Party2_Date      | 2014-08-27:14:32 |
      | finalized_Deal.deal.closing.sign_Party1_Signature | xGerry           |
      | finalized_Deal.deal.closing.sign_Party2_Signature | xRoberta         |
      | finalized_Deal.deal.closing.sign_Party1_Place     | Cambridge        |
      | finalized_Deal.deal.closing.sign_Party2_Place     | Woodstock        |
