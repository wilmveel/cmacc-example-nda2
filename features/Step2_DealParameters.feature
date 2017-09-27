Feature: Step2_DealParameters

  Scenario: Adding data
    Given I compile "Step2_DealParameters.cmacc"
    Then it contains the following variables and values:
      | deal.intro.party1.full_Name                                 | Gerry's Grapes, LLC             |

      # | deal.intro.party2                                         | Roberta Robinson |
      | deal.intro.party2.individual.full_Name                      | {{first_Name}} {{last_Name}}    |
      | deal.intro.party2.individual.first_Name                     | Roberta                         |
      | deal.intro.party2.individual.last_Name                      | Robinson                        |

      | deal.intro.effective_Date                                   | 2017-09-12                      |
      | deal.term.life_End_YMD                                      | 2018-12-31                      |
      | deal.confid.deal_Confidential_Information.subject           | the current, future, and proposed products and services of |
      | deal.confid.deal_Confidential_Information.info_Types        | proprietary and confidential information, ideas, techniques, sketches, drawings, works of authorship, models, inventions, know-how, processes, apparatuses, equipment, algorithms, software programs, software source documents, and formulae |
      | deal.confid.deal_Confidential_Information.info_Examples     | research, experimental work, development, design details and specifications, engineering, financial information, procurement requirements, purchasing, manufacturing, customer lists, investors, employees, business and contractual relationships, business forecasts, sales and merchandising, and marketing plans |
      | deal.closing.sign_Party1.sign_Entity.full_Name              | Gerry's Grapes, LLC             |

      # | deal.closing.sign_Party2.sign_Entity                      | Roberta Robinson |
      | deal.closing.sign_Party2.sign_Entity.individual.full_Name   | {{first_Name}} {{last_Name}}    |
      | deal.closing.sign_Party2.sign_Entity.individual.first_Name  | Roberta                         |
      | deal.closing.sign_Party2.sign_Entity.individual.last_Name   | Robinson                        |

      # | deal.closing.sign_Party1.sign_Rep                         | Geraldine Graber                |
      | deal.closing.sign_Party1.sign_Rep.full_Name                 | {{first_Name}} {{last_Name}}    |
      | deal.closing.sign_Party1.sign_Rep.first_Name                | Geraldine                       |
      | deal.closing.sign_Party1.sign_Rep.last_Name                 | Graber                          |

      # | deal.closing.sign_Party2.sign_Rep                         | Roberta Robinson |
      | deal.closing.sign_Party2.sign_Rep.full_Name                 | {{first_Name}} {{last_Name}}   |
      | deal.closing.sign_Party2.sign_Rep.first_Name                | Roberta                        |
      | deal.closing.sign_Party2.sign_Rep.last_Name                 | Robinson                       |

      | deal.closing.sign_Party1.sign_Rep_Title                     | General Manager                |
      | deal.closing.sign_Party2.sign_Rep_Title                     | Self                           |
