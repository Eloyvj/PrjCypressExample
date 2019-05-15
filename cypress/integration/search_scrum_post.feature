#language: en

@e2e
Feature: Search by a scrum post in concrete site

Scenario: Search in concrete page
    Given I open the home page
    When I search by a post in blog with title "Scrum"
    Then I see the first post with title "ProdCast #40 – SCRUM"
