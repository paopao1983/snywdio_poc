class AccountComponent{

    get loginForm(){
        return $('button[class="flex items-center"]');
    }
    get email(){
        return $('>>>#email');
    }
    get password(){
        return $('>>>#password');
    }
    get amplifyBtns(){
        return $('amplify-sign-in').$$('>>>amplify-button');
    }
    get userMenu(){
        return $('#headlessui-menu-button-1');
    }
    get signOutBtn(){
        return $('#headlessui-menu-item-5');
    }
    async FillLogIn(user, password){
        await this.loginForm.click();
        await this.email.setValue(user);
        await this.password.setValue(password);
    }
    async getSignInBtn(){ 
        let button = await this.amplifyBtns;
        for(const item of button){
            if(await item.getText() == 'SIGN IN') 
                return item;
        }
    }
}
export default new AccountComponent
