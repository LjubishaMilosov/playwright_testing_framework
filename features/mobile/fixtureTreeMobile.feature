@dev
@mobile

Feature: User navigates within the Fixture tree

Background:

Given I navigate to home page

Given I navigate to sports US layout mobile page

Scenario Outline: User navigates to Sports on mobile
    When I click on All Sports button
    And I click on sport "<sport>"
    And I click on random category
    Then I expect to see a list of avaliable tournaments on mobile
    And I click on random tournament on mobile
    Then I expect to see a list of avaliable events on mobile

    Examples:
      | sport  |
      | Soccer |
      | Ice Hockey |