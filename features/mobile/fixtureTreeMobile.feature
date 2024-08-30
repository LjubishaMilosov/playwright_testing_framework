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

Scenario Outline: User navigates to Sprts from the scrollable menu
  When I click on "<sport>" from the scrollable menu
  And I click on random category
  And I click on random tournament on mobile
  Then I expect to see a list of avaliable events on mobile

    Examples:
      | sport  |
      | Soccer |
      | Ice Hockey |

Scenario Outline: User searches for sports in the Search Input on mobile
  When I click on search button
  And I type in the search input field "<sport>"
  Then I expect to see a list of searched matches on mobile

  When I reset previously searched results on mobile

  When I click on search button
  And I type in the search input field "<club>"
  Then I expect to see a list of searched matches on mobile

  When I reset previously searched results on mobile

  When I click on search button
  And I type in the search input field "<league>"
  Then I expect to see a list of searched matches on mobile

  When I reset previously searched results on mobile

  When I click on search button
  And I type in the search input field "<country>"
  Then I expect to see a list of searched matches on mobile

  Examples:
    | sport  | club  | league | country |
    | soccer | Miami | NHL    | USA     |