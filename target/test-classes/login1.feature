Feature: To validate the login functionality

@Sanity
  Scenario: To verify the login with valid username and invalid passwordC!
    And User will hit the URlC!
    When User will enter the username and password in the Respective fieldsC!
    And User will click the logIn buttonC!
    Then User should be Displayed with the Error PageC!

@Smoke
  Scenario: To verify the login with invalid useRname and invalid passwordD!
    And User will hit The UrlD!
    When User will enter The Username and password in the Respective fieldsD!
    And User will click The lOgIn buttonD!
    Then User should be DisPlayed with The Error PageD!
