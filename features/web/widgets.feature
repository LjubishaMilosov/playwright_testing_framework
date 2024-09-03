@dev

Feature: Check Widgets for Sports Events

  Background:
    Given I navigate to home page

    Given I navigate to sports US layout page


  Scenario: User navigates to the Popular Widget
    When I click on the Highlights button
    Then I expect the highlights section to be displayed
    And I expect list of Events to be displayed
    And I expect Market names to be displayed
    And I expect Odds to be avalible

    When I select and click on specific event
    Then I expect the Home team's name for the selected event to be displayed in Match Details
    And I expect the Away team's name for the selected event to be displayed in Match Details

    Scenario: User navigates to the Live Widget
    When I click on the Live button
    Then I expect the live section to be displayed
    And I expect list of Events to be displayed
    Then I expect Market names to be displayed
    And I expect Odds to be avalible

    When I select and click on specific event
    Then I expect the Home team's name for the selected event to be displayed in Match Details
    And I expect the Away team's name for the selected event to be displayed in Match Details

    Scenario: User navigates to the Upcoming Widget
    When I click on the Upcoming button
    Then I expect the upcoming section to be displayed
    And I expect list of Events to be displayed
    Then I expect Market names to be displayed
    And I expect Odds to be avalible

    When I select and click on specific event
    Then I expect the Home team's name for the selected event to be displayed in Match Details
    And I expect the Away team's name for the selected event to be displayed in Match Details