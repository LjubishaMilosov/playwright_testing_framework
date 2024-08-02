@dev

Feature: As a user I should be able to register on the platform

  Scenario: As a user I can registrate on the platform
    Given I navigate to the register page
    And I enter random first name
    And I enter random last name
    And I enter random username
    And I enter random email address
    And I enter random phone number
    And I enter the password
    And I enter the confirm password
    And I enter random promo code
    And I click terms and conditions checkbox
    And I click on register button
    Then I expect user to be successfully registered
    When I click on the sportbook tab
    When I click on the user dropdown menu
    And I select the personal info option from loggedin user dropdown
    Then I expect the user personal details to match the registration details