@dev

Feature: New users should be able to register on the platform and login with their newly registered user

  Scenario: As a user I can registrate and then login on the platform

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
   Then I expect user to be redirected to the thank-you page
   Then I expect user to be redirected to the home page
   When I click on the sportbook tab

  
  
    When I enter username and password
    And I click the login  button
    Then I expect to be successfully logged in

    