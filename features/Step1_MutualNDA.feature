Feature: Step1_MutualNDA
      
  Scenario: MutualNDA
    Given I compile "Step1_MutualNDA.cmacc"
    Then it contains the following variables and values:
      | intro.doc_Title                                 | Mutual NDA                                                                                                                                       |
      | term.notice_Period_TimeSpan                     | thirty (30) days                                                                                                                                 |
      | confid.confidential_Information.disclose_Type   | by a Party (the Disclosing Party) to the other Party (the Receiving_Party)                                                                       |
      | confid.except.except_Item.except.was_Public     | was in the public domain at the time it was disclosed to the Receiving Party                                                                  |
      | confid.except.except_Item.except.becomes_Public | entered the public domain subsequent to the time it was disclosed to the Receiving Party, through no fault of the Receiving Party             |
      | confid.except.except_Item.except.had            | was in the Receiving Party's possession free of any obligation of confidence at the time it was disclosed to the Receiving Party               |
      | confid.except_Compeled.sec_Selected_Option      | Notwithstanding any other provisions of this Agreement, the Receiving Party may disclose Confidential Information, without violating the obligations of this Agreement, to the extent such disclosure is required by a valid order of a court or other governmental body having jurisdiction, and provided that, to the extent permitted by law the Receiving Party gives the Disclosing Party reasonable prior written notice of such disclosure and makes a reasonable effort to obtain, or to assist the Disclosing Party in obtaining, a protective order preventing or limiting the disclosure and/or requiring that the Confidential Information so disclosed be used only for the purposes required by the law, regulation, or order. |
