import HomePage from '../pages/home';
import {searchText} from '../data/data';

describe('Search Component',()=>{
    
    beforeEach('Navigate To', async()=>{
        HomePage.allureReporter.addSeverity("normal");
        HomePage.allureReporter.addFeature("Search");       
        await HomePage.open();
    });

    it('Preview searchbar', async()=>{
        HomePage.allureReporter.addStory('Search: Preview');
        await HomePage.SearchComponent.fillSearchForm(searchText.text2);
        const results =  await HomePage.SearchComponent.previewResults; 
        await expect(results.length).toBeGreaterThan(0);
        await expect(results.length).toBeLessThanOrEqual(4);   
    });

    it('Navigate to All Results', async()=>{
        HomePage.allureReporter.addStory("Search: View All Results");

        await HomePage.SearchComponent.fillSearchForm(searchText.text1);
        const urlToCompare = await HomePage.SearchComponent.viewResultsBtn.getAttribute('href');
        await HomePage.SearchComponent.viewResultsBtn.click();
        await expect(browser).toHaveUrlContaining(urlToCompare);
    });
    
    after("Report Data to Allure", async()=>{
    //Allure data
    HomePage.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
});
});
