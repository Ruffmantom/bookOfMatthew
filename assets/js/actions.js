function createSerializedId() {
  var s = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%`;
  var id = ``;
  for (let i = 0; i < 10 + 1; i++) {
    let b = s.split(``);
    id += b[Math.floor(Math.random() * 67)];
  }
  return id;
}

$(function () {
  // BUTTONS
  const menuBtn = $(".open");
  const removeBkgBtn = $("#delete_bkg_btn");
  const editUserCloseBtn = $("#exit_edit");
  const bibleUserImageBtn = $("#b_user_img");
  const fileInput = $("#image_uploader");
  const chooseFileBtn = $("#upload_image_btn");
  const fileSubmitBtn = $("#submit_imag_btn");
  const optionsCopyBtn = $("#options_btn_copy");
  const verseIncreaseBtn = $("#v_s_btn_r");
  const verseDecreaseBtn = $("#v_s_btn_l");
  const clearUserBtn = $("#clear_user_data_btn");
  const pagenationNextBtnElm = $("#b_pn_btn_overlay_next");
  const pagenationBackBtnElm = $("#b_pn_btn_overlay_back");
  const bookDropDownBtnElmID = "b_book_c_dd_btn";
  const closeNaveBtnElm = $(".nav_close_btn");
  const saveVerseBtn = $("#options_btn_save");
  const svdCrdShareBtn = "svd_crd_share";
  const svdCrdHeartBtn = "svc_heart_btn";
  const verseOptionsShareBtn = $("#options_btn_share");

  // CONTAINERS AND OTHER HTML OBJECTS
  const menuElm = $("#app_menu_id");
  const colorMenu = $(".highlight_box");
  const hlBox = $("#hl_colors");
  const deleteHlBox = $("#delete_hl");
  const dropDown = $(".selection_cont");
  const dropList = $(".font_list_cont");
  const dropIcon = $("#drop_icon");
  const selectionName = $("#selection_name");
  const svdVerseCardHrtIcon = $("#svd_heart_icon");
  // STATE AND OTHER DATA VARIABLES
  let menuOpen = false;
  let userTextSize = parseInt(activeUser.verseFontSize);
  const hlColors = ["#ffff0b", "#16ff60", "#ff6666", "#00fbff", "#ff2fee"];
  const apiKey = "622f91b0503eed7cb5964a9ae2ca95ae";
  const bibleVersionBtnId = "close_bv_dd_btn";
  const closeNaveBtnElmID = "close_nav_btn";
  const bibleNavBtnElmID = "b_nav_btn";
  // id serializer

  // Navigation drop down content containers actions
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
      // console.log("clicked toggle: " + darkModeThemeOn);
      darkModeThemeOn = true;
      transitionToDarkMode();
      //update user
      activeUser.mode = true;
      updateUser(true, "Theme Saved!", false);
    } else {
      // console.log("clicked toggle: " + darkModeThemeOn);
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
        // load navigation
        loadNavigationAndBible(activeUser);
        //
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
      case svdCrdHeartBtn:
        // Bible DD version drop down
        // will need this icon id: svdVerseCardHrtIcon
        e.stopPropagation();
        // toggleDropDown(ddValId, bibleVersionsSelctContElm);
        // console.log("clicked saved heart!");

        // need to remove it from user first
        // --- get id from button
        let cardId = e.target.dataset.verseid;
        let cardArr = Array.from($(".b_saved_verse_card"));
        // --- search for that in the users saved verses
        let newSavedVerseArr = activeUser.usersFavVerses.filter((v) => {
          return v.save_id !== cardId;
        });
        // --- filter it out and save new array to user
        // console.log("new user saved verses", newSavedVerseArr);
        // save the user
        activeUser.usersFavVerses = newSavedVerseArr; 
        // update user
        updateUser(true, "Removed!", false);
        // notifyUser("Removed", false, 500);
        // then fade out from html
        // --- take that id and search for the correct card
        cardArr.filter((card) => {
          let foundId = card.dataset.cardid;
          // console.log(foundId)
          if (cardId === foundId) {
            // --- fadeOut()
            let removeTimer = setTimeout(() => {
              $(card).fadeOut(1000);
              clearTimeout(removeTimer)
            }, 500);
          }
          // if no saved verses then add text showing there are no saved verses
          // if more than 3 saved verses, then show button to show pop up of all the verses.
        });
        break;
      case svdCrdShareBtn:
        // Bible DD version drop down
        e.stopPropagation();
        // toggleDropDown(ddValId, bibleVersionsSelctContElm);
        // console.log('clicked saved share btn!')
        // get data from the verse card
        let d = e.target.dataset.sharedata.toString();
        // let d = e.target;
        // console.log();
        if (e && d) {
          shareOrCopyData(JSON.parse(d), true);
        }
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
  // Store all the verse data
  let clickedVerseDataArr = [];
  // get verse elements
  var verseElm = $(".v_para");
  // creat verse element arr
  let vArr = Array.from(verseElm);
  // get HL box closeBtn
  const colorCloseBtn = $(".close_hlb");
  // CLICKING THE VERSE
  const verseElmOnClick = (e) => {
    // console.log("clicked a verse");
    let verseTarget = e.target;
    let verseId = verseTarget.dataset.verseid;
    let verseData = verseTarget.dataset.versetext;
    let vDataObj = {
      _id: parseInt(verseId.split("-")[4].split("v")[1]),
      vId: verseId,
      vTxt: verseData,
    };
    // console.log(verseId);
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
          // clear clicked verse data array
          clickedVerseDataArr = [];
        } else {
          // delete from array
          deleteVerseFromArray(verseId);
        }
      } else {
        // add underline
        addUnderline(verseId);
        // add to array
        verseIDArr.push(verseId);
        // push into verse data array
        clickedVerseDataArr.push(vDataObj);
        // console.log(clickedVerseDataArr);
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
      // push into verse data array
      clickedVerseDataArr.push(vDataObj);
      // console.log(clickedVerseDataArr);
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
      // console.log("removed: " + vId + " from clicked verse array");
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
        // console.log("found ID and setting check to true");
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
      // clear clicked verse data array
      clickedVerseDataArr = [];
      // remove all underlines
      removeUnderline("null", true);
      // remove spacer
      $(".body_spacer").remove();
      // heart button reset
      // heart to turn color
      $("#pop_up_heart").removeClass("fa-heart");
      $("#pop_up_heart").addClass("fa-heart-o");
      // $("#pop_up_heart").css({ color: "black" });
      $("#pop_up_heart").css(
        activeUser.mode ? { color: "#d5d5d5" } : { color: "black" }
      );
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
        // add data attr data-vselected=true
        addAndRemoveSelected(true, v);
        if (darkModeThemeOn) {
          $(v).css(addBorder("#d5d5d5"));
        } else {
          $(v).css(addBorder("black"));
        }
      }
    });
  }
  const addAndRemoveSelected = (add, verse) => {
    if (add) {
      // console.log("adding selected attr - ");
      // console.log($(verse));
      $(verse).attr("data-vselected", "true");
    } else {
      // console.log("removing selected attr");
      // console.log($(verse));
      $(verse).removeData("vselected");
      $(verse).removeAttr("data-vselected");
    }
  };
  // function to remove underline
  // need functionality for determining if
  // - clicked same verse
  // - closed highlight box
  function removeUnderline(id, all) {
    let verseArr = Array.from($(".v_para"));
    verseArr.forEach((v) => {
      // just the verse with the id clicked gets underline removed
      if (v.dataset.verseid === id) {
        //remove data selected
        addAndRemoveSelected(false, v);
        // log("about to remove underline from verse: " + id);
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
    // console.log(e.target.dataset.colorid);
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
      // log("updated user");
      // log(activeUser);
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
    // console.log("clicked");
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
      // console.log("File Selected" + imgUrl);
    } catch (error) {
      // console.log("user did not select file");
      // console.log(error);
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
    // console.log(userTextSize);
    // console.log(typeof userTextSize);
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
  let listOpen = false;
  // console.log("about to load font type");
  // set font selection on load
  if (activeUser) {
    selectionName.text(activeUser.verseFont);
  }
  selectionName.text(fontList[1]);

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
      return `<div class="font_list_item" data-fontkey="${f}" style="font-family:${f}">${f}</div>`;
    });
  });
  const fontListItem = $(".font_list_item");
  fontListItem.on("click", (e) => {
    // console.log("clicked a font");
    var font = $(e.target).attr("data-fontkey");
    // console.log(font);
    if (listOpen) {
      listOpen = false;
      dropList.hide();
      dropDown.removeClass("select_open");
      listOpen = false;
      dropIcon.addClass("fa-angle-down");
      dropIcon.removeClass("fa-angle-up");
      selectionName.text(font);
      // console.log(font);
      setVerseFont(font);
      // update user
      activeUser.verseFont = font;
      var fontChangeTimer = setTimeout(() => {
        updateUser(notifyUser);
        clearTimeout(fontChangeTimer);
      }, 3500);
    }
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
    // console.log(newUserPos);
    activeUser.userbiblePos = "";
    activeUser.userbiblePos = newUserPos;
    nextChapterLoad(true);
  };

  // btn clicks
  pagenationNextBtnElm.click(() => {
    chapterState++;
    updateUserPosition(undefined, undefined, undefined, chapterState);
    // console.log("next chapter");
  });

  pagenationBackBtnElm.click(() => {
    chapterState--;
    updateUserPosition(undefined, undefined, undefined, chapterState);
    // console.log("back chapter");
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
        // console.log("clicked Chapter btn");
        let splitId = e.target.dataset.chpid.split("-");
        let btnId_bv = splitId[0];
        let btnId_te = splitId[1];
        let btnId_bk = splitId[2];
        let btn_ch = parseInt(splitId[3]);
        if (btn_ch !== chapterState) {
          chapterState = btn_ch;
          // load HTML
          updateUserPosition(btnId_bv, btnId_te, btnId_bk, chapterState);
          // console.log("Choose chapter: " + btn_ch);
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
  // ------------------- Clear user data btn -----------------------
  // clear the data and reload the app
  // have a prompt confirming
  const clearUserData = () => {
    // console.log("clearing user data");
    // let user know it has been finished
    notifyUser("Data Cleard!", false, 1000);
    // reload page
    var timer = setTimeout(() => {
      window.localStorage.removeItem("bibleUser");
      location.reload(true);
      clearTimeout(timer);
    }, 2500);
  };

  clearUserBtn.on("click", () => {
    clearUserData();
  });

  // Copy data, save data and share data State
  let formmatedSaveVerse = {};
  // ------------------- END Clear user data btn -----------------------
  // ------------------- Save user verse -----------------------
  saveVerseBtn.on("click", (e) => {
    getClickedData();
    // console.log(formmatedSaveVerse)
    // save to the user
    activeUser.usersFavVerses.push(formmatedSaveVerse);
    updateUser(true, "Verse Saved!", false, 150);
    // heart to turn color
    $("#pop_up_heart").removeClass("fa-heart-o");
    $("#pop_up_heart").addClass("fa-heart");
    $("#pop_up_heart").css({ color: "#ff6666" });
    var closeColorMenuTimer = setTimeout(() => {
      // close HL box
      openColorMenu(false);
      clearTimeout(closeColorMenuTimer);
    }, 1000);
    // clear state
    formmatedSaveVerse = {};
  });
  // ------------------- END Save user verse -----------------------

  // ------------------- share / copy verse -----------------------
  // get the clicked data
  function getClickedData() {
    // filter list from least to greatest
    let sortedCopyData = clickedVerseDataArr.sort((a, b) => a._id - b._id);
    // this is the function to get the share,copy, and save data
    let gotData = getCpyBk(sortedCopyData);
    return gotData;
  }
  const removeExtraFormatting = (string) => {
    let newStr = string.split(" ").filter((words) => {
      return words != "<br>";
    });
    return newStr;
  };
  // format the data
  const getCpyBk = (cd) => {
    let as = cd[0].vId.split("-");
    let bk = as[2];
    let bt = as[0].toUpperCase();
    let bkName = bk.charAt(0).toUpperCase() + bk.slice(1);
    let chap = as[3];
    // create array of just the numbers
    let cpVerNumArr = []
    cd.map((id) => {
      console.log(id)
      cpVerNumArr.push(id._id);
    });
    let joinedVerseNums = splitVerseSequence(cpVerNumArr);
    let joinedVerses = joinVerses(cd);
    // this is the copy data, share data and save data
    // function to filter out <br>
    removeExtraFormatting(joinedVerses);
    // Create the save verse data
    let joinedCopyData = `"${joinedVerses}" ${bkName} ${chap}:${joinedVerseNums} ${bt}`;
    formmatedSaveVerse.save_id = createSerializedId();
    formmatedSaveVerse.verse_data = bt;
    formmatedSaveVerse.book_id = bkName;
    formmatedSaveVerse.verse_loc = `${bkName} ${chap}:${joinedVerseNums} ${bt}`;
    formmatedSaveVerse.verse_text = joinedVerses;
    formmatedSaveVerse.share_data = joinedCopyData;
    // Return the copy data
    return joinedCopyData;
  };
  // split the verse sequence to help format
  const splitVerseSequence = (arrnew) => {
    console.log("Start splitVerseSequence: ", arrnew)
    let arr2 = [];
    for (let j = 0; j < arrnew.length - 1; j++) {
      if (arrnew[j + 1] - 1 !== arrnew[j]) {
        arr2.push(arrnew.splice(0, j + 1));
        j = 0;
      }
    }
    if (arrnew.length > 0) {
      arr2.push(arrnew.splice(0));
    }
    console.log("End splitVerseSequence: ", arr2)
    return formatVerseNums(arr2);
  };
  // format the verse arrays
  const formatVerseNums = (arrays) => {
    console.log('Start formatVerseNums ', arrays)
    let newArr = [];
    arrays.forEach((arr) => {
      if (arr.length > 2) {
        // console.log(arr)
        newArr.push(`${arr[0]}-${arr[arr.length - 1]}`);
      } else {
        newArr.push(arr.join("-"));
      }
    });
    let cpytext = newArr.join(",");
    console.log('End formatVerseNums ', cpytext)
    return cpytext;
    // if the length of the array is
  };
  // Join the verses
  const joinVerses = (arr) => {
    let verses = [];
    arr.forEach((a) => {
      verses.push(a.vTxt);
    });
    // this regex removes HTML from a srting
    return verses
      .join("")
      .replace(/(<([^>]+)>)/gi, "")
      .trim();
  };
  // function to share or copy data
  const shareOrCopyData = (data, share) => {
    if (share && navigator.share) {
      navigator.share({
        text: data,
        url: "https://ruffmantom.github.io/bookOfMatthew/",
        title: "The Gospel App",
      });
    } else {
      // copyToClipboard(d.toString());
      navigator.clipboard.writeText(data);
      // notify user it has been copied
      notifyUser("Copied!", false, 500);
    }
    // close HL box
    openColorMenu(false);
  };
  // End saved card share button

  // SHARE & COPY ACTIONS ------------------------------
  // for saved verses actions refer to [ $(".bible_book_navigation").on ]
  // color box share button
  verseOptionsShareBtn.on("click", (e) => {
    // gets data from clicked verses
    let d = getClickedData();
    if (e) {
      shareOrCopyData(d.toString(), true);
    }
  });
  // color box copy button
  optionsCopyBtn.on("click", function (e) {
    let d = getClickedData();
    if (e) {
      shareOrCopyData(d.toString(), false);
    }
  });
  // ------------------- END share / copy verse -----------------------

  // Rmove saved verse from saved verses
  // svdCrdHeartBtn.on('click',(e)=>{
  //   if(e){
  //     console.log('clicked heart!')
  //   }
  // })
  // End remove saved verse from saved verses

  // end of doc ready
});