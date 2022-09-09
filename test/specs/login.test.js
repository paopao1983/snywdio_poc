import HomePage from '../pages/home'; 
import {userData} from '../data/data';

describe("SNY Login Page", async() => {

    beforeEach("Navigate To", async()=>{
        HomePage.allureReporter.addSeverity("normal");
        HomePage.allureReporter.addFeature("Login");
        await HomePage.open();
    })

    it('login', async()=>{
        HomePage.allureReporter.addStory("Login");
        await HomePage.AccountComponent.FillLogIn(userData.email, userData.password);
        const subBtn = await HomePage.AccountComponent.getSignInBtn();
        await subBtn.click();
        await expect(HomePage.AccountComponent.userMenu).toBeDisplayed();
    });

    it('Sign Out', async()=>{
        HomePage.allureReporter.addStory("Logout");
        await HomePage.AccountComponent.userMenu.click();
        await HomePage.AccountComponent.signOutBtn.click();
        await expect(HomePage.AccountComponent.loginForm).toBeDisplayed();
    });

    after("Report Data to Allure", async()=>{
        //Allure data
        HomePage.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
    });
});
