@dev

Feature: New users should be able to register and login with their newly registered user

  Scenario: As a user I can registrate and then login on the platform

    Given I navigate to register page
    And I enter random first name
    And I enter random last name
    And I enter random username
    And I enter random email address
    And I enter random phone number
    And I enter password
    And I enter confirm password
    And I enter random promo code
    And I click terms and conditions checkbox
    And I click on register button
   Then I expect user to be redirected to thank-you page
   Then I expect user to be redirected to home page

    When I enter username and password
    And I click on login button
    Then I expect to be successfully logged in
    
    When I click on user dropdown menu
    And I select 'Personal Info' option from logged in user dropdown
    Then I expect registration details to match user personal details

    