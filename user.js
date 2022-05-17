const log = (l) => {
  console.log(l);
};
let activeUser;
function updateUser(notify) {
  localStorage.setItem("bibleUser", JSON.stringify(activeUser));
  notify();
}
//--NOTIFY FUNTION GLOBAL
var notiBoxStyles = [
  {
    opacity: 1,
    top: "50px",
    transition: "all 250ms ease-in",
  },
  {
    opacity: 0,
    top: "-50px",
    transition: "all 250ms ease-out",
  },
];
function notifyUser() {
  const notifBox = $("#noti_box");
  var addNotification = setTimeout(() => {
    notifBox.css(notiBoxStyles[0]);
    clearTimeout(addNotification);
  }, 1500);
  var removeNotification = setTimeout(() => {
    notifBox.css(notiBoxStyles[1]);
    clearTimeout(removeNotification);
  }, 5000);
}
//-- bible loadState
let bibleLoaded = false;
// set state for theme
let darkModeThemeOn = false;
// set state for verse and font
let verseSizeState = "16";
let verseFontState = "Georgia";
// renderer
var togCss = [
  {
    name: "off",
    css: {
      left: "-2px",
      right: "inherit",
      transition: "all 350ms ease",
    },
  },
  {
    name: "on",
    css: {
      right: "-2px",
      left: "inherit",
      transition: "all 350ms ease",
    },
  },
];
// darkmode function
function transitionToDarkMode() {
  const toggleBtn = $("#toggler_btn");
  const toggleIcon = $("#t_icon");
  let darkElms = $(".dark");
  let darkElmArr = Array.from(darkElms);
  darkElmArr.forEach((elm) => {
    let classString = elm.className;
    let splitString = classString.split(" ")[1];
    let finishedClassName = splitString + "_dark";
    if (darkModeThemeOn) {
      $(elm).addClass(finishedClassName);
      toggleBtn.css(togCss[1].css);
      toggleIcon.removeClass("fa-moon-o");
      toggleIcon.addClass("fa-sun-o");
      // log(classString);
    } else {
      $(elm).removeClass(finishedClassName);
      toggleBtn.css(togCss[0].css);
      toggleIcon.addClass("fa-moon-o");
      toggleIcon.removeClass("fa-sun-o");
    }
  });
}
// set verse font
const setVerseFont = (verseFontName) => {
  $(".bible_read_body").css("font-family", verseFontName);
};
// set verse font size
const setVerseFontSize = (verseSize) => {
  // set fontsize
  $(".v_para").css("font-size", parseInt(verseSize));
  // set value in settings
  $("#b_versesize_value").text(`${verseSize}px`);
};
// ------------------------------------------------
// ------------------------------------------------
// DOCUMENT.READY
// ------------------------------------------------
// ------------------------------------------------
function createId() {
  var s =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%";
  var id = "";
  for (let i = 0; i < 10 + 1; i++) {
    let b = s.split("");
    id+= b[Math.floor(Math.random() * 68)];
  }
  return id;
}
$(document).ready(() => {
  var user = {
    id: createId(),
    verses: [],
    mode: false,
    verseFont: 'undefined',
    verseFontSize: '16'
  };
  //  console.log(user)
  // functions for setting local storage with darkmode
  function createUser() {
    try {
      if (localStorage.getItem("bibleUser") === null) {
        localStorage.setItem("bibleUser", JSON.stringify(user));
        activeUser = user;
        log("created user");
      } else {
        let t = localStorage.getItem("bibleUser");
        activeUser = JSON.parse(t);
        // log("user found!");
        var loadTimeout = setTimeout(() => {
          if (bibleLoaded === true) {
            //loading all USER DATA
            loadVerses();
            loadDarkModeTheme();
            loadFontAndFontSize();
          }
          clearTimeout(loadTimeout);
        }, 150);
      }
    } catch (error) {
      log(error);
    }
  }
  // If user
  // - Load highlighted verses
  function loadVerses() {
    // log("about to load verses");
    if (activeUser.verses.length >= 1) {
      activeUser.verses.map((uv) => {
        addBKG(uv.verse_id, uv.verse_high_light);
      });
    }
    // log("loaded verses!");
  }
  function loadDarkModeTheme() {
    // log("about to load theme");
    if (activeUser.mode === true || activeUser.mode === "true") {
      darkModeThemeOn = true;
      transitionToDarkMode();
    } else {
      darkModeThemeOn = false;
      transitionToDarkMode();
    }
  }
  // load font and font size
  function loadFontAndFontSize() {
    if (activeUser.verseFont !== 'undefined') {
      console.log("on load setting font to " + activeUser.verseFont);
      setVerseFont(activeUser.verseFont);
    } else {
      setVerseFont(verseFontState);
    }
    if (activeUser.verseFontSize) {
      console.log("on load setting font size to " + activeUser.verseFontSize + "px");
      setVerseFontSize(parseInt(activeUser.verseFontSize));
    } else {
      setVerseFontSize(verseSizeState);
      return;
    }
  }
  function addBKG(uv_id, uv_c) {
    // log("adding background to: " + uv_id);
    // get verse elements
    var verseElm = $(".v_para");
    // creat verse element arr
    let vArr = Array.from(verseElm);
    vArr.forEach((v) => {
      //   log("foreach ID addBKG " + v.dataset.verseid);
      if (v.dataset.verseid === uv_id) {
        // log("About to add " + uv_c);
        // log("to element " + v.dataset.verseid);
        $(v).css("background-color", uv_c);
        $(v).css("color", "black");
        v.dataset.versebkg = uv_c;
      }
    });
  }
  // when app loads it creates user
  createUser();
  // end of doc ready
});
