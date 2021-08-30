package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;





@RunWith (Cucumber.class)
@CucumberOptions (features="src/test/resources",glue="org.steps",
dryRun=false,monochrome=true, strict=true,
plugin= {"html:C:\\Users\\salma\\eclipse-workspace\\Cucumber_4pmBatch\\REPORTS\\HTMLReport",
		"json:C:\\Users\\salma\\eclipse-workspace\\Cucumber_4pmBatch\\REPORTS\\JSONReport\\jsonGenerate.json",
		"junit:C:\\Users\\salma\\eclipse-workspace\\Cucumber_4pmBatch\\REPORTS\\JUNITReport\\junitGenerate.xml",
		"rerun:C:\\Users\\salma\\eclipse-workspace\\Cucumber_4pmBatch\\FailedSce\\Failed.txt"})
public class RunnerClass {
	
	@AfterClass
	public static void jvm() {
		JvmReport.jvmGenerate("C:\\\\Users\\\\salma\\\\eclipse-workspace\\\\Cucumber_4pmBatch\\\\REPORTS\\\\JSONReport\\\\jsonGenerate.json");

	}

}
