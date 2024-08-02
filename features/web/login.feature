

Feature: User should be able to successfully Login 

  Scenario: User logs in with invalid username

    Given I navigate to home page
    And I enter "username" and "invalidPassword"
    And I click on login button
    Then I expect error message to appear

    Scenario: User logs in with invalid password

    Given I navigate to home page
    And I enter "invalidUsername" and "password"
    And I click on login button
    Then I expect error message to appear
  
  Scenario: User logs in with valid credentials
    Given I navigate to home page
    And I enter "username" and "password"
    And I click on login button
    Then I expect to be successfully logged in

    # When I click on the user dropdown menu
    # And I select the personal info option from loggedin user dropdown
     

    