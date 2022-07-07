$(function () {
  const menuBtn = $(".open");
  let menuOpen = false;
  // let colorOpen = false;
  const apiKey = "622f91b0503eed7cb5964a9ae2ca95ae";
  // const apiLink = ''
  const menuElm = $("#app_menu_id");
  const colorMenu = $(".highlight_box");
  const hlBox = $("#hl_colors");
  const deleteHlBox = $("#delete_hl");
  const removeBkgBtn = $("#delete_bkg_btn");
  const editUserCloseBtn = $("#exit_edit");
  const bibleUserImageBtn = $("#b_user_img");
  const fileInput = $("#image_uploader");
  const chooseFileBtn = $("#upload_image_btn");
  const fileSubmitBtn = $("#submit_imag_btn");
  const toggleBtn = $("#toggler_btn");
  const toggleIcon = $("#t_icon");
  const verseIncreaseBtn = $("#v_s_btn_r");
  const verseDecreaseBtn = $("#v_s_btn_l");
  let userTextSize = parseInt(activeUser.verseFontSize);
  const hlColors = ["#ffff0b", "#16ff60", "#ff6666", "#00fbff", "#ff2fee"];
  // LOAD BIBLE ---------------------------------------------
  // LOAD BIBLE ---------------------------------------------
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
  // NAVIGATION actions
  // NAVIGATION actions
  // NAVIGATION actions
  const bibleNavBtnElmID = "b_nav_btn";
  const bookDropDownBtnElmID = "b_book_c_dd_btn";
  const closeNaveBtnElm = $(".nav_close_btn");
  const closeNaveBtnElmID = "close_nav_btn";
  const bibleVersionBtnId = "close_bv_dd_btn";
  // Navigation drop down content containers
  // nav drop down
  const bibleNavDdContElm = $(".b_nav_dd_cont");
  // navigation rendering
  const bibleVersionsSelctContElm = $("#b_version_choice_dd_cont");
  // main drop down close function
  const showOrHideDropDown = (show, cont) => {
    if (show) {
      cont.slideDown("fast");
    } else if (!show) {
      cont.slideUp("fast");
    }
  };
  // toggle  for drop down containers
  const toggleDropDown = (btnID, cont) => {
    cont.slideToggle("fast");
    btnID ? findAndRotateIcon(btnID) : "";
  };
  // find and rotate icon
  function findAndRotateIcon(id) {
    let iconArr = Array.from($(".drop_icon"));
    iconArr.filter((iElm) => {
      // first remove all rotate
      if (iElm.dataset.ddbtnid === id) {
        $(iElm).hasClass("rotate_btnicon")
          ? $(iElm).removeClass("rotate_btnicon")
          : $(iElm).addClass("rotate_btnicon");
      } else {
        $(iElm).removeClass("rotate_btnicon");
      }
    });
  }
  // toggle darkmode function
  const changeDarkMode = (e) => {
    if (e && !darkModeThemeOn) {
      console.log("clicked toggle: " + darkModeThemeOn);
      darkModeThemeOn = true;
      transitionToDarkMode();
      //update user
      activeUser.mode = true;
      updateUser(true, "Theme Saved!", false);
    } else {
      console.log("clicked toggle: " + darkModeThemeOn);
      darkModeThemeOn = false;
      transitionToDarkMode();
      //update user
      activeUser.mode = false;
      updateUser(true, "Theme Saved!", false);
    }
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
        showOrHideDropDown(true, bibleNavDdContElm);
        menuBtn.css({ zIndex: "9" });
        closeNaveBtnElm.fadeIn();
        closeNaveBtnElm.css({ display: "flex" });
        break;
      case closeNaveBtnElmID:
        // close Nav DD btn
        e.stopPropagation();
        showOrHideDropDown(false, bibleNavDdContElm);
        menuBtn.css({ zIndex: "999" });
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
        let bookContArr = Array.from($(".b_dd_chapter_cont"));
        bookContArr.forEach((elm) => {
          let elmBookId = elm.dataset.ddcontid;
          if (ddValId === elmBookId) {
            toggleDropDown(elmBookId, $(elm));
          } else {
            showOrHideDropDown(false, $(elm));
          }
        });
        break;
    }
  });
  // END NAVIGATION actions
  // End get global variables
  // bring in global data variable
  // set colors into color box
  hlColors.map((c) => {
    // this needs to append only once
    hlBox.append(
      `<div class="color_swatch" style="background-color:${c}" data-colorid=${c}></div>`
    );
  });
  // adds delete background BTN
  function AddDeleteBKG(c, show) {
    // this will be the color that gets cleared when clicked
    removeBkgBtn.attr("data-colorid", c);
    // add the dataid to the icon as well since it click function might target that instead
    $("#delete_bkg_btn>i").attr("data-colorid", c);
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
      "border-bottom": `3px dashed ${c}`,
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
  const verseElmOnClick = (e) => {
    console.log("clicked a verse");
    let verseTarget = e.target;
    let verseId = verseTarget.dataset.verseid;
    console.log(verseId);
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
      var waitToShowBox = setTimeout(() => {
        scrollTo(e);
        clearTimeout(waitToShowBox);
      }, 50);
      addUnderline(verseId);
      verseIDArr.push(verseId);
    }
    checkIfVerseHasBkg();
  };
  // verse click event
  $(".b_verse_body").on("click", (e) => {
    // console.log(e.target.className)
    if (e.target.className === "v_para") {
      verseElmOnClick(e);
    }
  });
  //function to remove specific id from clicked array
  function deleteVerseFromArray(vId) {
    verseIDArr = verseIDArr.filter((x) => {
      console.log("removed: " + vId + " from clicked verse array");
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
        console.log("found ID and setting check to true");
      }
    });
    return check;
  }
  // function to open and close highlight box
  function openColorMenu(open) {
    if (!open) {
      log("Closing HL box");
      colorMenu.hide("slide", { direction: "down" }, 350);
      // remove all verses from verseIDArr on close
      verseIDArr = [];
      // remove all underlines
      removeUnderline("null", true);
      // remove spacer
      $(".body_spacer").remove();
    } else {
      // log("Opening HL box");
      // add spacer for bottom text to move up
      $(".bible_read_body").append(`<div class="body_spacer"></div>`);
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
  function addUnderline(id) {
    let verseArr = Array.from($(".v_para"));
    verseArr.forEach((v) => {
      // just the verse with the id clicked gets underline removed
      if (v.dataset.verseid === id) {
        // log("about to add underline to verse: " + id);
        if (darkModeThemeOn) {
          $(v).css(addBorder("#d5d5d5"));
        } else {
          $(v).css(addBorder("black"));
        }
      }
    });
  }
  // function to remove underline
  // need functionality for determining if
  // - clicked same verse
  // - closed highlight box
  function removeUnderline(id, all) {
    let verseArr = Array.from($(".v_para"));
    verseArr.forEach((v) => {
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
  // let colorSwatchArr = Array.from(colorSwatch);
  // click on color
  colorSwatch.click((e) => {
    // log('clicked color '+ e.target.dataset.colorid)
    let verseArr = Array.from($(".v_para"));
    let colorId = e.target.dataset.colorid;
    // when color is clicked
    // - highlight selected verse(s)
    let userVerses = [];
    verseArr.forEach((v) => {
      let vId = v.dataset.verseid;
      verseIDArr.map((i) => {
        if (i === vId) {
          // adding background to verse
          $(v).css({ "background-color": colorId, color: "black" });
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
  function checkIfVerseHasBkg() {
    // this should only return true of false
    // take verse ID map through and check for bkg
    if (verseIDArr.length >= 1) {
      verseIDArr.forEach((i) => {
        // let match = false;
        // map through all verses and mach with ID
        // matchIdColor will equal a HEX color or undefined
        let matchIdColor = checkClickedBkg(i, true);
        if (matchIdColor === "undefined") {
          // console.log(matchIdColor + " Should be Undefined");
          AddDeleteBKG(matchIdColor, false);
        } else {
          // console.log(matchIdColor + " Should be HEX Color");
          // show bkg remove btn
          AddDeleteBKG(matchIdColor, true);
        }
      });
    }
  }
  function checkClickedBkg(id) {
    let checkBkg;
    let verseArr = Array.from($(".v_para"));
    verseArr.map((v) => {
      if (v.dataset.verseid === id) {
        // returns the background of matched verse with ID
        checkBkg = v.dataset.versebkg;
      }
    });
    return checkBkg;
  }
  // click function for deleteBackground
  removeBkgBtn.click((e) => {
    console.log(e.target.dataset.colorid);
    let colorToDelete = e.target.dataset.colorid;
    // run through clicked Id Array return ID that matches BKG
    // use ID to search VerseElm Array if match
    //  > delete BKG
    searchVerseElementsAndDeleteBkg(colorToDelete);
    //  > update user
  });
  function searchVerseElementsAndDeleteBkg(color) {
    //------- NEW IDEA ---------------------
    verseIDArr.forEach((vId) => {
      loopThroughverseElements(vId, color);
    });
  }
  const loopThroughverseElements = (sVerseId, color) => {
    let verseArr = Array.from($(".v_para"));
    verseArr.forEach((v) => {
      let vId = v.dataset.verseid;
      let vColorId = v.dataset.versebkg;
      if (sVerseId === vId && vColorId === color) {
        // adding background to verse
        $(v).css({ "background-color": "inherit", color: "inherit" });
        // set versebkg data
        v.dataset.versebkg = "undefined";
        // remove verses from user arr
        //let currUserVerse = activeUser.verses;
        var newArr = activeUser.verses.filter(function (value, index, arr) {
          return value.verse_id !== vId;
        });
        // console.log(newArr);
        activeUser.verses = newArr;
        // console.log(activeUser.verses);
        // close HL box
        openColorMenu(false);
        // update user
        updateUser(true, "Saved!", false);
      }
    });
  };

  function saveUser(savedVerses) {
    log(activeUser);
    savedVerses.map((i) => {
      activeUser.verses.push(i);
    });
    updateUser(true, "Saved!", false);
    var saveTimeOut = setTimeout(() => {
      log("updated user");
      log(activeUser);
      clearTimeout(saveTimeOut);
    }, 1500);
  }
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
    $(".b_pagenation_cont").css("opacity", "0.5");
  });
  bibleBody.addEventListener("touchend", function (e) {
    menuBtn.css("opacity", "1");
    $(".b_pagenation_cont").css("opacity", "1");
  });
  // ---------------------------------------------
  // --------------------END ON SCROLL FUNCTIONALITY -------------------------
  // ---------------------------------------------
  // setting dark mode
  $(".b_tog_checkbox_input").on("change", (e) => {
    e.preventDefault();
    changeDarkMode(e);
  });

  // edit user close btn
  editUserCloseBtn.click((e) => {
    if (e) {
      $(".b_user_edit").addClass("b_user_edit_closed");
    }
  });
  // open edit user pop up
  bibleUserImageBtn.click((e) => {
    if (e) {
      $(".b_user_edit").removeClass("b_user_edit_closed");
    }
  });
  // upload btn and file uploader section
  chooseFileBtn.click(() => {
    // will need to have an onchange for when a file is in
    console.log("clicked");
    fileInput.click();
  });
  // choose file input change
  let imageData = new FormData();
  let imgUrl;
  fileInput.on("change", (e) => {
    try {
      let raw = e.target.files[0];
      imgUrl = URL.createObjectURL(raw);
      imageData.append("image", raw);
      // set preview image
      $(".user_image_prev").attr("src", imgUrl);
      // hide upload btn
      chooseFileBtn.css("display", "none");
      // upload file / save btn show
      fileSubmitBtn.css("display", "flex");
      console.log("File Selected" + imgUrl);
    } catch (error) {
      console.log("user did not select file");
      console.log(error);
    }
  });
  var apiSettings = {
    url: `https://api.imgbb.com/1/upload?key=${apiKey}`,
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: imageData,
  };
  // state for image recieved
  let imageState = false;
  // submit file and save
  fileSubmitBtn.click((e) => {
    e.preventDefault();
    // start loading dots
    $("#loading_dots_overlay").css("display", "flex");
    startDots(true);
    // upload to ibgg
    $.ajax(apiSettings).done(function (response) {
      var jx = JSON.parse(response);
      // console.log("image url: " + jx.data.url);
      let returnedImg = jx.data.url;
      activeUser.imageUrl = returnedImg;
      // hide loading dots and show the p inside upload btn
      startDots(false);
      $("#loading_dots_overlay").css("display", "none");
      // hide upload btn
      fileSubmitBtn.css("display", "none");
      // show file picker btn
      chooseFileBtn.css("display", "flex");
      // set user image to active user state
      setUserImage(activeUser.imageUrl);
      updateUser(true, "Image Saved!", false);
    });
  });
  // loading dots function
  function startDots(start) {
    const dot = $(".dot");
    const dots = Array.from(dot);
    let dotCount = 0;
    var dotTimer = setInterval(() => {
      $(dots[dotCount]).removeClass("scale_dot");
      dotCount++;
      if (dotCount >= dots.length) {
        dotCount = 0;
      }
      $(dots[dotCount]).addClass("scale_dot");
      if (!start) {
        clearInterval(dotTimer);
      }
    }, 400);
  }
  // testing dots
  // startDots(true);
  // username state
  let usernameVal = "";
  // add username
  const saveUsernameBtn = $("#save_username");
  $("#user_name_input").on("keyup", (e) => {
    usernameVal = e.target.value;
    if (usernameVal.length >= 1) {
      // show save username btn
      saveUsernameBtn.css({ display: "flex" });
    } else {
      saveUsernameBtn.css({ display: "none" });
    }
  });
  saveUsernameBtn.click((e) => {
    activeUser.userName = usernameVal;
    setUsername(activeUser.userName);
    updateUser(true, "Username Saved!", false);
    var removeSaveBtn = setTimeout(() => {
      saveUsernameBtn.css({ display: "none" });
      clearTimeout(removeSaveBtn);
    }, 500);
  });
  // FONT ACTIONS IN MENU
  // on load font family for bible is font-family: Georgia, "Times New Roman", Times, serif;
  verseDecreaseBtn.click(() => {
    addOrMinusFontSize(false, userTextSize);
  });
  verseIncreaseBtn.click(() => {
    addOrMinusFontSize(true, userTextSize);
  });
  function addOrMinusFontSize(add, userFs) {
    //need to set limit
    if (add) {
      if (userFs < 27) {
        userTextSize = userFs + 1;
      } else {
        return;
      }
    } else {
      if (userFs === 16) {
        return;
      } else {
        userTextSize = userFs - 1;
      }
    }
    // update dom
    // if the font gets bigger than 20px add lineheight to body of 2.5
    console.log(userTextSize);
    console.log(typeof userTextSize);
    setVerseFontSize(userTextSize);
    // update user
    activeUser.verseFontSize = userTextSize;
    var sizeTimer = setTimeout(() => {
      updateUser(notifyUser);
      clearTimeout(sizeTimer);
    }, 3500);
  }
  const fontList = [
    "Arial",
    "Georgia",
    "Lato",
    "Libre Bodoni",
    "Lora",
    "Merriweather",
    "Montserrat",
    "Open Sans",
    "Roboto",
    "Roboto Mono",
    "Work Sans",
  ];
  // script from github from other project
  $(document).ready(function () {
    const dropDown = $(".selection_cont");
    const dropList = $(".font_list_cont");
    const dropIcon = $("#drop_icon");
    const selectionName = $("#selection_name");

    let listOpen = false;
    selectionName.text(
      activeUser.verseFont !== "undefined"
        ? activeUser.verseFont
        : verseFontState
    );
    dropList.hide();
    dropDown.click(() => {
      if (listOpen) {
        dropList.hide();
        dropDown.removeClass("select_open");
        listOpen = false;
        dropIcon.addClass("fa-angle-down");
        dropIcon.removeClass("fa-angle-up");
      } else {
        dropList.show();
        dropDown.addClass("select_open");
        listOpen = true;
        dropIcon.addClass("fa-angle-up");
        dropIcon.removeClass("fa-angle-down");
      }
    });

    fontList.map((f, i) => {
      dropList.append(() => {
        return `<div class="font_list_item" data-fontKey="${f}" style="font-family:${f}">${f}</div>`;
      });
    });
    const fontListItem = $(".font_list_item");
    fontListItem.click(function () {
      var font = $(this).attr("data-fontKey");
      // console.log(font);
      if (listOpen) {
        listOpen = false;
        dropList.hide();
        dropDown.removeClass("select_open");
        listOpen = false;
        dropIcon.addClass("fa-angle-down");
        dropIcon.removeClass("fa-angle-up");
        selectionName.text(font);
        console.log(font);
        setVerseFont(font);
        // update user
        activeUser.verseFont = font;
        var fontChangeTimer = setTimeout(() => {
          updateUser(notifyUser);
          clearTimeout(fontChangeTimer);
        }, 3500);
      }
      // selectionName.css('font-family', `${font}`)
    });
    // ------------------------------------------------------
    // ------------------- Click next chapter btn -----------------------
    let chapterState = parseInt(activeUser.userbiblePos.split("-")[3]);
    // set local variables to users pos
    let splitUserPos = activeUser.userbiblePos.split("-");
    let userBv = splitUserPos[0];
    let userTe = splitUserPos[1];
    let userBk = splitUserPos[2];
    const updateUserPosition = (bv, te, bk, ch) => {
      let newUserPos = `${bv ? bv : userBv}-${te ? te : userTe}-${
        bk ? bk : userBk
      }-${ch ? ch : chapterState}`;
      console.log(newUserPos);
      activeUser.userbiblePos = "";
      activeUser.userbiblePos = newUserPos;
      nextChapterLoad(true);
    };
    // const updateUserChapter = (cNum) => {
    //   let newUserPos = `${userBv}-${userTe}-${userBk}-${cNum}`;
    //   console.log(newUserPos);
    //   activeUser.userbiblePos = "";
    //   activeUser.userbiblePos = newUserPos;
    //   nextChapterLoad(true);
    // };

    // btn clicks
    pagenationNextBtnElm.click(() => {
      chapterState++;
      updateUserPosition(undefined, undefined, undefined, chapterState);
      console.log("next chapter");
    });

    pagenationBackBtnElm.click(() => {
      chapterState--;
      updateUserPosition(undefined, undefined, undefined, chapterState);
      console.log("back chapter");
    });
    // chapter choose
    // click page num btn handler
    bibleNavDdContElm.on("click", (e) => {
      // console.log($(e.target))
      let elmClasses = e.target.classList;
      if (
        elmClasses[1] === "chapter_box" &&
        e.target.className.split(" ")[1] !== "b_book_c_dd_btn_cl"
      ) {
        if (elmClasses[2] !== "cb_active") {
          console.log("clicked Chapter btn");
          let splitId = e.target.dataset.chpid.split("-");
          let btnId_bv = splitId[0];
          let btnId_te = splitId[1];
          let btnId_bk = splitId[2];
          let btn_ch = parseInt(splitId[3]);
          if (btn_ch !== chapterState) {
            chapterState = btn_ch;
            // load HTML
            updateUserPosition(btnId_bv, btnId_te, btnId_bk, chapterState);
            console.log("Choose chapter: " + btn_ch);
          }
        }
      } else {
        return;
      }
      // close Nav
      showOrHideDropDown(false, bibleNavDdContElm);
      menuBtn.css({ zIndex: "999" });
      closeNaveBtnElm.fadeOut();
    });
    // ------------------- Click next chapter btn -----------------------
    // ------------------------------------------------------
    //----------------------------------
    //end of Document.ready
  });
  //-------------------------------------------
  // end of doc ready
});
