// Navigation drop down Buttons
const bibleNavBtnElm = $("#b_nav_btn");
const bookDropDownBtnElm = $(".b_book_c_dd_btn"); // there are multiple and will be dynamically added on app load
const closeNaveBtnElm = $("#close_nav_btn");
// Navigation drop down content containers
// nav drop down
const bibleNavDdContElm = $(".b_nav_dd_cont");
// nav book drop down
const bibleBookDdContElm = $(".b_dd_chapter_cont");

$(function () {
  // main drop down close function
  const showOrHideDropDown = (event, toggle, show, btnicon, cont) => {
    if (event && toggle) {
      console.log("hit first if");
      cont.slideToggle("slow");
      btnicon ? btnicon.toggleClass(".rotate_btnicon") : "";
    } else if (event && !toggle && show) {
      console.log("hit second else if");
      cont.slideDown("slow");
      btnicon ? btnicon.addClass(".rotate_btnicon") : "";
    } else if ((event && !show)) {
      console.log("hit third else if");
      cont.slideUp("slow");
      btnicon & !show ? btnicon.removeClass(".rotate_btnicon") : "";
    }
  };
  // if the nav is clicked
  // open nav and shoe close btn
  bibleNavBtnElm.click((e) => {
    showOrHideDropDown(e, false, true, false, bibleNavDdContElm);
    closeNaveBtnElm.show();
    closeNaveBtnElm.css({display:'flex'});
  });
  // if close btn clicked
  // close nav and hide close btn
  closeNaveBtnElm.click((e) => {
    showOrHideDropDown(e, false, false, false, bibleNavDdContElm);
    closeNaveBtnElm.hide();
  });
  bookDropDownBtnElm.click(e=>{
    let bookIdVal = e.target.dataset.bookid;
    console.log(bookIdVal)
    let bookContArr = Array.from(bibleBookDdContElm);
    bookContArr.forEach(elm => {
        let elmBookId = elm.dataset.bookid;
        if(bookIdVal === elmBookId){
           showOrHideDropDown(e,true,true,$('.b_book_c_dd_btn>i'),$(elm));
        }else{
            console.log('nope')
        }
    });
    // showOrHideDropDown(e,true,false,$('.b_book_c_dd_btn>i'),bibleBookDdContElm)
  })
});
