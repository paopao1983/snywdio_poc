class PrimaryNavComponent{

    get primaryNavItems(){
        return $$('.header-nav-item');
    }
    get firstMoreItem(){
        return $('.header-nav-item a');
    }
}

export default new PrimaryNavComponent