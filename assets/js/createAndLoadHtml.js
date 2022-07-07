const loadingRender = (loadedUserData) => {
  // This Document is for the loading of the HTML for the app
  // it is intended only for creating and loading the bible data
  // navigation rendering
  const navMainTxt = $("#nav_prev_text");
  const bibleBooksContElm = $(".b_nav_books_container");
  // clear bibleBooksContElm.html
  bibleBooksContElm.html("");
  const bibleVersionsSelctContElm = $("#b_version_choice_dd_cont");
  const bibleVersionPrevElm = $("#b_version_choice_prev");
  // bible body elements
  const appTitleElm = $("#b_title");
  const appVersElm = $("#app_version");
  const appTypeElm = $("#b_type");
  const appBibleVersElm = $("#b_version");
  const appDateElm = $("#b_date");
  const bibleBodyElm = $(".b_verse_body");
  const appBookH1Elm = $("#b_book");
  const appChapterNumElm = $("#b_chapter_num");

  // get user global variables
  // set local variables to users pos
  let splitUserPos = loadedUserData.userbiblePos.split("-");
  let userBv = splitUserPos[0];
  let userTe = splitUserPos[1];
  let userBk = splitUserPos[2];
  let userCh = parseInt(splitUserPos[3]);
  console.log(typeof userCh);
  // let userCh = 1;
  // state
  // let chapterState = userCh;
  // HTML Creation
  // Create HTML the book drop down
  const createBookDropDownHtml = (
    bookName,
    bookId,
    favVerses,
    favVArr,
    chapters
  ) => `<div class="dark b_book_dd_cont">
          <div  data-ddbtnid="${bookId}" class="dark b_book_c_dd_btn_cl">
            <div data-ddbtnid="${bookId}" id="b_book_c_dd_btn" class="b_btn_overlay_click"></div>
            <p id="selection_name">${bookName}</p>
            <i data-ddbtnid="${bookId}" class="fa fa-angle-down drop_icon" aria-hidden="true"></i>
          </div>
          <div data-ddcontid="${bookId}" class="dark b_dd_chapter_cont">
            <h4 class="b_nav_titles">Chapters</h4>
            <div class="b_dd_cpts">
            ${chapters
              .map((c) => {
                return `
              <div data-chpid="${c.chapter_id}" class="dark chapter_box">${c.chapter}</div>
              `;
              })
              .join("")}
            </div>
            ${favVerses ? '<h4 class="b_nav_titles">Favorite Verses</h4>' : ""}
            <!-- these will all be dynamically placed  up to 3 and then click to view more-->
            <!-- Favorite verse CONTAINER -->
            <div data-bookid="${bookId}" class="b_dd_saved_verses_cont">
              <!-- Favorite verse card - these will be added when the user likes a verse  -->
             ${
               favVArr.length >= 1
                 ? favVArr
                     .map((fv) => {
                       return renderSavedVerseCard(
                         fv.verse_loc,
                         fv.verse_text,
                         fv.verse_ids,
                         fv.verse_share_data
                       );
                     })
                     .join("")
                 : ""
             }
            </div>
          </div>
        </div>`;

  // Create HTML the saved verse card
  const renderSavedVerseCard = (vLoc, vTxt, vId, vShrData) =>
    // vId can be a single or array of ID's
    `<div class="b_saved_verse_card">
                <h5 class="">${vLoc}</h4>
                  <p>${vTxt}</p>
                  <div class="svd_verse_footer">
                    <i data-verseid="${vId}" class="fa fa-heart svd_vc_heart svd_true"></i>
                    <svg data-shareid="${vId}" data-shardata="${vShrData}" class="share_icon" xmlns="http://www.w3.org/2000/svg" width="15.318" height="15.318"
                      viewBox="0 0 15.318 15.318">
                      <g transform="translate(0.75 0.75)">
                        <path d="M6,18v5.527a1.584,1.584,0,0,0,1.727,1.382H18.091a1.584,1.584,0,0,0,1.727-1.382V18"
                          transform="translate(-6 -11.091)" fill="none" stroke="#000" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="1.5" />
                        <path d="M17.527,5.764,14.764,3,12,5.764" transform="translate(-7.855 -3)" fill="none"
                          stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        <path d="M18,3v8.982" transform="translate(-11.091 -3)" fill="none" stroke="#000"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                      </g>
                    </svg>
                  </div>
              </div>`;
  // create HTML bible version choices
  const createBibleVersionChoicesHtml = (bId, bVersion, bibleInfo) =>
    `<div class="font_list_item" data-bibleversion="${bId}">${bVersion.toUpperCase()}: ${bibleInfo}</div>`;
  const createVerseLine = (v, vNum, title, id, isNewParah) => {
    let verse = `${
      title ? '<p class="v_title">' + title + "</p>" : ""
    }<span data-verseid=${id} data-versebkg="undefined" class="v_para" ><span class="dark v_num">${
      isNewParah ? "&emsp;" : ""
    } ${vNum}</span>${v}</span>`;
    return verse;
  };
  // New Load User and render Function
  const newRenderAndLoadNavigationAndVerses = (bv, bk, ch, bData) => {
    // console.log(bData);
    let bibleVersion = bData.bible_type;
    let bibleId = bData.book_id;
    let bibleYear = bData.bible_year;
    let bibleBooksArr = bData.books;
    // set main text for nav as well
    navMainTxt.text(`${bv.toUpperCase()} | ${findFullName(bk)}: ${ch}`);
    // set current bible version choice text
    setBibleVersionChoice(bv, bibleYear);
    // render Book Drop downs
    // ------ render saved verses if any
    // this function also renders the chapter numbers for each book
    renderBooks(bibleBooksArr);
    // set active chapter
    setActivChapter();
  };

  // find bible choice info and set choice
  const setBibleVersionChoice = (version, info) => {
    // find version in data and set p tag
    bibleVersionPrevElm.text(`${version.toUpperCase()}: ${info}`);
  };
  // find Full name
  const findFullName = (name) => {
    let l;
    switch (name) {
      case "matt":
        l = "Matthew";
        break;
      case "mark":
        l = "Mark";
        break;
      case "luke":
        l = "Luke";
        break;
      default:
        "John";
        break;
    }
    return l;
  };
  // render navigation on users preloaded choices
  const renderBibleVersionChoices = (b_id, b_type, b_year) => {
    bibleVersionsSelctContElm.html("");
    bibleVersionsSelctContElm.append(
      createBibleVersionChoicesHtml(b_id, b_type, b_year)
    );
  };

  // render books
  const renderBooks = (bArr) => {
    let bookChapters;
    // let favVerses = loadedUserData.usersFavVerses.length >= 1;
    let bName;
    let bId;
    bArr.forEach((b) => {
      bookChapters = b.chapters;
      bName = b.book_name;
      bId = b.book_id;
      let favVerses = findSavedVerses(bId.split("-")[2]);
      bibleBooksContElm.append(
        createBookDropDownHtml(
          bName,
          bId,
          favVerses,
          favVerses ? findAndGetFavVerses(bId) : "",
          bookChapters
        )
      );
    });
  };
  // render active chapter
  const setActivChapter = () => {
    // need users pos for book and chapter
    let findUserCurrChId = userBk + "-" + userCh;
    // ex of chapterbtn_ID: esv-nt-matt-1
    let chapterBtnArr = Array.from($(".chapter_box"));
    chapterBtnArr.forEach((c) => {
      let cId = c.dataset.chpid.split("-");
      let findId = `${cId[2]}-${cId[3]}`;
      if (findId === findUserCurrChId) {
        $(c).addClass("cb_active");
      } else {
        $(c).removeClass("cb_active");
      }
    });
  };
  // return true if there are saved verses for that drop down
  const findSavedVerses = (ddId) => {
    let isInBook = false;
    loadedUserData.usersFavVerses.map((fv) => {
      let fvId = fv.verse_ids[0];
      // book drop down
      // verse Id ex: esv-nt-matt-1-v1
      let findBook = fvId.split("-")[2].toLowerCase();
      if (findBook === ddId.toLowerCase()) {
        isInBook = true;
      }
    });
    return isInBook;
  };
  // create the fav verses cards
  const findAndGetFavVerses = (contId) => {
    let favVArr = [];
    loadedUserData.usersFavVerses.map((fv) => {
      let fvId = fv.verse_ids[0];
      // book drop down
      // verse Id ex: esv-nt-matt-1-v1 example of book id esv-nt-matt
      let favVerseBookId = fvId.split("-");
      let findFavsId = `${favVerseBookId[0]}-${favVerseBookId[1]}-${favVerseBookId[2]}`;
      if (findFavsId === contId.toLowerCase()) {
        favVArr.push(fv);
      }
    });
    return favVArr;
  };
  // end
  // START Loading Bible body ____________________________________________________________________________________________________________________
  // START Loading Bible body ____________________________________________________________________________________________________________________
  // START Loading Bible body ____________________________________________________________________________________________________________________
  // START Loading Bible body ____________________________________________________________________________________________________________________
  // Checking amount of chapters and current position
  function checkDisplay(currentBook) {
    // set btn display
    $("#pn_btn_cont_back").show();
    $("#pn_btn_cont_next").show();
    console.log("checkDisplay - chapter state: " + userCh);
    if (userCh >= currentBook.length) {
      // hide next btn since you cant go further than chapter length
      $("#pn_btn_cont_next").hide();
    } else if (userCh == 1) {
      // hide back btn since you cant go negative chapter length
      $("#pn_btn_cont_back").hide();
    }
  }
  // load chapter and verses function
  const loadChapterAndVerses = (items, cont, rowsPerChapter, chapter) => {
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
        bibleBodyElm.append(line);
      });
    });
  };
  // render the verses
  const renderVerses = (bData) => {
    // setting items
    appVersElm.text(`Version: ${bibleData.app_version}`);
    let loadedBible = bData;
    console.log(bData);
    let loadedBibleType = loadedBible.bible_type;
    let loadedBibleYear = loadedBible.bible_year;
    let loadedBookArr = loadedBible.books;
    // work on this section to get the users position better
    const filterForNameAndChapters = (n, c) => {
      let chapters;
      let name;
      loadedBookArr.filter((b) => {
        if (b.book_id.includes(userBk)) {
          chapters = b.chapters;
          name = b.book_name;
        }
      });
      if (n) {
        return name;
      } else {
        return chapters;
      }
    };
    let loadedBookName = filterForNameAndChapters(true,false);
    let loadedChaptersArr = filterForNameAndChapters(false,true);
    console.log(loadedChaptersArr);
    // check the chapter buttons
    checkDisplay(loadedChaptersArr);
    // set html
    //set settings info
    appTypeElm.text("Bible Type: " + loadedBibleType);
    appBibleVersElm.text("Bible Year: " + loadedBibleYear);
    appDateElm.text();
    // set chapter elm
    appBookH1Elm.text(`The Book of ${loadedBookName}`);

    $("#b_p_num").text(`Ch. ${userCh}`);
    bibleLoaded = true;
    // run loadChapterAndVerses
    loadChapterAndVerses(
      loadedChaptersArr,
      bibleBodyElm,
      1,
      userCh
    );
  };
  // END Loading Bible body____________________________________________________________________________________________________________________
  // END Loading Bible body____________________________________________________________________________________________________________________
  // END Loading Bible body____________________________________________________________________________________________________________________
  // END Loading Bible body____________________________________________________________________________________________________________________
  // start
  // render
  function loadAndRenderBible() {
    bibleData.bibles.map((b) => {
      let bibleVersion = b.bible_type.toLowerCase();
      let bookId = b.bible_id;
      let bookYear = b.bible_year;
      // render choices
      renderBibleVersionChoices(bookId, bibleVersion, bookYear);
      if (bibleVersion !== userBv.toLowerCase()) {
        console.log("could not find userdata");
        return;
      } else {
        console.log("starting render");
        newRenderAndLoadNavigationAndVerses(userBv, userBk, userCh, b);
        renderVerses(b);
      }
    });
  }
  // Start
  loadAndRenderBible();
};
