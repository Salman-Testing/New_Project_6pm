package org.rerun;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)
@CucumberOptions (features="@FailedSce/Failed.txt",glue="org.steps")



public class ReRunnerClass {

}
