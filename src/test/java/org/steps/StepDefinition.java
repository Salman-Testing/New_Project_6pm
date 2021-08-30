package org.steps;

import java.util.List;
import java.util.Map;

import org.baseClass.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class StepDefinition extends BaseClass  {
	
	
	@Given("User will hit the URlA.")
	public void user_will_hit_the_URlA() {
	    System.out.println("Scenario 1");
	}

	@When("User will enter the username and password in the Respective fieldsA.")
	public void user_will_enter_the_username_and_password_in_the_Respective_fieldsA(DataTable d) {
		System.out.println("Scenario 1");
		List<Map<String, String>> mp = d.asMaps();
		
		System.out.println("Username : "+mp.get(2).get("Username"));
		System.out.println("Password : "+mp.get(3).get("Password"));
		
		
	}

	@When("User will click the logIn buttonA.")
	public void user_will_click_the_logIn_buttonA() {
		System.out.println("Scenario 1");
	}

	@Then("User should be Displayed, with the Error PageA.")
	public void user_should_be_Displayed_with_the_Error_PageA() {
		System.out.println("Scenario 1");
	}

	@Given("User will hit the UrlB..")
	public void user_will_hit_the_UrlB() {
		System.out.println("Scenario 2");
		browserLaunch();
		urlLaunch("https://en-gb.facebook.com/");
		
	}

	@When("User will enter the Username and password in the Respective fieldsB..")
	public void user_will_enter_the_Username_and_password_in_the_Respective_fieldsB() {
		System.out.println("Scenario 2");
		driver.findElement(By.name("email")).sendKeys("Java");
		driver.findElement(By.name("pass")).sendKeys("Java@1234");
	}

	@When("User will click the lOgIn buttonB..")
	public void user_will_click_the_lOgIn_buttonB() {
		System.out.println("Scenario 2");
		Assert.assertTrue(false);
		driver.findElement(By.name("login")).click();
	}

	@Then("User should be DisPlayed: with the Error PageB..")
	public void user_should_be_DisPlayed_with_the_Error_PageB() {
		System.out.println("Scenario 2");
	}

	@Given("User will hit the URlC!")
	public void user_will_hit_the_URlC() {
		System.out.println("Scenario 3");
	}

	@When("User will enter the username and password in the Respective fieldsC!")
	public void user_will_enter_the_username_and_password_in_the_Respective_fieldsC() {
		System.out.println("Scenario 3");
	}

	@When("User will click the logIn buttonC!")
	public void user_will_click_the_logIn_buttonC() {
		System.out.println("Scenario 3");
	}

	@Then("User should be Displayed with the Error PageC!")
	public void user_should_be_Displayed_with_the_Error_PageC() {
		System.out.println("Scenario 3");
	}

	@Given("User will hit The UrlD!")
	public void user_will_hit_The_UrlD() {
		System.out.println("Scenario 4");
		browserLaunch();
		urlLaunch("https://en-gb.facebook.com/");
	}

	@When("User will enter The Username and password in the Respective fieldsD!")
	public void user_will_enter_The_Username_and_password_in_the_Respective_fieldsD() {
		System.out.println("Scenario 4");
		driver.findElement(By.name("email")).sendKeys("Selenium");
		driver.findElement(By.name("pass")).sendKeys("Selenium@1234");
	}

	@When("User will click The lOgIn buttonD!")
	public void user_will_click_The_lOgIn_buttonD() {
		System.out.println("Scenario 4");
		Assert.assertTrue(false);
		driver.findElement(By.name("login")).click();
	}

	@Then("User should be DisPlayed with The Error PageD!")
	public void user_should_be_DisPlayed_with_The_Error_PageD() {
		System.out.println("Scenario 4");
	}

	

}
