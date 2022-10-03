import allureReporter from '@wdio/allure-reporter';

export default class Page{

    open(path) {
        return browser.url(path);
    }
    /**
     * 
     * @param {*} obj The obj is an array of objects which have a text inside   
     * @returns An array with the Texts taken from the object sent.
     */
    async getTextTitles(obj){
        const obj2 = [];
        for(const menuItem of obj){
            obj2.push(await menuItem.getText())
        }
        return obj2
    }  
    get allureReporter(){
        return allureReporter;
    }
    //Reports
    //Crossbwoesing
    //Paralell
}

