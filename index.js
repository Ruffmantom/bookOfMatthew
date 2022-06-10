$(document).ready(() => {
  // get global variables
  const appTitleElm = $("#b_title");
  const appVersElm = $("#app_version");
  const appTypeElm = $("#b_type");
  const appBibleVersElm = $("#b_version");
  const appDateElm = $("#b_date");
  const appReadBodyElm = $(".b_verse_body");
  const appChapterElm = $("#b_chapter");
  const appChapterNumElm = $("#b_chapter_num");
  const pagenationNextBtnElm = $("#b_pn_btn_overlay_next");
  const pagenationBackBtnElm = $("#b_pn_btn_overlay_back");
  // End get global variables
  // bring in global data variable
  var bData = bibleData;
  createVerseId();
  function createVerseLine(v, vNum, title, id, isNewParah) {
    let verse = `${
      title ? '<p class="v_title">' + title + "</p>" : ""
    }<span data-verseid=${id} data-versebkg="undefined" class="v_para"><span class="dark v_num">${
      isNewParah ? "&emsp;" : ""
    } ${vNum}</span>${v}</span>`;
    return verse;
  }
  // setting items
  appVersElm.text(`Version: ${bData.app_version}`);
  const loadedBible = bData.bibles[0];
  const loadedBibleType = bData.bibles[0].bible_type;
  const loadedBibleYear = bData.bibles[0].bible_year;
  const loadedBookArr = loadedBible.books[0];
  const loadedChapterName = loadedBookArr.book_name;
  const loadedChaptersArr = loadedBookArr.chapters;
  // set html
  //set settings info
  appTypeElm.text("Bible Type: " + loadedBibleType);
  appBibleVersElm.text("Bible Year: " + loadedBibleYear);
  appDateElm.text();
  // set chapter elm
  appChapterElm.text(`The Book of ${loadedChapterName}`);
  // set pagination state

  let rows = 1;
  // load chapter and verses function
  function loadChapterAndVerses(items, cont, rowsPerChapter, chapter) {
    cont.html("");
    chapter--;
    let loopStart = rowsPerChapter * chapter;
    let loopEnd = loopStart + rowsPerChapter;
    let paginatedItems = items.slice(loopStart, loopEnd);
    // load in the btns and chapter number out of chapters.length

    paginatedItems.forEach((c) => {
      let chapterNumber = c.chapter;
      let chapterVerses = c.verses;
      // set chapter number
      appChapterNumElm.text(`Chapter ${chapterNumber}`);
      // set up verses
      chapterVerses.map((v) => {
        let line = createVerseLine(
          v.paragraph,
          v.verse,
          v.title,
          v._id,
          v.new_para
        );
        appReadBodyElm.append(line);
      });
    });

    $("#b_p_num").text(`Ch. ${chapterState}`);
    bibleLoaded = true;
    // load settings and actions
    loadUserSettings();
    loadActions();
   
  }
  function checkDisplay() {
    // set btn display
    $("#pn_btn_cont_back").show();
    $("#pn_btn_cont_next").show();
    console.log('checkDisplay - chapter state: '+chapterState)
    if (chapterState >= loadedChaptersArr.length) {
      // hide next btn since you cant go further than chapter length
      $("#pn_btn_cont_next").hide();
    } else if (chapterState == 1 ) {
      // hide back btn since you cant go negative chapter length
      $("#pn_btn_cont_back").hide();
    }
  }
  // btn clicks
  pagenationNextBtnElm.click(() => {
    pageClick(true);
  });

  pagenationBackBtnElm.click(() => {
    // console.log("clicked back");
    pageClick(false);
  });

  function pageClick(next) {
    bibleLoaded = false;
    if (next) {
      // if state greater than or = 1 then you can click but has to be less than amount of chapters
      if (chapterState >= 1 && chapterState < loadedChaptersArr.length) {
        chapterState++;
        // check display sees if state is at 1 and below chapter amount, if so then show next btn
        checkDisplay();
        loadChapterAndVerses(loadedChaptersArr, appReadBodyElm, rows,chapterState );
      }
    } else {
      // if state is greaterthan = 2 then it can go down
      if (chapterState >= 2) {
        chapterState--;
        // check display sees if the chapter state is below 2 to hide back btn
        checkDisplay();
        loadChapterAndVerses(loadedChaptersArr, appReadBodyElm, rows,chapterState );
      }
    }
     // save user
     activeUser.userChapterState = chapterState;
     updateUser(false);
  }
  // run loadChapterAndVerses
  loadChapterAndVerses(loadedChaptersArr, appReadBodyElm, rows, chapterState);
  checkDisplay();
  // end of doc ready
});
