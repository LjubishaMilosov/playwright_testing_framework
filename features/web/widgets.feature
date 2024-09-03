
Feature: Check Widgets for Sports Events

  Background:
    Given I navigate to home page

    Given I navigate to sports US layout page


  Scenario: User navigates to the Highlights Widget
    When I click on the Highlights button on web
    Then I expect the highlights section to be displayed on web
    And I expect list of Events to be displayed on web
    And I expect Market names to be displayed on web
    And I expect Odds to be avalible on web

    When I select and click on specific event on web
    Then I expect the Home team's name for the selected event to be displayed in Match Details on web
    And I expect the Away team's name for the selected event to be displayed in Match Details on web

    Scenario: User navigates to the Live Widget
    When I click on the Live button on web
    Then I expect the live section to be displayed on web
    And I expect list of Events to be displayed on web
    Then I expect Market names to be displayed on web
    And I expect Odds to be avalible on web

    When I select and click on specific event on web
    Then I expect the Home team's name for the selected event to be displayed in Match Details on web
    And I expect the Away team's name for the selected event to be displayed in Match Details on web

    Scenario: User navigates to the Upcoming Widget
    When I click on the Upcoming button on web
    Then I expect the upcoming section to be displayed on web
    And I expect list of Events to be displayed on web
    Then I expect Market names to be displayed on web
    And I expect Odds to be avalible on web

    When I select and click on specific event on web
    Then I expect the Home team's name for the selected event to be displayed in Match Details on web
    And I expect the Away team's name for the selected event to be displayed in Match Details on web