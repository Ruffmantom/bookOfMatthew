const log = (l) => {
  console.log(l);
};
$(document).ready(() => {
  const menuBtn = $(".open");
  let menuOpen = false;
  let colorOpen = false;
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
    "background-size": "3px 1px",
    "background-repeat": "repeat-x",
  };

  // add color to verse
  var verseElm = $(".v_para");
  const colorCloseBtn = $(".close_hlb");
  verseElm.click((e) => {
    let verseTarget = e.target;
    var verseId = verseTarget.dataset.verseid;
    // log(verseId)
    if (e && !colorOpen) {
      colorOpen = true;
      scrollTo(e);
      $(verseTarget).css(borderBottom);
      openColorMenu();
    } else {
      colorOpen = false;
      openColorMenu();
      // $(verseTarget).css(borderBottom);
      // $(verseTarget).css("border-bottom", "none");
    }
  });
  function openColorMenu() {
    if (colorOpen) {
      colorMenu.show("slide", { direction: "down" }, 350);
    } else {
    }
  }
  colorCloseBtn.click((e) => {
    if (colorOpen) {
      colorMenu.hide("slide", { direction: "down" }, 350);
      colorOpen = false;
    }
  });
  function scrollTo(e) {
    $(".bible_read_body").animate(
      {
        scrollTop: $(e.target).offset().top - 230,
      },
      1000
    );
  }
  // openMenu()
  // end of doc ready
});
