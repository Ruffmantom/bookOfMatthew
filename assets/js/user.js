const log = (l) => {
  console.log(l);
};
// global Active User
let activeUser;
// global Update User
function updateUser(notify, message, alert, time) {
  localStorage.setItem("bibleUser", JSON.stringify(activeUser));
  if (notify) {
    notifyUser(message, alert, time);
  }
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
// notify User
function notifyUser(mess, alert, time) {
  const notifBox = $("#noti_box");
  var addNotification = setTimeout(
    () => {
      $("#noti_box_text").text(mess ? mess : "Saved!");
      notifBox.css(notiBoxStyles[0]);
      notifBox.css({ backgroundColor: alert ? "#ff6666" : "#3be2ff" });
      clearTimeout(addNotification);
    },
    time ? time : 1500
  );
  var removeNotification = setTimeout(() => {
    notifBox.css(notiBoxStyles[1]);
    clearTimeout(removeNotification);
  }, 5000);
  $("#noti_box_text").text("");
}
//-- bible loadState
let bibleLoaded = false;
// set state for theme
let darkModeThemeOn = false;
// set state for verse and font
let verseSizeState = "16";
let verseFontState = "Georgia";
// darkmode function
function transitionToDarkMode() {
  let darkElms = $(".dark");
  let darkElmArr = Array.from(darkElms);
  darkElmArr.forEach((elm) => {
    let classString = elm.className;
    let splitStringArr = classString.split(" ");
    let fcn = "";
    for (let i = splitStringArr.length; i--; ) {
      fcn += ` ${splitStringArr[i]}_dark`;
      // console.log(fcn)
    }
    // let splitString = classString.split(" ")[1];
    // let finishedClassName = splitString + "_dark";
    if (darkModeThemeOn) {
      $(elm).addClass(fcn);
      // make html have dark bkg
      $(document.body).css("background-color", "#1f1f1f");
      // log(classString);
    } else {
      $(elm).removeClass(fcn);
      // document background color
      $(document.body).css("background-color", "white");
    }
  });
}
// set verse font
const setVerseFont = (verseFontName) => {
  $(".bible_read_body").css("font-family", verseFontName);
};
// set user image

const setUserImage = (imgUrl) => {
  $("#b_user_img").attr("src", imgUrl);
  $(".user_image_prev").attr("src", imgUrl);
};
// set username
const setUsername = (name) => {
  $("#b_users_username_prev").text(name);
  $("#b_user_username").text(name);
  $("#user_name_input").val(name);
};
// set verse font size
const setVerseFontSize = (verseSize) => {
  // set fontsize
  $(".v_para").css("font-size", parseInt(verseSize));
  // set value in settings
  $("#b_versesize_value").text(`${verseSize}px`);
};
const loadNavigationAndBible = (userPositon) => {
  // console.log("hit loadNavigationAndBible func: " + userPositon);
  // START
  loadingRender(userPositon);
};

// create User ID
function createId() {
  var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%";
  var id = "";
  for (let i = 0; i < 10 + 1; i++) {
    let b = s.split("");
    id += b[Math.floor(Math.random() * 68)];
  }
  return id;
}

// this was in the document ready
// this was in the document ready
// this was in the document ready
var user = {
  id: createId(),
  verses: [],
  mode: false,
  verseFont: "Georgia",
  verseFontSize: "16",
  imageUrl: "undefined",
  userName: "Username",
  userbiblePos: "esv-nt-matt-1",
  usersFavVerses: [],
  userVerseNotes: [],
};
// function for setting up user if one isnt found
// if found then load the user data
function createUserAndLoad() {
  if (localStorage.getItem("bibleUser") === null) {
    localStorage.setItem("bibleUser", JSON.stringify(user));
    activeUser = user;
    log("created user");
    log("created user and now loading");
    fullLoad();
  } else {
    let t = localStorage.getItem("bibleUser");
    activeUser = JSON.parse(t);
    log("user found!");
    var loadTimeout = setTimeout(() => {
      // console.log("bible loaded: true | about to start Loading");
      //loading all USER DATA
      // this will be used later when I have more books
      fullLoad();
      clearTimeout(loadTimeout);
    }, 150);
  }
}
const fullLoad = () => {
  loadUsersBiblePlace();
  loadVerses();
  loadDarkModeTheme();
  loadFontAndFontSize();
  loadImage();
  loadUsername();
};
// If user
// - Load highlighted verses
function loadVerses() {
  log("about to load verses");
  if (activeUser.verses.length >= 1) {
    activeUser.verses.map((uv) => {
      addBKG(uv.verse_id, uv.verse_high_light);
    });
  }
  log("loaded verses!");
}
function loadDarkModeTheme() {
  // console.log("about to load theme");
  if (activeUser.mode === true || activeUser.mode === "true") {
    darkModeThemeOn = true;
    $(".b_tog_checkbox_input").attr("checked", "checked");
    // console.log("loaded theme: dark");
    transitionToDarkMode();
  } else {
    darkModeThemeOn = false;
    $(".b_tog_checkbox_input").removeAttr("checked");
    // console.log("loaded theme: light");
    transitionToDarkMode();
  }
}
// load font and font size
function loadFontAndFontSize() {
  if (activeUser.verseFont !== "undefined") {
    // console.log("on load setting font to " + activeUser.verseFont);
    setVerseFont(activeUser.verseFont);
  } else {
    setVerseFont(verseFontState);
  }
  if (activeUser.verseFontSize) {
    // console.log("on load setting font size to " + activeUser.verseFontSize + "px");
    setVerseFontSize(parseInt(activeUser.verseFontSize));
  } else {
    setVerseFontSize(verseSizeState);
    return;
  }
}
function loadImage() {
  if (activeUser.imageUrl !== "undefined") {
    setUserImage(activeUser.imageUrl);
  } else {
    setUserImage("https://i.ibb.co/bQrMNV1/userIcon.png");
  }
}
function loadUsername() {
  if (activeUser.userName !== "undefined") {
    setUsername(activeUser.userName);
  } else {
    return;
  }
}
function loadUsersBiblePlace() {
  // console.log("loading user position and navigation");
  if (activeUser.userbiblePos !== "esv-matt-1") {
    // loading navigation
    loadNavigationAndBible(activeUser);
    // loading bible
  } else {
    // setting navigation
    loadNavigationAndBible(activeUser);
    return;
    // loading bible
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
// when the chapter handler gets called
const nextChapterLoad = (scroll) => {
  loadUsersBiblePlace();
  loadVerses();
  // this was adding unnessasary darkmode classes
  //loadDarkModeTheme();
  loadFontAndFontSize();
  loadImage();
  // loadUsername();
  // clearTimeout(loadTimeout);
  updateUser(false, false, false);
  if (scroll) {
    // scroll page back to top
    $(".bible_read_body").animate(
      {
        scrollTop: 0,
      },
      1
    );
  }
};
// ------------------------------------------------
// ------------------------------------------------
// DOCUMENT.READY
// ------------------------------------------------
// ------------------------------------------------
// start of jquery
$(function () {
  // redner font choice
  const selectionName = $("#selection_name");
  selectionName.text("Georgia");
  // when app loads it creates user
  createUserAndLoad();
  // end of doc ready
});
