Feature: To validate the login functionality

@Smoke
  Scenario: To verify the login with invalid username and valid passwordA.
    And User will hit the URlA.
    When User will enter the username and password in the Respective fieldsA.
      # 2 dimentional with header  (map)
      | Username | Password       |
      | Selenium | Selemnium@1234 |
      | Java     | Sql@12344      |
      | Python   | Java@1234      |
      | SQL      | Python@1234    |
    And User will click the logIn buttonA.
    Then User should be Displayed, with the Error PageA.

@Regression
  Scenario: To verify the login with valid username and valid passwordB..
    And User will hit the UrlB..
    When User will enter the Username and password in the Respective fieldsB..
    And User will click the lOgIn buttonB..
    Then User should be DisPlayed: with the Error PageB..
