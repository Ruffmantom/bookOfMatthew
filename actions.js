$(document).ready(() => {
  const appMenu = $("#app_menu_id");
  const appMenuOpen = $(".open");
  const appMenuClose = $(".close");
  const appToggle = $(".toggler");
  let menuState = false;
  let toggleState = false;
  appMenuOpen.click((e) => {
    if (e && !menuState) {
      appMenu.addClass("app_menu");
      appMenu.removeClass("app_menu_close");
      menuState = true;
    }
  });
  appMenuClose.click((e) => {
    if (e && menuState) {
      appMenu.addClass("app_menu_close");
      appMenu.removeClass("app_menu");
      menuState = false;
    }
  });

  appToggle.click((e)=>{
      console.log('clicked toggle')
    if(e && toggleState === false){
        toggleState = true;
        appToggle.addClass('toggle_active')
        appToggle.removeClass('toggler')
    }else{
        appToggle.removeClass('toggle_active')
        appToggle.addClass('toggler')
        toggleState = false;
    }
  })


  // end of doc ready
});
