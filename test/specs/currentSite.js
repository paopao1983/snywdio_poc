import {expectedTeamHubsNavItems} from '../data/data'; 

describe('Feeds',()=>{
    
    it('Compare first 10 items filtering by Team', async()=>{
        let linksMap = [];
        
        for await (const team of expectedTeamHubsNavItems) {
            let links = [];

            await browser.url(`https://sny.tv/feed?team=${team.toLowerCase()}`);
            console.log("TEAM: " + team);
            
            let items = await $$('item');
  
            for (let i = 0; i < 2; i++) {
                const item = (await items[i].$('link'));
                links.push(await item.getHTML(false));
                console.log("LINKS: " + await item.getHTML(false)+"\n");

            } 
            console.log("LINKS: " + links);

            for (let i = 0; i < 2; i++) {
                await browser.url(links[i]);
                const tags = await $('.tag-wrapper');
                await tags.scrollIntoView();
                linksMap.push(i + ": "+ links[i] , await tags.getText()+"\n\n");
                expect(tags).toHaveTextContaining(team);
            } 
            console.log("TEAM: " + team);
            console.log("links Map: " + linksMap)

        }
        /*for(const team of expectedTeamHubsNavItems){
            await browser.url(`https://sny.tv/feed?team=${team.toLowerCase()}`);
            
            /*let items = await $$('item');
 
            for (let i = 0; i < 10; i++) {
                const item = (await items[i].$('link'));
                links.push(await item.getHTML(false));
            } 

            for (let i = 0; i < 10; i++) {
                await browser.url(links[i]);
                const tags = await $('.tag-wrapper');
                await tags.scrollIntoView();
                linksMap.push(i + ": "+ links[i] , await tags.getText()+"\n\n");
                await expect(tags).toHaveTextContaining(team);
            } 
            console.log("TEAM: " + team);
        }

        console.log("Links: " + links)

        console.log("links Map: " + linksMap)
*/
    });
});