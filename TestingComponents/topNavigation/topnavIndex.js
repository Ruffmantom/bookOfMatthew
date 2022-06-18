// Navigation drop down Buttons
const bibleNavBtnElm = $("#b_nav_btn");
const bookDropDownBtnElm = $(".b_book_c_dd_btn"); // there are multiple and will be dynamically added on app load
const closeNaveBtnElm = $("#close_nav_btn");
// Navigation drop down content containers
// nav drop down
const bibleNavDdContElm = $(".b_nav_dd_cont");
// nav book drop down
const bibleBookDdContElm = $(".b_dd_chapter_cont");
// global function
// main drop down close function
const showOrHideDropDown = (event, toggle, show, btnicon, cont) => {
  if (event && toggle) {
    // console.log("hit first if");
    cont.slideToggle("slow");
    btnicon ? $(btnicon).toggleClass("rotate_btnicon") : "";
  } else if (event && !toggle && show) {
    // console.log("hit second else if");
    cont.slideDown("slow");
    btnicon ? $(btnicon).addClass("rotate_btnicon") : "";
  } else if (event && !show) {
    // console.log("hit third else if");
    cont.slideUp("slow");
    btnicon & !show ? $(btnicon).removeClass("rotate_btnicon") : "";
  }
};
$(function () {
  // if the nav is clicked
  // open nav and shoe close btn
  bibleNavBtnElm.click((e) => {
    showOrHideDropDown(e, false, true, false, bibleNavDdContElm);
    closeNaveBtnElm.fadeIn();
    closeNaveBtnElm.css({ display: "flex" });
  });
  // if close btn clicked
  // close nav and hide close btn
  closeNaveBtnElm.click((e) => {
    showOrHideDropDown(e, false, false, false, bibleNavDdContElm);
    closeNaveBtnElm.fadeOut();
  });
  // book drop down click
  bookDropDownBtnElm.click((e) => {
    let eventElm = e.target;
    let bookIdVal = e.target.dataset.bookid;
    let eventElmIcon = $(eventElm).children()[1];
    let bookContArr = Array.from(bibleBookDdContElm);
    bookContArr.forEach((elm) => {
      let elmBookId = elm.dataset.bookid;
      if (bookIdVal === elmBookId) {
        showOrHideDropDown(e, true, true, eventElmIcon, $(elm));
      } else {
        showOrHideDropDown(e, false, false, eventElmIcon, $(elm));
      }
    });
  });
  // end
});

// navigation rendering
const chapterContElm = $(".b_dd_cpts");
const savedVersesContElm = $(".b_dd_saved_verses_cont");
const bibleVersionChoiceDdElm = $('#b_version_choice_dd_cont');
const bibleBooksContElm = $('.b_nav_books_container');
// render the book drop down
const renderBookDropDown = (bookName,bookId, chapters) => {
  return `
      <div class="dark b_book_dd_cont">
        <div data-bookid="${bookId}" class="dark  b_book_c_dd_btn">
          <p id="selection_name">${bookName}</p>
          <i id="drop_icon" class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div data-bookid="${bookId}" class="dark b_dd_chapter_cont">
          <h4 class="b_nav_titles">Chapters</h4>
          <div class="b_dd_cpts">
           ${chapters? function(){
            chapters.map(c=>{
              renderChapterBoxElm(c.chapter_id,c.chapter)
            })
           }:''}
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
// render the saved verse card
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
// render chapter box
const renderChapterBoxElm = (cId,chapterNum) => {
  return `
  <div data-chpid="${cId}" class="chapter_box">${chapterNum}</div>
  `;
};
// render bible version choices
const renderBibleVersionChoices = (bId,bVersion, bibleInfo) => {
  return `
  <div class="font_list_item" data-bibleversion="${bId}">${bVersion}: ${bibleInfo}</div>
  `;
};


// render navigation on users preloaded choices
const renderNavigation = (bData)=>{
console.log(bData)
// first we need to render the choices for the bible version drop down
bData.bibles.forEach(bible => {
  bibleVersionChoiceDdElm.append(renderBibleVersionChoices(bible.bible_id,bible.bible_type,bible.bible_year))
});
//render the books
renderBooksAndChapters('b_esv',bData)
}

// render books and chapters for navigation
const renderBooksAndChapters =(bibleVersionId, bData)=>{
  // this is all based on the bible type the user chooses
  // if user chooses ESV then load from that bible etc.
  bData.bibles.map(b=>{
    if(b.bible_id === bibleVersionId){
      // render books and chapters
      let booksArr = b.books;
      renderBooks(booksArr)
    }
  })
}
// render books
const renderBooks = (bArr)=>{
  bArr.map(b=>{
    bibleBooksContElm.append(renderBookDropDown(b.book_name,b.book_id,b.chapters))
  })
}


// test render
renderNavigation(bibleData);