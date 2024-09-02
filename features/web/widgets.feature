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
    Then I expect the Home team's name for the selected event should be displayed in Match Details
    And I expect the Away team's name for the selected event should be displayed in Match Details