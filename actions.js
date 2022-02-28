$(document).ready(()=>{
    const appMenu = $('#app_menu_id');
    const appMenuOpen = $('.open');
    const appMenuClose = $('.close');
let menuState = false
    appMenuOpen.click((e)=>{
        if(e && !menuState){
            appMenu.addClass("app_menu")
            appMenu.removeClass("app_menu_close")
            menuState= true;
        }
    })
    appMenuClose.click((e)=>{
        if(e && menuState){
            appMenu.addClass("app_menu_close")
            appMenu.removeClass("app_menu")
            menuState = false;
        }
    })


    // end of doc ready
})