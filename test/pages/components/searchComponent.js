class SearchComponent{
    //search dropdown
    get searchIcon(){
        return $('.search-icon');
    }
    get searchField(){
        return $('.search-input');
    }
    get previewBox(){
        return $('.search-results');
    }
    get previewResults(){
        return this.previewBox.$$('a');
    }
    get viewResultsBtn(){
        return $('.view-all-results a');
    }
    async fillSearchForm(searchTxt){
        await this.searchIcon.click();
        await this.searchField.setValue(searchTxt);
        await this.previewBox.waitForDisplayed();
    }
}
export default new SearchComponent
