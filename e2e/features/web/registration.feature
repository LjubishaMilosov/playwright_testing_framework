
Feature: As a user I should be able to register on the platform

  Scenario: As a user I can registrate on the platform
    Given I navigate to the registration page
    And I fill in first name
    And I fill in last name
    And I fill in username
    And I fill in email address
    And I fill in phone number
    And I enter password
    And I enter confirm password
    And I enter promo code
    And I check the terms and conditions checkbox
    And I click on the register button
    Then I expect the user to be successfully registered
#And I select the personal info option from loggedin user dropdown
#Then I expect the user personal details to match the registration details