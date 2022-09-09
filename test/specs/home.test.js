import HomePage from '../pages/home';
import {expectedSections} from '../data/data';

describe("Home Page Sections", () => {

    beforeEach("Navigate To", async()=>{
        HomePage.allureReporter.addSeverity("normal");
        HomePage.allureReporter.addFeature("All Sections");
        await HomePage.open();
    });

    it("Validate texts on Homepage sections", async()=>{
        HomePage.allureReporter.addStory('All Sections Texts');
        const sectionsTitles = await HomePage.allTextSections;
        const currentSections = await HomePage.getTitlesText(sectionsTitles);

        await expect(currentSections).toEqual(expectedSections);
    });

    it("Clicking first Hero Article on the Homepage", async()=>{
        HomePage.allureReporter.addStory('Hero Section');

        const partialArtUrl =  await HomePage.hrefFirstHeroArticle.getAttribute('href');         
        await HomePage.firstHeroArticle.click();
        await expect(browser).toHaveUrlContaining(partialArtUrl);
    });

    it("Playback first Video on the Homepage", async()=>{
        HomePage.allureReporter.addStory('Videos');
        HomePage.allureReporter.addSeverity("critical");

        await HomePage.firstVideopage.click()
        await expect(HomePage.firstVideopage).toHaveElementClassContaining('jw-state-playing');
    });
    /***
     * Sometimes Ads are not displayed and is ok, that depends on a schedule contract of SNY
     * with the advertisement company*/
    it("Ads on Videopage Thumbnails on Watchnow Homepage", async()=>{ 
        HomePage.allureReporter.addStory('Videos');
        HomePage.allureReporter.addSeverity("critical");
        
        await HomePage.firstVideopage.click();
        await expect(HomePage.firstAdsVideopage).toHaveProperty('width'); 
        await expect(HomePage.firstAdsVideopage).toHaveProperty('height'); 
    });

    after("Report Data to Allure", async()=>{
        //Allure data
        HomePage.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
    });
});