package org.steps;

import org.baseClass.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
	
	@Before (order=2)
	public void urlLaunch() {
		System.out.println("Url Launch");

	}
	@Before (order=1)
	public void browserLaunching() {
		System.out.println("Browser Launch");

	}
	@Before (order=3,value="@Regression")
	public void implicit() {
		System.out.println("implicit Wait time");

	}
	
	
	@After (order=3, value="@Sanity")
	public void logOut() {
		System.out.println("Log OUT");

	}
	@After (order=2, value="@Regression")
	public void clearCookies() {
		System.out.println("Clear Cookies");

	}
	@After (order=1)
	public void closeBrowser() {
		System.out.println("Close Browser");

	}
	@After (order=0)
	public void screenShot(Scenario s) {
		
		if (s.isFailed()) {
			
			TakesScreenshot tk = (TakesScreenshot) driver;
			byte[] sc = tk.getScreenshotAs(OutputType.BYTES);
			s.embed(sc, "image/png");
			
			
		}
		
		

	}
	

}
