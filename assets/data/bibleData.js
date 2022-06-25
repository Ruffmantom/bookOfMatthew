// for future use with Database
function createVerseId() {
  var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%";
  var id = "";
  for (let i = 0; i < 10 + 1; i++) {
    let b = s.split("");
    id += b[Math.floor(Math.random() * 68)];
  }
  return id;
}

// END for future use with Database
const bibleData = {
  app_version: "000.018",
  bibles: [
    {
      bible_type: "ESV",
      bible_id: "b_esv",
      bible_year: "2001 - 2022 Crossway",
      books: [
        // matthew
        {
          book_name: "Matthew",
          book_id: "esv-nt-matt",
          chapters: [
            {
              chapter: "1",
              chapter_id: "esv-nt-matt-1",
              verses: [
                {
                  _id: "esv-nt-matt-1-v1",
                  verse: "1",
                  new_para: true,
                  title: "The genealogy of Jesus Christ<br><br>",
                  paragraph:
                    "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.",
                },
                {
                  _id: "esv-nt-matt-1-v2",
                  verse: "2",
                  new_para: false,
                  title: "",
                  paragraph:
                    "Abraham was the father of Isaac, and Isaac the father of Jacob, and Jacob the father of Judah and his brothers, ",
                },
                {
                  _id: "esv-nt-matt-1-v3",
                  verse: "3",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Judah the father of Perez and Zerah by Tamar, and perez the father of Hezron the father of Ram, ",
                },
                {
                  _id: "esv-nt-matt-1-v4",
                  verse: "4",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Ram the father of Amminadab, and Amminadab the father of Nahshon, and Nahshon the father of Salmon, ",
                },
                {
                  _id: "esv-nt-matt-1-v5",
                  verse: "5",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Salmon the father of Boaz by Rahab, and Boaz the father of Obed by Ruth, and Obed the father of Jesse, ",
                },
                {
                  _id: "esv-nt-matt-1-v6",
                  verse: "6",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Jesse the father of David the king.<br>  &emsp;And David was the father of Solomon bu the wife of Uriah, ",
                },
                {
                  _id: "esv-nt-matt-1-v7",
                  verse: "7",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Solomon the father of Rehoboam, and Rehoboam the father of Abijah, and Abijah the father of Asaph, ",
                },
                {
                  _id: "esv-nt-matt-1-v8",
                  verse: "8",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Asaph the father of Jehoshaphat, and Jehoshaphat the father of Joram, and Joram the father of Uzziah, ",
                },
                {
                  _id: "esv-nt-matt-1-v9",
                  verse: "9",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Uzziah the father of Jotham, and Jotham the father of Ahaz, and Ahaz the father of Hezekiah, ",
                },
                {
                  _id: "esv-nt-matt-1-v10",
                  verse: "10",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Hezekiah the father of Manasseh, and Meanasseh the father of Amos, and Amos the father of Josiah, ",
                },
                {
                  _id: "esv-nt-matt-1-v11",
                  verse: "11",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Josiah the father of Jechoniah and his brothers, at the time of the eportation to Babylon.  <br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v12",
                  verse: "12",
                  new_para: true,
                  title: "",
                  paragraph:
                    "And after the deportation to Babylon: Jechoniah was the father of Shealtiel, and Shealtiel the father of Zerubbabel, ",
                },
                {
                  _id: "esv-nt-matt-1-v13",
                  verse: "13",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Zerubbabel the father of Abiud, and Abiud the father of Eliakim, and Eliakim the father of Azor,  ",
                },
                {
                  _id: "esv-nt-matt-1-v14",
                  verse: "14",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Azor the father of Zadok, and Zadok the father of Achim, and Achim the father of Eliud ",
                },
                {
                  _id: "esv-nt-matt-1-v15",
                  verse: "15",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Eliud the father of Eleazar, and Eleazar the father of Matthan, and Matthan the father of Jacob, ",
                },
                {
                  _id: "esv-nt-matt-1-v16",
                  verse: "16",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Jacob the father of Joseph the husband of Mary, of whom Jesus was born, who is called Christ.",
                },
                {
                  _id: "esv-nt-matt-1-v17",
                  verse: "17",
                  new_para: false,
                  title: "",
                  paragraph:
                    "So all the generations from Abraham to David were fourteen generathions, and from David to the deportation to Babulon fourteen generations, and from the deportations to Babulon to the Christ fourteen generations.<br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v18",
                  verse: "18",
                  new_para: true,
                  title: "The birth of Jesus Christ<br><br>",
                  paragraph:
                    "Now the birth of Jesus Christ took place in this way.  When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit.",
                },
                {
                  _id: "esv-nt-matt-1-v19",
                  verse: "19",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And her husband Joseph, being a just man and unwilling to put her to shame, resolved to divorxe her quietly.",
                },
                {
                  _id: "esv-nt-matt-1-v20",
                  verse: "20",
                  new_para: false,
                  title: "",
                  paragraph:
                    'But as he considered these things, behold, an angel of the Lord appeared to him in a dream, saying, "Joseph, son of David, do not fear the take Mary as your wife, for that which is conceived in her is from the Holy Spirit.',
                },
                {
                  _id: "esv-nt-matt-1-v21",
                  verse: "21",
                  new_para: false,
                  title: "",
                  paragraph:
                    'She will bear a son, and you shall call his name Jesus, for he will save his prople from their sins."',
                },
                {
                  _id: "esv-nt-matt-1-v22",
                  verse: "22",
                  new_para: false,
                  title: "",
                  paragraph:
                    "All this took place to fulfill what the Lord had spoken bu the prophet:<br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v23",
                  verse: "23",
                  new_para: false,
                  title: "",
                  paragraph:
                    '"Behold, the virgin shall conceive and bear a son,<br>and they shall call his name Immanuel"<br> (which means, God with us).<br><br>',
                },
                {
                  _id: "esv-nt-matt-1-v24",
                  verse: "24",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When Joseph woke from sleep, he did as the angel of the Lord commanded him: he took his wife,",
                },
                {
                  _id: "esv-nt-matt-1-v25",
                  verse: "25",
                  new_para: false,
                  title: "",
                  title: "",
                  paragraph:
                    "but knew her not untill she had given birth to a son.  And he called his name Jesus.",
                },
              ],
            },
            {
              chapter: "2",
              chapter_id: "esv-nt-matt-2",
              verses: [
                {
                  _id: "esv-nt-matt-2-v1",
                  verse: "1",
                  new_para: true, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: "The Visit of the Wise Men<br><br>", //titles get <br><br> after them - might need to add that in the JS
                  paragraph:
                    "Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem,",
                },
                {
                  _id: "esv-nt-matt-2-v2",
                  verse: "2",
                  new_para: false,
                  title: "",
                  paragraph:
                    "saying, “Where is he who has been born king of the Jews? For we saw his star when it rose and have come to worship him.”",
                },
                {
                  _id: "esv-nt-matt-2-v3",
                  verse: "3",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When Herod the king heard this, he was troubled, and all Jerusalem with him;",
                },
                {
                  _id: "esv-nt-matt-2-v4",
                  verse: "4",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and assembling all the chief prises and scribes of the people, he inquired of them where the Christ was to be born.",
                },
                {
                  _id: "esv-nt-matt-2-v5",
                  verse: "5",
                  new_para: false,
                  title: "",
                  paragraph:
                    "They told him, “In Bethlehem of Judea for so it is written by the prophet:",
                },
                {
                  _id: "esv-nt-matt-2-v6",
                  verse: "6",
                  new_para: true,
                  title: "",
                  paragraph:
                    "“‘And you, O Bethlehem, in the land of Judah,<br>are by no means least among the rulers of Judah;<br>for from you shall come a ruler<br>who will shepherd my people Israel.’”",
                },
                {
                  _id: "esv-nt-matt-2-v7",
                  verse: "7",
                  new_para: true,
                  title: "",
                  paragraph:
                    "Then Herod summoned the wise men secretly and ascertained from them what time the star had appeared.",
                },
                {
                  _id: "esv-nt-matt-2-v8",
                  verse: "8",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and he sent them to the Bethlehem, saying, “Go and search diligently for the child. And when you have found him, bring me word, that I too may come and worship him.”",
                },
                {
                  _id: "esv-nt-matt-2-v9",
                  verse: "9",
                  new_para: false,
                  title: "",
                  paragraph:
                    "after listening to the king, they went on their way. And behold, the star that they had seen when it rose went before them until it came to rest over the place where the child was.",
                },
                {
                  _id: "esv-nt-matt-2-v10",
                  verse: "10",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When they saw the star, they rejoiced exceedingly with great joy.",
                },
                {
                  _id: "esv-nt-matt-2-v11",
                  verse: "11",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.",
                },
                {
                  _id: "esv-nt-matt-2-v12",
                  verse: "12",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And being warned in a dream not to return to Herod, they departed to their own country by another way.",
                },
                {
                  _id: "esv-nt-matt-2-v13",
                  verse: "13",
                  new_para: true,
                  title: "The Flight to Egypt",
                  paragraph:
                    "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, “Rise, take the child and his mother, and flee to Egypt, and remain there until I tell you, for Herod is about to search for the child, to destroy him.”",
                },
                {
                  _id: "esv-nt-matt-2-v14",
                  verse: "14",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And he rose and took the child and his mother by night and departed to Egypt",
                },
                {
                  _id: "esv-nt-matt-2-v15",
                  verse: "15",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And remained there until the death of Herod. This was to fulfill what the Lord had spoken by the prophet, “Out of Egypt I called my son.”",
                },
                {
                  _id: "esv-nt-matt-2-v16",
                  verse: "16",
                  new_para: true,
                  title: "Herod Kills the Children",
                  paragraph:
                    "Then Herod, when he saw that he had been tricked by the wise men, became furious, and he sent and killed all the male children in Bethlehem and in all that region who were two years old or under, according to the time that he had ascertained from the wise men,",
                },
                {
                  _id: "esv-nt-matt-2-v17",
                  verse: "17",
                  new_para: false,
                  title: "",
                  paragraph:
                    "Then was fulfilled what was spoken bu the prophet Jeremiah:<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v18",
                  verse: "18",
                  new_para: true,
                  title: "",
                  paragraph:
                    "“A voice was heard in Ramah,<br>weeping and loud lamentation,<br>Rachel weeping for her children;<br>she refused to be comforted, because they are no more.”<br>",
                },
                {
                  _id: "esv-nt-matt-2-v19",
                  verse: "19",
                  new_para: true,
                  title: "The Return to Nazareth",
                  paragraph:
                    "But when Herod died, behold, an angel of the Lord appeared in a dream to Joseph in Egypt,",
                },
                {
                  _id: "esv-nt-matt-2-v20",
                  verse: "20",
                  new_para: false,
                  title: "",
                  paragraph:
                    "saying, “Rise, take the child and his mother and go to the land of Israel, for those who sought the shield’s life are dead.”",
                },
                {
                  _id: "esv-nt-matt-2-v21",
                  verse: "21",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And he rose and took the child and his mother and went to the land of Israel.",
                },
                {
                  _id: "esv-nt-matt-2-v22",
                  verse: "22",
                  new_para: false,
                  title: "",
                  paragraph:
                    "But when he heard that Archelaus was reigning over Judea in place of his father Herod, he was afraid to go there, and being warned in a dream he withdrew to the district of Galilee.",
                },
                {
                  _id: "esv-nt-matt-2-v23",
                  verse: "23",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And he went and lived in a city called Nazarene, so that what was spoken by the prophets might be fulfilled, that he would be called a Nazarene.",
                },
              ],
            },
            {
              chapter: "3",
              chapter_id: "esv-nt-matt-3",
              verses: [],
            },
            {
              chapter: "4",
              chapter_id: "esv-nt-matt-4",
              verses: [],
            },
            {
              chapter: "5",
              chapter_id: "esv-nt-matt-5",
              verses: [],
            },
            {
              chapter: "6",
              chapter_id: "esv-nt-matt-6",
              verses: [],
            },
            {
              chapter: "7",
              chapter_id: "esv-nt-matt-7",
              verses: [],
            },
            {
              chapter: "8",
              chapter_id: "esv-nt-matt-8",
              verses: [],
            },
            {
              chapter: "9",
              chapter_id: "esv-nt-matt-9",
              verses: [],
            },
            {
              chapter: "10",
              chapter_id: "esv-nt-matt-10",
              verses: [],
            },
            {
              chapter: "11",
              chapter_id: "esv-nt-matt-11",
              verses: [],
            },
            {
              chapter: "12",
              chapter_id: "esv-nt-matt-12",
              verses: [],
            },
            {
              chapter: "13",
              chapter_id: "esv-nt-matt-13",
              verses: [],
            },
            {
              chapter: "14",
              chapter_id: "esv-nt-matt-14",
              verses: [],
            },
            {
              chapter: "15",
              chapter_id: "esv-nt-matt-15",
              verses: [],
            },
            {
              chapter: "16",
              chapter_id: "esv-nt-matt-16",
              verses: [],
            },
            {
              chapter: "17",
              chapter_id: "esv-nt-matt-17",
              verses: [],
            },
            {
              chapter: "18",
              chapter_id: "esv-nt-matt-18",
              verses: [],
            },
            {
              chapter: "19",
              chapter_id: "esv-nt-matt-19",
              verses: [],
            },
            {
              chapter: "20",
              chapter_id: "esv-nt-matt-20",
              verses: [],
            },
            {
              chapter: "21",
              chapter_id: "esv-nt-matt-21",
              verses: [],
            },
            {
              chapter: "22",
              chapter_id: "esv-nt-matt-22",
              verses: [],
            },
            {
              chapter: "23",
              chapter_id: "esv-nt-matt-23",
              verses: [],
            },
            {
              chapter: "24",
              chapter_id: "esv-nt-matt-24",
              verses: [],
            },
            {
              chapter: "25",
              chapter_id: "esv-nt-matt-25",
              verses: [],
            },
            {
              chapter: "26",
              chapter_id: "esv-nt-matt-26",
              verses: [],
            },
            {
              chapter: "27",
              chapter_id: "esv-nt-matt-27",
              verses: [],
            },
            {
              chapter: "28",
              chapter_id: "esv-nt-matt-28",
              verses: [],
            },
          ],
        },
        // adding mark
        {
          book_name: "Mark",
          book_id: "esv-nt-mark",
          chapters: [
            {
              chapter: "1",
              chapter_id: "esv-nt-mark-1",
              verses: [],
            },
            {
              chapter: "2",
              chapter_id: "esv-nt-mark-2",
              verses: [],
            },
            {
              chapter: "3",
              chapter_id: "esv-nt-mark-3",
              verses: [],
            },
            {
              chapter: "4",
              chapter_id: "esv-nt-mark-4",
              verses: [],
            },
            {
              chapter: "5",
              chapter_id: "esv-nt-mark-5",
              verses: [],
            },
            {
              chapter: "6",
              chapter_id: "esv-nt-mark-6",
              verses: [],
            },
            {
              chapter: "7",
              chapter_id: "esv-nt-mark-7",
              verses: [],
            },
            {
              chapter: "8",
              chapter_id: "esv-nt-mark-8",
              verses: [],
            },
            {
              chapter: "9",
              chapter_id: "esv-nt-mark-9",
              verses: [],
            },
            {
              chapter: "10",
              chapter_id: "esv-nt-mark-10",
              verses: [],
            },
            {
              chapter: "11",
              chapter_id: "esv-nt-mark-11",
              verses: [],
            },
            {
              chapter: "12",
              chapter_id: "esv-nt-mark-12",
              verses: [],
            },
            {
              chapter: "13",
              chapter_id: "esv-nt-mark-13",
              verses: [],
            },
            {
              chapter: "14",
              chapter_id: "esv-nt-mark-14",
              verses: [],
            },
            {
              chapter: "15",
              chapter_id: "esv-nt-mark-15",
              verses: [],
            },
            {
              chapter: "16",
              chapter_id: "esv-nt-mark-16",
              verses: [],
            },
          ],
        }, //adding luke
        {
          book_name: "Luke",
          book_id: "esv-nt-luke",
          chapters: [
            {
              chapter: "1",
              chapter_id: "esv-nt-luke-1",
              verses: [],
            },
            {
              chapter: "2",
              chapter_id: "esv-nt-luke-2",
              verses: [],
            },
            {
              chapter: "3",
              chapter_id: "esv-nt-luke-3",
              verses: [],
            },
            {
              chapter: "4",
              chapter_id: "esv-nt-luke-4",
              verses: [],
            },
            {
              chapter: "5",
              chapter_id: "esv-nt-luke-5",
              verses: [],
            },
            {
              chapter: "6",
              chapter_id: "esv-nt-luke-6",
              verses: [],
            },
            {
              chapter: "7",
              chapter_id: "esv-nt-luke-7",
              verses: [],
            },
            {
              chapter: "8",
              chapter_id: "esv-nt-luke-8",
              verses: [],
            },
            {
              chapter: "9",
              chapter_id: "esv-nt-luke-9",
              verses: [],
            },
            {
              chapter: "10",
              chapter_id: "esv-nt-luke-10",
              verses: [],
            },
            {
              chapter: "11",
              chapter_id: "esv-nt-luke-11",
              verses: [],
            },
            {
              chapter: "12",
              chapter_id: "esv-nt-luke-12",
              verses: [],
            },
            {
              chapter: "13",
              chapter_id: "esv-nt-luke-13",
              verses: [],
            },
            {
              chapter: "14",
              chapter_id: "esv-nt-luke-14",
              verses: [],
            },
            {
              chapter: "15",
              chapter_id: "esv-nt-luke-15",
              verses: [],
            },
            {
              chapter: "16",
              chapter_id: "esv-nt-luke-16",
              verses: [],
            },
            {
              chapter: "17",
              chapter_id: "esv-nt-matt-17",
              verses: [],
            },
            {
              chapter: "18",
              chapter_id: "esv-nt-matt-18",
              verses: [],
            },
            {
              chapter: "19",
              chapter_id: "esv-nt-matt-19",
              verses: [],
            },
            {
              chapter: "20",
              chapter_id: "esv-nt-matt-20",
              verses: [],
            },
            {
              chapter: "21",
              chapter_id: "esv-nt-matt-21",
              verses: [],
            },
            {
              chapter: "22",
              chapter_id: "esv-nt-matt-22",
              verses: [],
            },
            {
              chapter: "23",
              chapter_id: "esv-nt-matt-23",
              verses: [],
            },
            {
              chapter: "24",
              chapter_id: "esv-nt-matt-24",
              verses: [],
            },
          ],
        },
        {
          book_name: "John",
          book_id: "esv-nt-john",
          chapters: [
            {
              chapter: "1",
              chapter_id: "esv-nt-john-1",
              verses: [],
            },
            {
              chapter: "2",
              chapter_id: "esv-nt-john-2",
              verses: [],
            },
            {
              chapter: "3",
              chapter_id: "esv-nt-john-3",
              verses: [],
            },
            {
              chapter: "4",
              chapter_id: "esv-nt-john-4",
              verses: [],
            },
            {
              chapter: "5",
              chapter_id: "esv-nt-john-5",
              verses: [],
            },
            {
              chapter: "6",
              chapter_id: "esv-nt-john-6",
              verses: [],
            },
            {
              chapter: "7",
              chapter_id: "esv-nt-john-7",
              verses: [],
            },
            {
              chapter: "8",
              chapter_id: "esv-nt-john-8",
              verses: [],
            },
            {
              chapter: "9",
              chapter_id: "esv-nt-john-9",
              verses: [],
            },
            {
              chapter: "10",
              chapter_id: "esv-nt-john-10",
              verses: [],
            },
            {
              chapter: "11",
              chapter_id: "esv-nt-john-11",
              verses: [],
            },
            {
              chapter: "12",
              chapter_id: "esv-nt-john-12",
              verses: [],
            },
            {
              chapter: "13",
              chapter_id: "esv-nt-john-13",
              verses: [],
            },
            {
              chapter: "14",
              chapter_id: "esv-nt-john-14",
              verses: [],
            },
            {
              chapter: "15",
              chapter_id: "esv-nt-john-15",
              verses: [],
            },
            {
              chapter: "16",
              chapter_id: "esv-nt-john-16",
              verses: [],
            },
            {
              chapter: "17",
              chapter_id: "esv-nt-john-17",
              verses: [],
            },
            {
              chapter: "18",
              chapter_id: "esv-nt-john-18",
              verses: [],
            },
            {
              chapter: "19",
              chapter_id: "esv-nt-john-19",
              verses: [],
            },
            {
              chapter: "20",
              chapter_id: "esv-nt-john-20",
              verses: [],
            },
            {
              chapter: "21",
              chapter_id: "esv-nt-john-21",
              verses: [],
            },
          ],
        },
      ],
    }, // new bible version here
  ],
};
