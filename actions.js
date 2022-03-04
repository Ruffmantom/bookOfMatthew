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
  function updateUser() {
    localStorage.setItem("bibleUser", JSON.stringify(activeUser));
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
      appMenuOpen.fadeOut();
      menuState = true;
    }
  });
  appMenuClose.click((e) => {
    if (e && menuState) {
      appMenu.addClass("app_menu_close");
      appMenu.removeClass("app_menu");
      appMenuOpen.fadeIn();
      appMenuOpen.css("display", "flex");
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
      updateUser();
    } else {
      appToggle.removeClass("toggle_active");
      appToggle.addClass("toggler");
      appToggleIcon.addClass("fa-moon-o");
      appToggleIcon.removeClass("fa-sun-o");
      toggleState = false;
      activeUser.mode = false;
      updateUser();
    }
  });

  //user clicks verse
  // menu pops up
  // user clicks highlight color user can click on multiple verses
  // highlight color activates and pushes verse into state
  // user can then close menu
  const colorBox = $("#color_box");
  const highlightMenu = $(".highlight_box");
  const hlClose = $(".close_hlb");
  var verse = {};

  var hlColors = ["#f1f100", "#00ff51", "#ff0a0ac7", "#21fcff", "#ff55f0"];

  hlColors.map((c) => {
    colorBox.append(
      `<div class="hl_color" style="background:${c}"data-clr=${c}></div>`
    );
  });

  let verseElm = $(".v_para");
  // this will be used to help find the elements with certain class and then remove it
  // after color has been added.
  let verseArr = Array.from(verseElm);
  let clickedVerseArr = [];
  let colorPick = $(".hl_color");
  let highlightOpen = false;
  // verse gets clicked
  verseElm.click((e) => {
    // console.log(e.target);
    let vId = e.target.dataset.verseid;
    scrollTo();
    if (e && clickedVerseArr.length >= 1) {
      clickedVerseArr = clickedVerseArr.filter((x) => {
        console.log('removed: '+ vId)
        return x != vId;
      });
    }else{
      // move to clickedverse arr
      clickedVerseArr.push(vId);
    }
    if (e && highlightOpen && clickedVerseArr.length === 0) {
      //close menu
      highlightMenu.slideDown();
      highlightMenu.css("display", "none");
      highlightOpen = false;
      // remove class dotted
      verseArr.forEach((v) => {
        $(v).removeClass("dotted");
      });
      console.log('should have closed menu and removed classname')
    }
    // turn verse dotted underline
    $(e.target).addClass("dotted");
    // scroll it to view
    function scrollTo() {
      $("html,body").animate(
        {
          scrollTop: $(e.target).offset().top - 230,
        },
        1000
      );
    }

    // open highlight menu
    if (!highlightOpen) {
      highlightMenu.slideUp();
      highlightMenu.css("display", "flex");
      highlightOpen = true;
    }

    // checkClicked()
    console.log(clickedVerseArr);
  });
  colorPick.click((e) => {
    var c = e.target.dataset.clr;
    console.log(c);
    changeHighlight(c);
  });
  function changeHighlight(color) {
    
    clickedVerseArr.forEach((id) => {
      verseArr.map((v) => {
        if (v.dataset.verseid === id) {
          $(v).css(`background`, color);
          // console.log("should have given background color");
        }
      });
    });
  }
  // underline selected verses
  function checkClicked() {
    if (clickedVerseArr.length >= 1) {
      clickedVerseArr.map((vId) => {
        findVerse(vId);
      });
    }
  }
  function findVerse(v) {
    verseArr;
  }

  // close the highlight menu
  hlClose.click((e) => {
    if (e && highlightOpen) {
      highlightMenu.slideDown();
      highlightMenu.css("display", "none");
      highlightOpen = false;
      verseArr.forEach((v) => {
        $(v).removeClass("dotted");
      });
      // clear clicked arr
      clickedVerseArr = [];
    }
  });
  // end of doc ready
});
