class TeamHubsNavComponent{
    get allTeamHubsItems(){
        return $$('.team-nav a');
    }
    async navigateToTeamHub(teamhub){
        const th = await this.getTeamHubLink(teamhub);
        await th.click(); 
    }
    async getTeamHubLink(teamhub){
        let th = await this.allTeamHubsItems;

        for(const item of th){
            if(await item.getText()==teamhub)
                return item;
        }
    }  
    getMoreSections(team){
        return $(`h1=MORE ${team}`);
    }
}
export default new TeamHubsNavComponent();