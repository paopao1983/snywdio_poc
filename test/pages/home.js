import Page from './page';
import PrimaryNavComponent from './components/primaryNavComponent';
import AccountComponent from './components/accountComponent';
import SearchComponent from './components/searchComponent';
import TeamHubsNavComponent from './components/TeamHubsNavComponent';

class HomePage extends Page{

    open() {
        super.open('/');
    }
    get allTextSections(){
        return $$('h1');
    }
    get firstHeroArticle(){
        return $('.article-brief-hero-image-wrapper'); 
    }
    get hrefFirstHeroArticle(){
        return this.firstHeroArticle.$('a');
    }
    get firstVideopage(){
        return $('.jwp-video-inner div');
    }
    get firstAdsVideopage(){
        return $('.jw-ads-view div');
    }
    get PrimaryNavComponent() {
        return PrimaryNavComponent;
    }
    get TeamHubsNavComponent() {
        return TeamHubsNavComponent;
    }
    get AccountComponent() {
        return AccountComponent;
    }
    get SearchComponent() {
        return SearchComponent;

    }
}
export default new HomePage(); //exports the instance of the class