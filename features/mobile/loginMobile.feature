@mobile

Feature: User should be able to successfully Login 

  Scenario: User logs in on Mobile with invalid username

    Given I navigate to home page

    When I click on the login button to display the login popup on mobile
    And I enter "username" and "invalidPassword" on login popup
    And I click on login button
    Then I expect error message to appear

    Scenario: User logs in on Mobile with invalid password

    Given I navigate to home page

    When I click on the login button to display the login popup on mobile
    And I enter "invalidUsername" and "password" on login popup
    And I click on login button
    Then I expect error message to appear
  
  Scenario: User logs in on Mobile with valid credentials

    Given I navigate to home page

    When I click on the login button to display the login popup on mobile
    And I enter "username" and "password" on login popup
    And I click on login button
    Then I expect to be successfully logged in