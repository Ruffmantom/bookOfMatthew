// this file will hold font changing actions like
// - changing font
// - changing size
$(document).ready(() => {
  // on load font family for bible is font-family: Georgia, "Times New Roman", Times, serif;
  $(".bible_read_body").css(
    'font-family: Georgia, "Times New Roman", Times, serif;'
  );
  const fontList = [
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
    selectionName.text(fontList[0]);
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
      }
      // selectionName.css('font-family', `${font}`)
    });
  
    //----------------------------------
    //end of Document.ready
  });
  
// END script from github from other project

  // end of doc ready
});
