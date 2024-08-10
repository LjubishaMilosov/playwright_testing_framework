

Feature: Player's info tabs should display the correct information

  Background:
   Given I navigate to home page

    And I enter "username" and "password"
    And I click on login button
    Then I expect to be successfully logged in

  Scenario Outline: Check all tabs are present and contain correct info
    
    When I click on user dropdown menu
    And I select 'Personal Info' option from logged in user dropdown
    Then I expect 'Personal' menu tab to be present
    Then I expect logged in user to have correct username
   