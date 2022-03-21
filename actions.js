// const log = (l) => {
//   console.log(l);
// };
$(document).ready(() => {
  const menuBtn = $(".open");
  let menuOpen = false;
  // let colorOpen = false;
  const menuElm = $("#app_menu_id");
  const colorMenu = $(".highlight_box");
  const hlColors = [
    "#ffff0bbe",
    "#16ff60c4",
    "#ff2d2db2",
    "#00fbffc7",
    "#ff2feecb",
  ];
  const hlBox = $("#hl_colors");
  const deleteHlBox = $("#delete_hl");
  const removeBkgBtn = $("#delete_bkg_btn");
  // set colors into color box
  hlColors.map((c) => {
    hlBox.append(
      `<div class="color_swatch" style="background:${c}" data-colorid=${c}></div>`
    );
  });
  function AddDeleteBKG(c, show) {
    if (show) {
      deleteHlBox.css("display", "flex");
      removeBkgBtn.css({ display: "flex", background: c });
      hlBox.css("width", "75%");
    } else {
      deleteHlBox.css({ display: "none", background: "none" });
      hlBox.css("width", "100%");
    }
  }
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

  function addBorder(c) {
    const borderBottom = {
      // "background-image":
      //   `linear-gradient(to right, ${c} 33%, rgba(255,255,255,0) 0%)`,
      // "background-position": "bottom",
      // "background-size": "11px 2px",
      // "background-repeat": "repeat-x",
      "border-bottom": `2px dashed ${c}`,
    };
    return borderBottom;
  }
  // Add colors to HL box
  // ---------------------------------------------
  // --------------------START VERSE CLICK FUNCTIONALITY -------------------------
  // ---------------------------------------------
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
    let verseBkg = verseTarget.dataset.versebkg;
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
          verseIDArr = [];
        } else {
          // delete from array
          deleteVerseFromArray(verseId);
        }
      } else {
        // add underline
        addUnderline(verseId, verseBkg);
        checkIfVerseHasBkg(e);
        // add to array
        verseIDArr.push(verseId);
      }
    } else {
      // ----------
      // log("hit else if verseIDArr.length === 0")
      log("First ever verse click");
      // first time click add underline and open HL box
      openColorMenu(true);
      checkIfVerseHasBkg(e);
      var waitToShowBox = setTimeout(()=>{
        scrollTo(e);
        clearTimeout(waitToShowBox);
      },50)
      addUnderline(verseId, verseBkg);
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
      $(".bible_read_body").css("padding", "100px 20px 150px 20px");
      colorMenu.hide("slide", { direction: "down" }, 350);
      // remove all verses from verseIDArr on close
      verseIDArr = [];
      // remove all underlines
      removeUnderline("null", true);
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
    }
  });
  // function to add underline when verse is clicked
  function addUnderline(id, bc) {
    vArr.forEach((v) => {
      // just the verse with the id clicked gets underline removed
      if (v.dataset.verseid === id) {
        log("about to add underline to verse: " + id);
        if (bc !== "undefined") {
          $(v).css(addBorder(bc));
        } else {
          if (darkModeThemeOn) {
            $(v).css(addBorder("#d5d5d5"));
          } else {
            $(v).css(addBorder("black"));
          }
        }
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
        $(v).css("border-bottom", "none");
      } else if (all === true) {
        // all verses get underline removed
        $(v).css("border-bottom", "none");
      }
    });
  }
  // scroll to function
  // - PROBLEM: lower verses scroll down for some reason
  function scrollTo(e) {
    e.target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  // ---------------------------------------------
  // --------------------END VERSE CLICK FUNCTIONALITY -------------------------
  // ---------------------------------------------
  // ---------------------------------------------
  // --------------------END HL COLOR CLICK FUNCTIONALITY -------------------------
  // ---------------------------------------------
  let colorSwatch = $(".color_swatch");
  let colorSwatchArr = Array.from(colorSwatch);
  // click on color
  colorSwatch.click((e) => {
    // log('clicked color '+ e.target.dataset.colorid)
    let colorId = e.target.dataset.colorid;
    // when color is clicked
    // - highlight selected verse(s)
    let userVerses = [];
    vArr.forEach((v) => {
      let vId = v.dataset.verseid;
      verseIDArr.map((i) => {
        if (i === vId) {
          $(v).css("background", colorId);
          // set versebkg data
          v.dataset.versebkg = colorId;
          // set verses into arr
          let verseData = {
            verse_id: vId,
            verse_high_light: colorId,
          };
          userVerses.push(verseData);
        }
      });
    });
    // - close HL box
    openColorMenu(false);
    // - Save to DB
    if (userVerses.length >= 1) {
      saveUser(userVerses);
    }
  });
  var clickedBKGs = [];
  function checkIfVerseHasBkg(e) {
    let verseBkg = e.target.dataset.versebkg;
    log(verseBkg);
    clickedBKGs.push(verseBkg);
    // if verse has BKG
    // check if backgrounds are the same
    let checked = checkClickedBkg();
    // if bkg is same when multiple are selected: show delete btn
    // if not: hide delete btn
    // add a Delete swatch
    if (verseBkg === undefined || verseBkg === "undefined") {
      AddDeleteBKG(undefined, false);
    } else {
      if (clickedBKGs.length >= 2 && checked) {
        AddDeleteBKG(verseBkg, true);
      } else {
        AddDeleteBKG(undefined, false);
      }
    }
  }
  function checkClickedBkg() {
    let allEqual = (clickedBKGs) =>
      clickedBKGs.every((v) => v === clickedBKGs[0]);
    return allEqual;
  }
  function removeBkgColor() {
    // need to remove color
    // set bkgDataset to undefined
    // remove verse from user verse array
    // save/ update user
  }

  function saveUser(savedVerses) {
    log(activeUser);
    savedVerses.map((i) => {
      activeUser.verses.push(i);
    });
    updateUser();
    var saveTimeOut = setTimeout(() => {
      log("updated user");
      log(activeUser);
      clearTimeout(saveTimeOut);
    }, 1500);
  }
  $("#delete_bkg_btn").click((e) => {
    // do functions here
  });
  // ---------------------------------------------
  // --------------------END HL COLOR CLICK FUNCTIONALITY -------------------------
  // ---------------------------------------------
  // ---------------------------------------------
  // --------------------START ON SCROLL FUNCTIONALITY -------------------------
  // ---------------------------------------------
  // if scrolling
  // -- add opacity of 1
  // if stationary
  // -- opacity is back to 0.5
  let bibleBody = document.querySelector(".bible_read_body");
  bibleBody.addEventListener("touchmove", function (e) {
    menuBtn.css("opacity", "0.5");
  });
  bibleBody.addEventListener("touchend", function (e) {
    menuBtn.css("opacity", "1");
  });
  // ---------------------------------------------
  // --------------------END ON SCROLL FUNCTIONALITY -------------------------
  // ---------------------------------------------
  // setting dark mode
  // goal
  // get all child elements
  // add the elements class name to "_dark"
  // ex: before: .highlight_box | After: .highlight_box_dark etc.
  const toggleBtn = $("#toggler_btn");
  // save the usersTheme
  function saveUserTheme(val) {
    activeUser.mode = val;
    updateUser();
    var saveTimeOut = setTimeout(() => {
      log("updated user");
      log(activeUser);
      clearTimeout(saveTimeOut);
    }, 1500);
  }
  toggleBtn.click((e) => {
    if (e && !darkModeThemeOn) {
      log("first time click! turned it on");
      // toggleBtn.css(togCss[1].css);
      darkModeThemeOn = true;
      transitionToDarkMode();
      //update user
      saveUserTheme(true);
    } else {
      log("clicked second time to turn off");
      // toggleBtn.css(togCss[0].css);
      darkModeThemeOn = false;
      transitionToDarkMode();
      //update user
      saveUserTheme(false);
    }
  });

  //-------------------------------------------
  // end of doc ready
});
