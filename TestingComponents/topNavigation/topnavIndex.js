// fake user
let activeUser = {
  id: "PCWloAd0E8L",
  verses: [],
  mode: false,
  verseFont: "undefined",
  verseFontSize: "16",
  imageUrl: "undefined",
  userName: "Username",
  userbibleState: "esv-matt-1", // default
  usersFavVerses: []
}
$(function () {
  // state
  let checkRenderedNav = false;
  // Navigation drop down Buttons
  //const bibleNavBtnElm = $("#b_nav_btn");
  //const bookDropDownBtnElm = $(".b_book_c_dd_btn"); // there are multiple and will be dynamically added on app load
  const bibleNavBtnElmID = "b_nav_btn";
  const bookDropDownBtnBtn = $("b_book_c_dd_btn"); // there are multiple and will be dynamically added on app load
  const bookDropDownBtnElmID = "b_book_c_dd_btn";
  const closeNaveBtnElm = $(".nav_close_btn");
  const closeNaveBtnElmID = "close_nav_btn";
  const bibleVersionBtnElm = $('#close_bv_dd_btn');
  const bibleVersionBtnId = 'close_bv_dd_btn';
  // Navigation drop down content containers
  // nav drop down
  const bibleNavDdContElm = $(".b_nav_dd_cont");
  // nav book drop down
  const bibleBookDdContElm = $(".b_dd_chapter_cont");
  // navigation rendering
  const navMainTxt = $("#nav_prev_text");
  const navMainTxtID = "nav_prev_text";
  const chapterContElm = $(".b_dd_cpts");
  const savedVersesContElm = $(".b_dd_saved_verses_cont");
  const bibleBooksContElm = $(".b_nav_books_container");
  const bibleVersionsSelctContElm = $('#b_version_choice_dd_cont')
  // global function

  // main drop down close function
  const showOrHideDropDown = (show, cont) => {
    if (show) {
      console.log('Open event')
      cont.slideDown("fast");
    } else if (!show) {
      console.log('close event')
      cont.slideUp("fast");
    }
  };
  // toggle  for drop down containers
  const toggleDropDown = (btnID, cont) => {
    console.log('toggle event');
    cont.slideToggle("fast");
    btnID ? findAndRotateIcon(btnID) : "";
  }
  // find and rotate icon
  function findAndRotateIcon(id) {
    let iconArr = Array.from($('.drop_icon'))
    iconArr.filter(iElm => {
      // first remove all rotate
      if (iElm.dataset.ddbtnid === id) {
        // console.log('add rotate')
        $(iElm).hasClass('rotate_btnicon') ? $(iElm).removeClass('rotate_btnicon') : $(iElm).addClass('rotate_btnicon')
      }else{
        $(iElm).removeClass('rotate_btnicon')
      }
    })
  }
  // HTML Creation
  // Create HTML the book drop down
  const createBookDropDownHtml = (bookName, bookId) => {
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
          </div>
          <h4 class="b_nav_titles">Favorite Verses</h4>
          <!-- these will all be dynamically placed  up to 3 and then click to view more-->
          <!-- Favorite verse CONTAINER -->
          <div class="b_dd_saved_verses_cont">
            <!-- Favorite verse card - these will be added when the user likes a verse  -->
          </div>
        </div>
      </div>
  `;
  };
  // Create HTML the saved verse card
  const renderSavedVerseCard = (book, chap, vSrt, vEnd, vTxt, vId) => {
    return `
            <div class="b_saved_verse_card">
              <h5 class="">${book} ${chap}:${vSrt}${vEnd ? `-${vEnd}` : ""}</h4>
                <p>${vTxt}</p>
                <div class="svd_verse_footer">
                  <i data-verseid="${vId}" class="fa fa-heart-o"></i>
                  <svg data-shareid="${vId}" class="share_icon" xmlns="http://www.w3.org/2000/svg" width="15.318" height="15.318"
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
  // create HTML chapter box
  const createChapterBoxElmHtml = (cId, chapterNum) => {
    return `
  <div data-chpid="${cId}" class="chapter_box">${chapterNum}</div>
  `;
  };
  // create HTML bible version choices
  const createBibleVersionChoicesHtml = (bId, bVersion, bibleInfo) => {
    return `
  <div class="font_list_item" data-bibleversion="${bId}">${bVersion}: ${bibleInfo}</div>
  `;
  };

  // render navigation on users preloaded choices
  const renderNavigationHtml = (bData) => {
    // console.log(bData);
    // console.log("loadNavigation");
    // load user data and set navigation
    navMainTxt.text(`ESV | Matthew 1`);
    // first we need to render the choices for the bible version drop down
    bData.bibles.forEach((bible) => {
      bibleVersionsSelctContElm.append(
        createBibleVersionChoicesHtml(
          bible.bible_id,
          bible.bible_type,
          bible.bible_year
        )
      );
    });
    //render the books
    try {
      renderBooksAndChapters("b_esv", bData);
      checkRenderedNav = true;
    } catch (error) {
      console.log("error loading data");
    }
  };

  // render books and chapters for navigation
  const renderBooksAndChapters = (bibleVersionId, bData) => {
    // this is all based on the bible type the user chooses
    // if user chooses ESV then load from that bible etc.
    bData.bibles.map((b) => {
      if (b.bible_id === bibleVersionId) {
        // render books and chapters
        let booksArr = b.books;
        renderBooks(booksArr);
      }
    });
  };
  // render books
  const renderBooks = (bArr) => {
    bArr.forEach((b) => {
      let bookChapters = b.chapters;
      bibleBooksContElm.append(createBookDropDownHtml(b.book_name, b.book_id));
      renderChapters(bookChapters);
    });
  };
  const renderChapters = (cArr) => {
    cArr.forEach((c) => {
      $(".b_dd_cpts").append(createChapterBoxElmHtml(c.chapter_id, c.chapter));
    });
  };

  // actions
  // drop down handlers
  $('.bible_book_navigation').on('click', (e) => {
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
        toggleDropDown(ddValId, bibleVersionsSelctContElm)
        break;
      case bookDropDownBtnElmID:
        // Book DD btn (atleast 4 with the same ID)
        e.stopPropagation();
        // console.log(bookDropDownBtnElmID + ' Was Clicked! With book id: ' + bookVal)
        let bookContArr = Array.from($('.b_dd_chapter_cont'));
        // console.log(bookContArr)
        bookContArr.forEach((elm) => {
          let elmBookId = elm.dataset.ddcontid;
          // console.log(elmBookId)
          if (ddValId === elmBookId) {
            console.log('about to open dd')
            toggleDropDown(elmBookId, $(elm))
          } else {
            showOrHideDropDown(false, $(elm))
          }
        });
        break;
    }
  })
  // render
  renderNavigationHtml(bibleData);
  // end
});
