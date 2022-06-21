// fake user
let activeUser = {
  id: "PCWloAd0E8L",
  verses: [],
  mode: false,
  verseFont: "undefined",
  verseFontSize: "16",
  imageUrl: "undefined",
  userName: "Username",
  userbiblePos: "esv-matt-1", // default
  usersFavVerses: [
    {
      verse_ids: ['esv-nt-matt-1-v1', 'esv-nt-matt-1-v2', 'esv-nt-matt-1-v3', 'esv-nt-matt-1-v4', 'esv-nt-matt-1-v5'],
      verse_data: 'ESV: 2001 - 2022 Crossway',
      verse_loc: 'Matthew 6:1-5',
      verse_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque dolor nobis!',
      verse_share_data: 'Matthew 6:1-5<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque dolor nobis!<br>ESV: 2001 - 2022 Crossway'
    }
  ],
};
$(function () {
  // Navigation drop down Buttons
  //const bibleNavBtnElm = $("#b_nav_btn");
  //const bookDropDownBtnElm = $(".b_book_c_dd_btn"); // there are multiple and will be dynamically added on app load
  const bibleNavBtnElmID = "b_nav_btn";
  const bookDropDownBtnElmID = "b_book_c_dd_btn";
  const closeNaveBtnElm = $(".nav_close_btn");
  const closeNaveBtnElmID = "close_nav_btn";
  const bibleVersionBtnId = "close_bv_dd_btn";
  // Navigation drop down content containers
  // nav drop down
  const bibleNavDdContElm = $(".b_nav_dd_cont");
  // navigation rendering
  const navMainTxt = $("#nav_prev_text");
  const chapterContElm = $(".b_dd_cpts");
  const bibleBooksContElm = $(".b_nav_books_container");
  const bibleVersionsSelctContElm = $("#b_version_choice_dd_cont");
  const savedVerseContElm = $('.b_dd_saved_verses_cont');
  const bibleVersionPrevElm = $("#b_version_choice_prev");
  // get user global variables
  // set local variables to users pos
  let userBv = activeUser.userbiblePos.split("-")[0];
  let userBk = activeUser.userbiblePos.split("-")[1];
  let userCh = activeUser.userbiblePos.split("-")[2];
  // HTML Creation
  // Create HTML the book drop down
  const createBookDropDownHtml = (bookName, bookId, favVerses, chapters) => {
    console.log("create book dd HTML");
    return `
      <div class="dark b_book_dd_cont">
        <div  data-ddbtnid="${bookId}" class="dark b_book_c_dd_btn_cl">
          <div data-ddbtnid="${bookId}" id="b_book_c_dd_btn" class="b_btn_overlay_click"></div>
          <p id="selection_name">${bookName}</p>
          <i data-ddbtnid="${bookId}" class="fa fa-angle-down drop_icon" aria-hidden="true"></i>
        </div>
        <div data-ddcontid="${bookId}" class="dark b_dd_chapter_cont">
          <h4 class="b_nav_titles">Chapters</h4>
          <div class="b_dd_cpts">
          ${chapters.map(c => {
      return `
            <div data-chpid="${c.chapter_id}" class="chapter_box">${c.chapter}</div>
            `
    }).join('')}
          </div>
          ${favVerses ? '<h4 class="b_nav_titles">Favorite Verses</h4>' : ""}
          <!-- these will all be dynamically placed  up to 3 and then click to view more-->
          <!-- Favorite verse CONTAINER -->
          <div data-bookid="${bookId}" class="b_dd_saved_verses_cont">
            <!-- Favorite verse card - these will be added when the user likes a verse  -->
           ${()=>{
            if (activeUser.usersFavVerses.length >= 1) {
              activeUser.usersFavVerses.map(fv => {
                let findBookIdFromUser = fv.verse_ids.split('-')[2].toLowerCase();
                let fvLoc = fv.verse_loc
                let fvTxt = fv.verse_text
                let fvId = fv.verse_ids
                let fvShrData = fv.verse_share_data
                if (findBookIdFromUser === contId.split('-')[2].toLowerCase()) {
                  return renderSavedVerseCard(fvLoc,fvTxt,fvId,fvShrData)
                }
              })
            }
           }}
          </div>
        </div>
      </div>
    `;
  };
  // Create HTML the saved verse card
  const renderSavedVerseCard = (vLoc, vTxt, vId, vShrData) => {
    console.log("create saved verse card HTML");
    // vId can be a single or array of ID's
    return `
            <div class="b_saved_verse_card">
              <h5 class="">${vLoc}</h4>
                <p>${vTxt}</p>
                <div class="svd_verse_footer">
                  <i data-verseid="${vId}" class="fa fa-heart-o svd_vc_heart svd_true"></i>
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
            </div>
    `;
  };
  // create HTML bible version choices
  const createBibleVersionChoicesHtml = (bId, bVersion, bibleInfo) => {
    return `
      <div class="font_list_item" data-bibleversion="${bId}">${bVersion.toUpperCase()}: ${bibleInfo}</div>
    `;
  };

  // New Load User and render Function
  const newRenderAndLoadNavigation = (bv, bk, ch, bData) => {
    let bibleVersion = bData.bible_type;
    let bibleId = bData.book_id;
    let bibleYear = bData.bible_year;
    let bibleBooksArr = bData.books;
    let bookChapterNum = bibleBooksArr.length;
    // set main text for nav as well
    navMainTxt.text(`${bv.toUpperCase()} | ${findFullName(bk)}: ${ch}`);
    // set current bible version choice text
    setBibleVersionChoice(bv, bibleYear);
    // render Book Drop downs
    // ------ render saved verses if any
    // this function also renders the chapter numbers for each book
    renderBooks(bibleBooksArr);
    // set active chapter
    setActivChapter()
    // render and load favorite verses
    findAndCreateFavVerses()
  }

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
    bibleVersionsSelctContElm.append(
      createBibleVersionChoicesHtml(b_id, b_type, b_year)
    );
  };

  // render books
  const renderBooks = (bArr) => {
    console.log("renderBooks " + bArr);
    let bookChapters;
    // let favVerses = activeUser.usersFavVerses.length >= 1;
    let bName;
    let bId;
    bArr.forEach((b) => {
      bookChapters = b.chapters;
      bName = b.book_name;
      bId = b.book_id;
      let favVerses = findSavedVerses(bId.split('-')[2]);
      bibleBooksContElm.append(
        createBookDropDownHtml(bName, bId, favVerses, bookChapters)
      );
    });
  };
  // render active chapter
  const setActivChapter = () => {
    // need users pos for book and chapter
    let findUserCurrChId = userBk + "-" + userCh;
    // ex of chapterbtn_ID: esv-nt-matt-1
    let chapterBtnArr = Array.from($('.chapter_box'));
    chapterBtnArr.forEach(c => {
      let cId = c.dataset.chpid.split('-');
      let findId = `${cId[2]}-${cId[3]}`;
      if (findId === findUserCurrChId) {
        $(c).addClass('cb_active')
      } else {
        $(c).removeClass('cb_active')
      }
    })
  }
  // return true if there are saved verses for that drop down
  const findSavedVerses = (ddId) => {
    let isInBook = false;
    activeUser.usersFavVerses.map(fv => {
      let fvId = fv.verse_ids[0];
      // book drop down
      // verse Id ex: esv-nt-matt-1-v1
      let findBook = fvId.split('-')[2].toLowerCase()
      if (findBook === ddId.toLowerCase()) {
        console.log(true)
        isInBook = true
      }
    })
    return isInBook;
  }
  // create the fav verses cards
  const findAndCreateFavVerses = () => {
    // give color to verse heart icon class = .svd_true
    // for each favVerse find corrrect drop down
    // add to drop down savedVerseContElm
    // svd_vc_heart gets added class svd_true
    let contArr = Array.from(savedVerseContElm);
    contArr.forEach(cont => {
      let contId = cont.dataset.bookid;
      if (activeUser.usersFavVerses.length >= 1) {
        activeUser.usersFavVerses.map(fv => {
          let findBookIdFromUser = fv.verse_ids.split('-')[2].toLowerCase();
          let fvLoc = fv.verse_loc
          let fvTxt = fv.verse_text
          let fvId = fv.verse_ids
          let fvShrData = fv.verse_share_data
          if (findBookIdFromUser === contId.split('-')[2].toLowerCase()) {
            $(cont).append(renderSavedVerseCard(fvLoc,
              fvTxt,
              fvId,
              fvShrData))
          }
        })
      }
    })
  }
  // NAVIGATION actions
  // main drop down close function
  const showOrHideDropDown = (show, cont) => {
    if (show) {
      console.log("Open event");
      cont.slideDown("fast");
    } else if (!show) {
      console.log("close event");
      cont.slideUp("fast");
    }
  };
  // toggle  for drop down containers
  const toggleDropDown = (btnID, cont) => {
    console.log("toggle event");
    cont.slideToggle("fast");
    btnID ? findAndRotateIcon(btnID) : "";
  };
  // find and rotate icon
  function findAndRotateIcon(id) {
    let iconArr = Array.from($(".drop_icon"));
    iconArr.filter((iElm) => {
      // first remove all rotate
      if (iElm.dataset.ddbtnid === id) {
        // console.log('add rotate')
        $(iElm).hasClass("rotate_btnicon")
          ? $(iElm).removeClass("rotate_btnicon")
          : $(iElm).addClass("rotate_btnicon");
      } else {
        $(iElm).removeClass("rotate_btnicon");
      }
    });
  };
  // drop down handlers
  $(".bible_book_navigation").on("click", (e) => {
    // this function checks for all the type of drop down buttons
    // Navigation, Bible version, and Book drop down
    let eIdTag = e.target.id;
    let ddValId = e.target.dataset.ddbtnid;
    switch (eIdTag) {
      // finding the Button clicks and running the open function
      case bibleNavBtnElmID:
        // Main Nav DD btn
        e.stopPropagation();
        // console.log(bibleNavBtnElmID + ' Was asdf Clicked!')
        showOrHideDropDown(true, bibleNavDdContElm);
        closeNaveBtnElm.fadeIn();
        closeNaveBtnElm.css({ display: "flex" });
        break;
      case closeNaveBtnElmID:
        // close Nav DD btn
        e.stopPropagation();
        // console.log(closeNaveBtnElmID + ' Was Clicked!');
        showOrHideDropDown(false, bibleNavDdContElm);
        closeNaveBtnElm.fadeOut();
        break;
      case bibleVersionBtnId:
        // Bible DD version drop down
        e.stopPropagation();
        toggleDropDown(ddValId, bibleVersionsSelctContElm);
        break;
      case bookDropDownBtnElmID:
        // Book DD btn (atleast 4 with the same ID)
        e.stopPropagation();
        // console.log(bookDropDownBtnElmID + ' Was Clicked! With book id: ' + bookVal)
        let bookContArr = Array.from($(".b_dd_chapter_cont"));
        // console.log(bookContArr)
        bookContArr.forEach((elm) => {
          let elmBookId = elm.dataset.ddcontid;
          // console.log(elmBookId)
          if (ddValId === elmBookId) {
            console.log("about to open dd");
            toggleDropDown(elmBookId, $(elm));
          } else {
            showOrHideDropDown(false, $(elm));
          }
        });
        break;
    }
  });
  // render
  const loadAndRenderBible = () => {
    bibleData.bibles.map((b) => {
      let bibleVersion = b.bible_type.toLowerCase();
      let bookId = b.bible_id;
      let bookYear = b.bible_year;
      // render choices
      renderBibleVersionChoices(bookId, bibleVersion, bookYear)
      if (bibleVersion !== userBv.toLowerCase()) {
        return;
      } else {
        console.log(`user pos: ${userBv.toLowerCase()} --- found bible Type: ${bibleVersion}`)
        newRenderAndLoadNavigation(userBv, userBk, userCh, b)
      }
    });
  };
  // START
  loadAndRenderBible(activeUser)
  // end
});
