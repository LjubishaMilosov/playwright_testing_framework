

Feature: User navigates within the Fixture tree

Background:

Given I navigate to home page

Given I navigate to sports US layout page

Scenario Outline: User navigates to Search Input
When I type "<sport>" into the search input field
Then I expect to see a list of searched matches on web

Examples:
  | sport  |
  | Soccer |

Scenario: User navigates to quick links
When I click on random league from Quick links
Then I expect the league with the same name to be displayed in the title

Scenario: User Navigates to All Sports
When I click on a random sport
Then I click on Tournament widget header
Then I expect to see a list of tournaments