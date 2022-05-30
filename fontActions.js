// this file will hold font changing actions like
// - changing font
// - changing size
$(document).ready(() => {
  // on load font family for bible is font-family: Georgia, "Times New Roman", Times, serif;
  const verseIncreaseBtn = $("#v_s_btn_r");
  const verseDecreaseBtn = $("#v_s_btn_l");
  let userTextSize = parseInt(activeUser.verseFontSize);
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
      activeUser.verseFont !== 'undefined' ? activeUser.verseFont : verseFontState
    );
    dropList.hide();
    dropDown.click(() => {
      if (listOpen) {
        dropList.hide();
        listOpen = false;
        dropIcon.addClass("fa-angle-down");
        dropIcon.removeClass("fa-angle-up");
      } else {
        dropList.show();
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

    //----------------------------------
    //end of Document.ready
  });

  // END script from github from other project

  // end of doc ready
});
