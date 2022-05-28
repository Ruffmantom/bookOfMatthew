$(document).ready(() => {
  const menuBtn = $(".open");
  let menuOpen = false;
  // let colorOpen = false;
  const apiKey = "23fe147172f01ef601d968c14776cb14";
  // const apiLink = ''
  const menuElm = $("#app_menu_id");
  const colorMenu = $(".highlight_box");
  const hlColors = ["#ffff0b", "#16ff60", "#ff6666", "#00fbff", "#ff2fee"];
  const hlBox = $("#hl_colors");
  const deleteHlBox = $("#delete_hl");
  const removeBkgBtn = $("#delete_bkg_btn");
  const editUserCloseBtn = $("#exit_edit");
  const bibleUserImageBtn = $("#b_user_img");
  const fileInput = $("#image_uploader");
  const chooseFileBtn = $("#upload_image_btn");
  const fileSubmitBtn = $("#submit_imag_btn");
  // set colors into color box
  hlColors.map((c) => {
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
    vArr.forEach((v) => {
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
  // let colorSwatchArr = Array.from(colorSwatch);
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
    vArr.map((v) => {
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
    vArr.forEach((v) => {
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
        updateUser(notifyUser);
      }
    });
  };

  function saveUser(savedVerses) {
    log(activeUser);
    savedVerses.map((i) => {
      activeUser.verses.push(i);
    });
    updateUser(notifyUser);
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
    updateUser(notifyUser);
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
      chooseFileBtn.css({ display: "none" });
      // upload file / save btn show
      fileSubmitBtn.css({ display: "flex" });

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

    $.ajax(apiSettings).done(function (response) {
      // console.log(response);
      var jx = JSON.parse(response);
      // console.log("image url: " + jx.data.url);
      let returnedImg = jx.data.url;
      activeUser.imageUrl = returnedImg;
      if (activeUser.imageUrl !== "undefined") {
        imageState = true;
        imageStateCheck();
      }
    });
  });
  //function for checking image state
  const imageStateCheck = () => {
    if (imageState === false) {
      // hide save btn
      // hide upload btn
      chooseFileBtn.css({ display: "flex" });
      // upload file / save btn show
      fileSubmitBtn.css({ display: "none" });
      // set loading icon inside btn
      $("#upload_image_btn>p").css("display", "none");
      chooseFileBtn.append(`
      <div class="loading_dots_cont">
      <div class="dot scale_dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
      `);
      startDots(true);
    } else {
      startDots(false);
      fileSubmitBtn.css({ display: "none" });
      chooseFileBtn.css({ display: "flex" });
      // set save btn back to upload
      $(".loading_dots_cont").remove();
      $("#upload_image_btn>p").css("display", "block");
      // set state back to false
      imageState = false;
      // set user image to active user state
      setUserImage(activeUser.imageUrl);
      updateUser(notifyUser);
    }
  };

  var startDots = (start) => {
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
    }, 420);
  };
  startDots();
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
    updateUser(notifyUser);
    var removeSaveBtn = setTimeout(() => {
      saveUsernameBtn.css({ display: "none" });
      clearTimeout(removeSaveBtn);
    }, 500);
  });

  //-------------------------------------------
  // end of doc ready
});
