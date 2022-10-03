import HomePage from '../pages/home';
import {expectedTeamHubsNavItems} from '../data/data';
import {team} from '../data/data'; 

describe("Header: TeamHub Items", () => {

    beforeEach("Navigate To", async()=>{
        HomePage.allureReporter.addFeature("Navigation Bars");
        HomePage.allureReporter.addSeverity("normal");
        HomePage.allureReporter.addStory('Menu: TeamHubs Navigation Bar');
        await HomePage.open(); 
    });
    
    it("Get all the Team Hubs Menu Items", async()=>{ 
        const teamHubsNav = await HomePage.TeamHubsNavComponent.allTeamHubsItems;
        const currentTeamHubs = await HomePage.getTextTitles(teamHubsNav);
        await expect(currentTeamHubs).toEqual(expectedTeamHubsNavItems);
    });
    
    it("Navigate to Team Hubs", async()=>{ 
        await HomePage.TeamHubsNavComponent.navigateToTeamHub(team);
        await expect(browser).toHaveUrlContaining(team.toLocaleLowerCase());
        await expect(await HomePage.TeamHubsNavComponent.getMoreSections(team)).toBePresent();
    });

    after("Report Data to Allure", async()=>{
        //Allure data
        HomePage.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
    });
});