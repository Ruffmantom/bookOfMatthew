$(document).ready(() => {
  // get global variables
  const appTitleElm = $("#b_title");
  const appVersElm = $("#app_version");
  const appTypeElm = $("#b_type");
  const appBibleVersElm = $("#b_version");
  const appDateElm = $("#b_date");
  const appReadBodyElm = $(".b_verse_body");
  const appChapterElm = $("#b_chapter");
  // End get global variables
  // bring in global data variable
  var bData = bibleData;
  function createVerseLine(v, vNum, title) {
    console.log(vNum);
    console.log(v);
    return `${title ? `<p class="v_title">${title}</p>` : ""}
        <span class="v_para"><span class="v_num">${vNum}</span>${v}</span>`;
  }
  function loadBible() {
    appVersElm.text(`Version: ${bData.app_version}`);
    const loadedBible = bData.bibles[0];
    const loadedBook = loadedBible.books[0];
    const loadedChapter = loadedBook.book_name;
    const loadedChapterNum = loadedBook.chapters[0].chapter;
    const loadedVerses = loadedBook.chapters[0].verses;
    // set chapter elm
    appChapterElm.text(`The Book of ${loadedChapter}`);
    // map through loaded verses

    loadedVerses.map((v) => {
      let line = createVerseLine(v.paragraph, v.verse, v.title);
      appReadBodyElm.append(line);
      // appReadBodyElm.append(()=>(
      //     `
      //     <p>Verse Number: ${v.verse}</p>
      // `
      // ))
    });
  }
  loadBible();
  // end of doc ready
});
