Feature: Main funnel
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: Do search
    Given Home page
    When I click on header-deals
    Then I should be on page

  Scenario: Do search 2
    Given Home page
    When I click on searchButton
    Then I should be on page
