$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify the login with invalid username and valid passwordA.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User will hit the URlA.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_hit_the_URlA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter the username and password in the Respective fieldsA.",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Selenium",
        "Selemnium@1234"
      ]
    },
    {
      "cells": [
        "Java",
        "Sql@12344"
      ]
    },
    {
      "cells": [
        "Python",
        "Java@1234"
      ]
    },
    {
      "cells": [
        "SQL",
        "Python@1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_will_enter_the_username_and_password_in_the_Respective_fieldsA(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click the logIn buttonA.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_click_the_logIn_buttonA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be Displayed, with the Error PageA.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_Displayed_with_the_Error_PageA()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login with valid username and valid passwordB..",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User will hit the UrlB..",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_hit_the_UrlB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter the Username and password in the Respective fieldsB..",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_will_enter_the_Username_and_password_in_the_Respective_fieldsB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click the lOgIn buttonB..",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_click_the_lOgIn_buttonB()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.steps.StepDefinition.user_will_click_the_lOgIn_buttonB(StepDefinition.java:63)\r\n\tat ✽.User will click the lOgIn buttonB..(file:src/test/resources/login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be DisPlayed: with the Error PageB..",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_DisPlayed_with_the_Error_PageB()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/login1.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify the login with valid username and invalid passwordC!",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User will hit the URlC!",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_hit_the_URlC()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter the username and password in the Respective fieldsC!",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_will_enter_the_username_and_password_in_the_Respective_fieldsC()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click the logIn buttonC!",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_click_the_logIn_buttonC()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be Displayed with the Error PageC!",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_Displayed_with_the_Error_PageC()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login with invalid useRname and invalid passwordD!",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User will hit The UrlD!",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_hit_The_UrlD()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will enter The Username and password in the Respective fieldsD!",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_will_enter_The_Username_and_password_in_the_Respective_fieldsD()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click The lOgIn buttonD!",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_will_click_The_lOgIn_buttonD()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.steps.StepDefinition.user_will_click_The_lOgIn_buttonD(StepDefinition.java:109)\r\n\tat ✽.User will click The lOgIn buttonD!(file:src/test/resources/login1.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be DisPlayed with The Error PageD!",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_DisPlayed_with_The_Error_PageD()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});