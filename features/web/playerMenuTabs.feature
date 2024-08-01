@dev

Feature: Player's info tabs should display the correct information

  Background:
   Given I navigate to the home page

    And I enter "username" and "password"
    And I click the login button
    Then I expect to be successfully logged in

  Scenario Outline: Check all tabs are present and contain correct info
    
    When I click on the user dropdown menu
    And I select the personal info option from loggedin user dropdown
    Then Then I expect displayed user details to be correct
    //Create step