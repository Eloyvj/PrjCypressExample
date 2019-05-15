# EXAMPLE CYPRESS-CUCUMBER 

> Repository with an example of automation using cypress integrated with cucumber. Page object pattern was used too.

---

## Requirements

> Have node.js installed. View installation steps [here](https://nodejs.org/en/)

## Installation

> Clone
- Clone this repo to your local machine using `https://github.com/Eloyvj/PrjCypressExample.git`

- Install all dependencies (package.json)
`npm install`

### Run tests

> run test headless (electron)

```shell
$ npm run cypress:run
```

> run test interactive mode.

```shell
$ npm run cypress:open
```

> run test tags for cucumber.

```shell
$ npm run cypress:tags
```

---

## Features
- file example `.feature`

```gherkin
#language: en

@e2e
Feature: Search by a scrum post in concrete site

Scenario: Search in concrete page
    Given I open the home page
    When I search by a post in blog with title "Scrum"
    Then I see the first post with title "ProdCast #40 – SCRUM"
```

## Report

> run test report

```shell
$ npm run cypress:report
```

---