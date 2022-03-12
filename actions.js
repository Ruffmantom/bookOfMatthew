const log = (l) => {
  console.log(l);
};
$(document).ready(() => {
  const menuBtn = $(".open");
  let menuOpen = false;
  // let colorOpen = false;
  const menuElm = $("#app_menu_id");
  const colorMenu = $(".highlight_box");
  menuElm.hide();
  colorMenu.hide();
  menuBtn.click((e) => {
    if (e && !menuOpen) {
      $(".open>i").removeClass("fa-bars");
      $(".open>i").addClass("fa-times");
      menuOpen = true;
      openMenu();
    } else {
      $(".open>i").addClass("fa-bars");
      $(".open>i").removeClass("fa-times");
      menuOpen = false;
      openMenu();
    }
  });
  function openMenu() {
    if (menuOpen) {
      menuElm.show("slide", { direction: "right" }, 350);
    } else {
      menuElm.hide("slide", { direction: "right" }, 350);
    }
  }

  const borderBottom = {
    "background-image":
      "linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)",
    "background-position": "bottom",
    "background-size": "11px 1px",
    "background-repeat": "repeat-x",
  };

  // verse array to store HL verse for user
  let verseIDArr = [];
  // get verse elements
  var verseElm = $(".v_para");
  // creat verse element arr
  let vArr = Array.from(verseElm);
  // get HL box closeBtn
  const colorCloseBtn = $(".close_hlb");
  // CLICKING THE VERSE
  verseElm.click((e) => {
    let verseTarget = e.target;
    let verseId = verseTarget.dataset.verseid;
    if (e && verseIDArr.length >= 1) {
      log("recognized second click");
      // log("hit else if verseIDArr.length >= 1")
      // second click
      let check = checkClickedVerse(verseId);
      log("second click is same? " + check);
      if (check) {
        // remove underline
        removeUnderline(verseId, false);
        // delete from array
        if (verseIDArr.length === 1) {
          // and close HL box
          openColorMenu(false);
          // clear clicked verse array
          verseIDArr = []
        } else {
          // delete from array
          deleteVerseFromArray(verseId);
        }
      } else {
        // add underline
        addUnderline(verseId);
        // add to array
        verseIDArr.push(verseId);
      }
    } else {
      // ----------
      // log("hit else if verseIDArr.length === 0")
      log("First ever verse click");
      // first time click add underline and open HL box
      openColorMenu(true);
      scrollTo(e);
      addUnderline(verseId);
      verseIDArr.push(verseId);
    }
  });
  //function to remove specific id from clicked array
  function deleteVerseFromArray(vId) {
    verseIDArr = verseIDArr.filter((x) => {
      log("removed: " + vId + " from clicked verse array");
      return x != vId;
    });
  }
  //function to check if verse has been clicked
  function checkClickedVerse(vId) {
    let check = false;
    // determine if clicking same verse or adding a new one
    // - if same verse, remove underline and delete from array
    // - if new one, add underline (the else below)
    verseIDArr.map((v) => {
      if (v === vId) {
        check = true;
        log("found ID and setting check to true");
      }
    });
    return check;
  }
  // function to open and close highlight box
  function openColorMenu(open) {
    if (!open) {
      log("Closing HL box");
      $(".bible_read_body").css("padding", "100px 20px 50px 20px");
      colorMenu.hide("slide", { direction: "down" }, 350);
    } else {
      log("Opening HL box");
      $(".bible_read_body").css("padding", "100px 20px 270px 20px");
      colorMenu.show("slide", { direction: "down" }, 350);
    }
  }
  // click function to close color highlight box from closeBtn
  colorCloseBtn.click((e) => {
    let verseTarget = e.target;
    let verseId = verseTarget.dataset.verseid;
    if (e) {
      // close HL box
      openColorMenu(false);
      // remove all underlines since HL box is closed
      removeUnderline(verseId, true);
      // remove all verses from verseIDArr
      verseIDArr = [];
    }
  });
  // function to add underline when verse is clicked
  function addUnderline(id) {
    vArr.forEach((v) => {
      // just the verse with the id clicked gets underline removed
      if (v.dataset.verseid === id) {
        log("about to add underline to verse: " + id);
        $(v).css(borderBottom);
      }
    });
  }
  // function to remove underline
  // need functionality for determining if
  // - clicked same verse
  // - closed highlight box
  function removeUnderline(id, all) {
    vArr.forEach((v) => {
      // just the verse with the id clicked gets underline removed
      if (v.dataset.verseid === id) {
        log("about to remove underline from verse: " + id);
        $(v).css("background-image", "none");
      } else if (all === true) {
        // all verses get underline removed
        $(v).css("background-image", "none");
      }
    });
  }
  // scroll to function
  // - PROBLEM: lower verses scroll down for some reason
  function scrollTo(e) {
    log($(e.target).offset());
    let tVal = $(e.target).offset().top;
    $(".bible_read_body").animate(
      {
        scrollTop: ($(e.target).offset().top = 250),
      },
      1000
    );
    // $.scrollTo(e.target, 500, {
    //   offset: -$(window).height() / 2
    // });
  }

  // setting dark mode
  // goal
  // get all child elements that have "dark"
  //  and add the elements tag name to it
  // ex: dark_p or dark_h1 etc.
  // end of doc ready
});
