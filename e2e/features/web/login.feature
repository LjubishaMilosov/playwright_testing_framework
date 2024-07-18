@dev

Feature: User Login

  Scenario: User logs in with valid credentials
    Given I navigate to the home page
    And I enter "username" and "password"
    And I click the login  button
    Then I expect to be successfully logged in

