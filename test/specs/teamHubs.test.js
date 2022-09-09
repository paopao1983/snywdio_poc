import TeamHub from '../pages/teamHub'; 
import HomePage from '../pages/home'; 
import {team} from '../data/data';

describe("TeamHubs Page", () => {

    beforeEach("Navigate To", async()=>{
        await TeamHub.open(team.toLocaleLowerCase()); 
        TeamHub.allureReporter.addFeature("TeamHubs Sections");
        TeamHub.allureReporter.addSeverity("normal");
    });

    it("Answering a Team Poll", async()=>{  
        TeamHub.allureReporter.addStory('Poll Functionality');

        await TeamHub.answeringPoll();
        await expect(TeamHub.answerSent).toBeDisplayed();
    }); 

    it("Verify TeamHub Stats Tab", async()=>{
        TeamHub.allureReporter.addStory("TeamHubs Tabs");
        TeamHub.allureReporter.addDescription("Stats");
        TeamHub.allureReporter.addSeverity("critical");

        await TeamHub.statsTab.click();
        await expect(TeamHub.statsPanel).toBeDisplayed();
        await expect(TeamHub.statsSubTabs).toHaveTextContaining('TEAM');
        await expect(TeamHub.statsSubTabs).toHaveTextContaining('PLAYERS');
        await expect(TeamHub.schedulePanel).not.toBeDisplayed();
        await expect(TeamHub.newsSection).not.toBeDisplayed();
    });

    it("Verify Team Hub Schedule Tab when data Coming", async()=>{
        TeamHub.allureReporter.addStory("TeamHubs Tabs");
        TeamHub.allureReporter.addDescription("Schedule");
        TeamHub.allureReporter.addSeverity("critical");

        await TeamHub.scheduleTab.click();
        const selector = await TeamHub.selectorDate;

        await browser.waitUntil(  
                async function() {
                        return (selector.length > 0);
                }, {
                    timeout: 500,
                    timeoutMsg: `Could not verify the Schedule data or There are no coming matches for this team: ${team}`
                }
        );

        await expect(await selector[1].getText()).toContain((new Date().getFullYear()).toString());
        await expect(TeamHub.statsPanel).not.toBeDisplayed();
        await expect(TeamHub.newsSection).not.toBeDisplayed();
    });

    it.skip("Verify Team Hub Schedule Tab when no data Comming", async()=>{
        TeamHub.allureReporter.addStory("TeamHubs Tabs");
        TeamHub.allureReporter.addDescription("Schedule");
        
        await TeamHub.scheduleTab.click();

        await browser.waitUntil( 
            async function() {  
                        return (await TeamHub.scheduleLoader.isDisplayedInViewport()===false);
                }, {
                    timeout: 500,
                    timeoutMsg: `Could not verify the Schedule because is taking too much time retrieving the data for the team: ${team}`
                }
        ); 
        await expect(TeamHub.schedulePanel).toBeDisplayed();
        await expect(TeamHub.schedulePanel).toHaveTextContaining('There are no coming matches for this team.');
        await expect(TeamHub.statsPanel).not.toBeDisplayed();
        await expect(TeamHub.newsSection).not.toBeDisplayed();
    });

    it("Verify TeamHub News Tabs", async()=>{
        TeamHub.allureReporter.addSeverity("critical");
        TeamHub.allureReporter.addStory("TeamHubs Tabs");
        TeamHub.allureReporter.addDescription("News");

        await TeamHub.newsTab.click();
        await expect(TeamHub.newsSection).toBeDisplayed();
        await expect(TeamHub.statsPanel).not.toBeDisplayed();
        await expect(TeamHub.schedulePanel).not.toBeDisplayed();
    });

    it("Verify Team Hub Yankees Tabs", async()=>{
        TeamHub.allureReporter.addStory("TeamHubs Tabs");
        TeamHub.allureReporter.addSeverity("critical");

        await HomePage.TeamHubsNavComponent.navigateToTeamHub('Yankees');
        await TeamHub.fanForumYankees.click(); 
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expect(browser).toHaveUrl('http://nyyfansforum.sny.tv/forum/?utm_source=sny&utm_medium=redirect&utm_campaign=sny-referral');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    after("Report Data to Allure", async()=>{
        //Allure data
        TeamHub.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
    });
});