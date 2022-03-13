const log = (l) => {
  console.log(l);
};
let activeUser;
function updateUser() {
  localStorage.setItem("bibleUser", JSON.stringify(activeUser));
}
let bibleLoaded = false;
// renderer
$(document).ready(() => {
  var user = {
    id: "23kjhr2h",
    verses: [],
    mode: false,
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
        log("user found!");
        var loadTimeout = setTimeout(() => {
          if (bibleLoaded === true) {
            loadVerses();
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
    log("about to load verses");
    if (activeUser.verses.length >= 1) {
      //   log("found more than one verse, going to load verses backgrounds");
      // find verses that match user saved verses
      // log('userVerses' + userVerses)
      activeUser.verses.map((uv) => {
        // log(activeUser.verses.length)
        // log(uv.verse_id)
        // log(uv.verse_high_light)
        addBKG(uv.verse_id, uv.verse_high_light);
      });
    }
  }
  function addBKG(uv_id, uv_c) {
    // log("adding background to: " + uv_id);
    // get verse elements
    var verseElm = $(".v_para");
    // creat verse element arr
    let vArr = Array.from(verseElm);
    vArr.forEach((v) => {
      log("foreach ID addBKG " + v.dataset.verseid);
      if (v.dataset.verseid === uv_id) {
        log("About to add " + uv_c);
        log("to element " + v.dataset.verseid);
        $(v).css("background", uv_c);
        v.dataset.versebkg = uv_c;
      }
    });
  }
  // when app loads it creates user
  createUser();
  // end of doc ready
});
