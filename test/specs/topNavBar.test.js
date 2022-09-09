import HomePage from '../pages/home';
import {expectedPrimaryNavItems} from '../data/data';

describe('Header: Top Navbar', ()=>{
    
    before('Open the site', async()=>{
        await HomePage.open();
    });

    beforeEach('Set Report vars', async()=>{
        HomePage.allureReporter.addSeverity("normal");
        HomePage.allureReporter.addFeature("Navigation Bars");
        HomePage.allureReporter.addStory('Menu: Primary Nav');
    });

    it('Get the Primary Nav Items', async()=>{
        const primNav = await HomePage.PrimaryNavComponent.primaryNavItems;
        const currentPrimNav = await HomePage.getTitlesText(primNav);
        await expect(currentPrimNav).toEqual(expectedPrimaryNavItems);
    });

    it('Clicks the First subItem in More Menu', async()=>{ 
        await HomePage.PrimaryNavComponent.primaryNavItems[0].click();
        const goUrl = await HomePage.PrimaryNavComponent.firstMoreItem.getAttribute('href');
    
        await HomePage.PrimaryNavComponent.firstMoreItem.click()
        await expect(browser).toHaveUrlContaining(goUrl);
    });

    after("Report Data to Allure", async()=>{
            //Allure data
            HomePage.allureReporter.addEnvironment("HOST", process.env.ENVSEL); 
    });
});


