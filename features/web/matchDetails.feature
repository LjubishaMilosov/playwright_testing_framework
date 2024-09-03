@dev

Feature: Match Details page

Background:
    Given I navigate to home page

    Given I navigate to sports US layout page

    When I click on the Highlights button on web

    When I select and click on specific event on web
    Then I expect the Home team's name for the selected event to be displayed in Match Details on web
    And I expect the Away team's name for the selected event to be displayed in Match Details on web

    Scenario: User navigates to the Random Event to see the Match Details
    And I expect the event name bellow the header for Home team to remain the same
    And I expect the event name bellow the header for Away team to remain the same
    And I expect the outcome name to be displayed
    And I expect Odds to be avalible
    And I expect to see the navigation bar
    And I expect navigation bar to contain the following tabs:
      | Popular     |
      | All Markets |