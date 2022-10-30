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

  // HTML Creation
  // Create HTML the book drop down
  const createBookDropDownHtml = (
    bookName,
    bookId,
    favVerses,
    favVArr,
    chapters
  ) => `<div class="dark b_book_dd_cont">
          <div data-ddbtnid="${bookId}" class="dark b_book_c_dd_btn_cl">
            <div data-ddbtnid="${bookId}" id="b_book_c_dd_btn" class="b_btn_overlay_click"></div>
            <p>${bookName}</p>
            <!-- <i data-ddbtnid="${bookId}" class="fa fa-angle-down drop_icon" aria-hidden="true"></i> -->
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
                         fv.save_id,
                         fv.bible_data,
                         fv.book_id,
                         fv.verse_loc,
                         fv.verse_text,
                         fv.share_data
                       );
                     })
                     .join("")
                 : ""
             }
            </div>
          </div>
        </div>`;

  // Create HTML the saved verse card
  /*
    save_id
    bible_data
    book_id
    verse_loc
    verse_text
    share_data
  */
  const renderSavedVerseCard = (
    save_id,
    bible_data,
    book_id,
    verse_loc,
    verse_text,
    share_data
  ) =>
    // vId can be a single or array of ID's
    `<div class="${loadedUserData.mode? 'b_saved_verse_card b_saved_verse_card_dark':'b_saved_verse_card'}" data-cardid="${save_id}">
                <h5 class="">${verse_loc}</h4>
                  <p>${verse_text}</p>
                  <div class="svd_verse_footer">
                    <div class="svd_card_options">
                      <div id="svc_heart_btn" data-verseid="${save_id}" class="b_btn_overlay_click"></div>
                      <i id="svd_heart_icon" class="fa fa-heart svd_vc_heart
                      svd_true"></i>
                    </div>
                    <div class="svd_card_options">
                      <div id="svd_crd_share" data-sharedata='${JSON.stringify(share_data)}' class="svd_vrs_share_btn b_btn_overlay_click"></div>
                        <i class="fa ${loadedUserData.mode? 'fa-share fa-share_dark':'fa-share'}"></i>
                      </div>
                  </div>
              </div>`;
  // create HTML bible version choices
  const createBibleVersionChoicesHtml = (bId, bVersion, bibleInfo) =>
    `<div class="font_list_item" data-bibleversion="${bId}">${bVersion.toUpperCase()}: ${bibleInfo}</div>`;
  const createVerseLine = (v, title, id, tab, bg_br, end_br, gap) => {
    let a = id.split("-")[4];
    let vNumber = a.split("v")[1];
    let verse = `${
      title ? '<p class="v_title">' + title + "</p>" : ""
    }<span data-verseid=${id} data-versebkg="undefined" data-versetext='${v}' class="v_para" >${
      bg_br ? "<br>" : ""
    }<span class="dark v_num">${
      tab ? "&emsp;" : ""
    } ${vNumber}</span>${v}</span>${end_br ? "<br>" : ""}${
      gap ? "<br><br>" : ""
    }`;
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
        l = "John";
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
          favVerses ? findAndGetFavVerses(bId.split('-')[2]) : "",
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
        if(loadedUserData.mode ){
          $(c).addClass("cb_active_dark");
        }else{
          $(c).removeClass("cb_active_dark");
        }
      } else {
        $(c).removeClass("cb_active");
      }
    });
  };
  // return true if there are saved verses for that drop down
  const findSavedVerses = (ddId) => {
    let isInBook = false;
    loadedUserData.usersFavVerses.map((fv) => {
      // console.log(fv);
      if (fv.book_id.toLowerCase() === ddId.toLowerCase()) {
        isInBook = true;
      }
    });
    return isInBook;
  };
  // create the fav verses cards
  const findAndGetFavVerses = (contBkId) => {
    let favVArr = [];
    loadedUserData.usersFavVerses.map((fv) => {
      // console.log(fv.book_id.toLowerCase())
      // console.log(contBkId.toLowerCase())
      
      if ( fv.book_id.toLowerCase() === contBkId.toLowerCase()) {
        favVArr.push(fv);
      }
    });
    console.log(favVArr)
    return favVArr;
  };
  // end
  // START Loading Bible body ____________________________________________________________________________________________________________________
  // Checking amount of chapters and current position
  function checkDisplay(currentBook) {
    // set btn display
    $("#pn_btn_cont_back").show();
    $("#pn_btn_cont_next").show();
    // console.log("checkDisplay - chapter state: " + userCh);
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
          v.title,
          v._id,
          v.tab,
          v.beg_break,
          v.end_break,
          v.gap
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
    // console.log(bData);
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
    let loadedBookName = filterForNameAndChapters(true, false);
    let loadedChaptersArr = filterForNameAndChapters(false, true);
    // console.log(loadedChaptersArr);
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
    loadChapterAndVerses(loadedChaptersArr, bibleBodyElm, 1, userCh);
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
        // console.log("starting render");
        newRenderAndLoadNavigationAndVerses(userBv, userBk, userCh, b);
        renderVerses(b);
      }
    });
  }
  // Start
  loadAndRenderBible();
};
