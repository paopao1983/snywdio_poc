import Page from './page';

class TeamHub extends Page{
    open(path) {
        super.open(`teams/${path}`);
    }
    //Poll selectors
    get pollAnswersOptions(){
        return $$('.poll-answer');
    }
    get pollSubmitBtn(){
        return $('.polls-submit');
    }  
    get answerSent(){
        return $('.bg-alertGreen.text-white');
    }
    //TeamHub Tabs Bar
    get newsTab(){
        return $('button[id*="--tab--0"]');
    } 
    get newsSection(){
        return $('div[id*="--panel--0"]');
    }
    get statsTab(){
        return $('button[id*="--tab--1"]');
    }
    get statsSubTabs(){
        return $('.tabs');
    }
    get statsPanel(){
        return $('div[id*="--panel--1"]');
    }
    get scheduleTab (){ 
        return $('button[id*="--tab--2"]');
    }
    get schedulePanel(){
        return $("div[id*='--panel--2']");
    }
    get fanForumYankees(){
        return $('button[id*="--tab--3"]');
    }
    //return two elements one for mobile [0] and one for Desktop [1]
    get selectorDate(){
        return $$('.schedule-state');
    }
    get scheduleLoader(){
        return $('.css-c1pc8m');
    }
    //Operations

    async answeringPoll(){
        const option = await this.pollOption();
        await this.pollAnswersOptions[option].click(); 
        await this.pollSubmitBtn.waitForDisplayed()
        await this.pollSubmitBtn.click();
    }
    async pollOption(){
        return Math.floor(Math.random() * (await this.pollAnswersOptions.length));
    }
}
export default new TeamHub();