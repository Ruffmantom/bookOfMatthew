$(document).ready(() => {
  var user = {
    id: "23kjhr2h",
    verses: [],
    mode: false,
  };
  var activeUser;
  //  console.log(user)
  // functions for setting local storage with darkmode
  function createUser() {
    try {
      if (localStorage.getItem("bibleUser") === null) {
        localStorage.setItem("bibleUser", JSON.stringify(user));
        activeUser = user;
        console.log("created user");
      } else {
        var t = localStorage.getItem("bibleUser");
        activeUser = JSON.parse(t);
        console.log("user found!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function updateUser(){
    localStorage.setItem('bibleUser', JSON.stringify(activeUser))
  }
  // when app loads it creates user
  createUser();
  // console.log(activeUser);
  //-------------------------------
  const appMenu = $("#app_menu_id");
  const appMenuOpen = $(".open");
  const appMenuClose = $(".close");
  const appToggle = $(".toggler");
  const appToggleIcon = $("#t_icon");
  let menuState = false;
  let toggleState = false;
  appMenuOpen.click((e) => {
    if (e && !menuState) {
      appMenu.addClass("app_menu");
      appMenu.removeClass("app_menu_close");
      appMenuOpen.fadeOut()
      menuState = true;
    }
  });
  appMenuClose.click((e) => {
    if (e && menuState) {
      appMenu.addClass("app_menu_close");
      appMenu.removeClass("app_menu");
      appMenuOpen.fadeIn()
      appMenuOpen.css("display","flex")
      menuState = false;
    }
  });

  appToggle.click((e) => {
    console.log("clicked toggle");
    if (e && toggleState === false) {
      toggleState = true;
      appToggle.addClass("toggle_active");
      appToggle.removeClass("toggler");
      appToggleIcon.removeClass("fa-moon-o");
      appToggleIcon.addClass("fa-sun-o");
      activeUser.mode = true;
      updateUser()
    } else {
      appToggle.removeClass("toggle_active");
      appToggle.addClass("toggler");
      appToggleIcon.addClass("fa-moon-o");
      appToggleIcon.removeClass("fa-sun-o");
      toggleState = false;
      activeUser.mode = false;
      updateUser()
    }
  });



  //user clicks verse
  // menu pops up
  // user clicks highlight color user can click on multiple verses
  // highlight color activates and pushes verse into state
  // user can then close menu
  var verse = { };
  var highlightColors = {
    yellow:'#f1f100',
    green:'#00ff51',
    red:'#ff0a0ac7',
    ltBlue:'#21fcff',
    pink:'#ff55f0'
  }
  let verseElm = $('.v_para');
  let verseElmArr = Array.from(verseElm);
  let clickedVerseArr = []
  verseElmArr.forEach((v)=>{
    v.addEventListener("click",(e)=>{
      console.log(e.target.dataset.verseid);
      let verseToPush = {};
      
    })
  })





  // end of doc ready
});
