// for future use with Database
function createVerseId() {
  var s = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%`;
  var id = ``;
  for (let i = 0; i < 10 + 1; i++) {
    let b = s.split(``);
    id += b[Math.floor(Math.random() * 68)];
  }
  return id;
}
// Need to do some HTML encoding
// Double quotes = &#8220; &#8221; = ""
// Single quotes = &#8216; &#8217; = ''

// END for future use with Database
const bibleData = {
  app_version: `000.020`,
  bibles: [
    {
      bible_type: `ESV`,
      bible_id: `b_esv`,
      bible_year: `2001 – 2022 Crossway ©`,
      books: [
        // matthew
        {
          book_name: `Matthew`,
          book_id: `esv-nt-matt`,
          chapters: [
            {
              chapter: `1`,
              chapter_id: `esv-nt-matt-1`,
              verses: [
                {
                  _id: `esv-nt-matt-1-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The genealogy of Jesus Christ`,
                  paragraph: `The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.`,
                },
                {
                  _id: `esv-nt-matt-1-v2`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Abraham was the father of Isaac, and Isaac the father of Jacob, and Jacob the father of Judah and his brothers, `,
                },
                {
                  _id: `esv-nt-matt-1-v3`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Judah the father of Perez and Zerah by Tamar, and perez the father of Hezron the father of Ram, `,
                },
                {
                  _id: `esv-nt-matt-1-v4`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Ram the father of Amminadab, and Amminadab the father of Nahshon, and Nahshon the father of Salmon, `,
                },
                {
                  _id: `esv-nt-matt-1-v5`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Salmon the father of Boaz by Rahab, and Boaz the father of Obed by Ruth, and Obed the father of Jesse, `,
                },
                {
                  _id: `esv-nt-matt-1-v6`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Jesse the father of David the king.<br>  &emsp;And David was the father of Solomon bu the wife of Uriah, `,
                },
                {
                  _id: `esv-nt-matt-1-v7`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Solomon the father of Rehoboam, and Rehoboam the father of Abijah, and Abijah the father of Asaph, `,
                },
                {
                  _id: `esv-nt-matt-1-v8`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Asaph the father of Jehoshaphat, and Jehoshaphat the father of Joram, and Joram the father of Uzziah, `,
                },
                {
                  _id: `esv-nt-matt-1-v9`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Uzziah the father of Jotham, and Jotham the father of Ahaz, and Ahaz the father of Hezekiah, `,
                },
                {
                  _id: `esv-nt-matt-1-v10`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Hezekiah the father of Manasseh, and Meanasseh the father of Amos, and Amos the father of Josiah, `,
                },
                {
                  _id: `esv-nt-matt-1-v11`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Josiah the father of Jechoniah and his brothers, at the time of the eportation to Babylon.  `,
                },
                {
                  _id: `esv-nt-matt-1-v12`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And after the deportation to Babylon: Jechoniah was the father of Shealtiel, and Shealtiel the father of Zerubbabel, `,
                },
                {
                  _id: `esv-nt-matt-1-v13`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Zerubbabel the father of Abiud, and Abiud the father of Eliakim, and Eliakim the father of Azor,  `,
                },
                {
                  _id: `esv-nt-matt-1-v14`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Azor the father of Zadok, and Zadok the father of Achim, and Achim the father of Eliud `,
                },
                {
                  _id: `esv-nt-matt-1-v15`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Eliud the father of Eleazar, and Eleazar the father of Matthan, and Matthan the father of Jacob, `,
                },
                {
                  _id: `esv-nt-matt-1-v16`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and Jacob the father of Joseph the husband of Mary, of whom Jesus was born, who is called Christ.`,
                },
                {
                  _id: `esv-nt-matt-1-v17`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `So all the generations from Abraham to David were fourteen generathions, and from David to the deportation to Babulon fourteen generations, and from the deportations to Babulon to the Christ fourteen generations.`,
                },
                {
                  _id: `esv-nt-matt-1-v18`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The birth of Jesus Christ`,
                  paragraph: `Now the birth of Jesus Christ took place in this way.  When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit.`,
                },
                {
                  _id: `esv-nt-matt-1-v19`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And her husband Joseph, being a just man and unwilling to put her to shame, resolved to divorxe her quietly.`,
                },
                {
                  _id: `esv-nt-matt-1-v20`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But as he considered these things, behold, an angel of the Lord appeared to him in a dream, saying, &#8220;Joseph, son of David, do not fear the take Mary as your wife, for that which is conceived in her is from the Holy Spirit.`,
                },
                {
                  _id: `esv-nt-matt-1-v21`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `She will bear a son, and you shall call his name Jesus, for he will save his prople from their sins.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-1-v22`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `All this took place to fulfill what the Lord had spoken bu the prophet:`,
                },
                {
                  _id: `esv-nt-matt-1-v23`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `&#8220;Behold, the virgin shall conceive and bear a son,<br>and they shall call his name Immanuel&#8221;<br> (which means, God with us).`,
                },
                {
                  _id: `esv-nt-matt-1-v24`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `When Joseph woke from sleep, he did as the angel of the Lord commanded him: he took his wife,`,
                },
                {
                  _id: `esv-nt-matt-1-v25`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `but knew her not untill she had given birth to a son.  And he called his name Jesus.`,
                },
              ],
            },
            {
              chapter: `2`,
              chapter_id: `esv-nt-matt-2`,
              verses: [
                {
                  _id: `esv-nt-matt-2-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Visit of the Wise Men`,
                  paragraph: `Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem,`,
                },
                {
                  _id: `esv-nt-matt-2-v2`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `saying, &#8220;Where is he who has been born king of the Jews? For we saw his star when it rose and have come to worship him.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v3`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `When Herod the king heard this, he was troubled, and all Jerusalem with him;`,
                },
                {
                  _id: `esv-nt-matt-2-v4`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and assembling all the chief prises and scribes of the people, he inquired of them where the Christ was to be born.`,
                },
                {
                  _id: `esv-nt-matt-2-v5`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `They told him, &#8220;In Bethlehem of Judea for so it is written by the prophet:`,
                },
                {
                  _id: `esv-nt-matt-2-v6`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `&#8220;&#8216;And you, O Bethlehem, in the land of Judah,<br>
                    are by no means least among the rulers of Judah;<br>
                    for from you shall come a ruler<br>
                    who will qshepherd my people Israel.&#8216;&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v7`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Then Herod summoned the wise men secretly and ascertained from them what time the star had appeared.`,
                },
                {
                  _id: `esv-nt-matt-2-v8`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and he sent them to the Bethlehem, saying, &#8220;Go and search diligently for the child. And when you have found him, bring me word, that I too may come and worship him.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v9`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `after listening to the king, they went on their way. And behold, the star that they had seen when it rose went before them until it came to rest over the place where the child was.`,
                },
                {
                  _id: `esv-nt-matt-2-v10`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `When they saw the star, they rejoiced exceedingly with great joy.`,
                },
                {
                  _id: `esv-nt-matt-2-v11`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.`,
                },
                {
                  _id: `esv-nt-matt-2-v12`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And being warned in a dream not to return to Herod, they departed to their own country by another way.`,
                },
                {
                  _id: `esv-nt-matt-2-v13`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Flight to Egypt`,
                  paragraph: `Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, &#8220;Rise, take the child and his mother, and flee to Egypt, and remain there until I tell you, for Herod is about to search for the child, to destroy him.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v14`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And he rose and took the child and his mother by night and departed to Egypt`,
                },
                {
                  _id: `esv-nt-matt-2-v15`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And remained there until the death of Herod. This was to fulfill what the Lord had spoken by the prophet, &#8220;Out of Egypt I called my son.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v16`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Herod Kills the Children`,
                  paragraph: `Then Herod, when he saw that he had been tricked by the wise men, became furious, and he sent and killed all the male children in Bethlehem and in all that region who were two years old or under, according to the time that he had ascertained from the wise men,`,
                },
                {
                  _id: `esv-nt-matt-2-v17`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `Then was fulfilled what was spoken bu the prophet Jeremiah:`,
                },
                {
                  _id: `esv-nt-matt-2-v18`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `&#8220;A voice was heard in Ramah,<br>weeping and loud lamentation,<br>Rachel weeping for her children;<br>she refused to be comforted, because they are no more.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v19`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Return to Nazareth`,
                  paragraph: `But when Herod died, behold, an angel of the Lord appeared in a dream to Joseph in Egypt,`,
                },
                {
                  _id: `esv-nt-matt-2-v20`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `saying, &#8220;Rise, take the child and his mother and go to the land of Israel, for those who sought the shield&#8216;s life are dead.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-2-v21`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And he rose and took the child and his mother and went to the land of Israel.`,
                },
                {
                  _id: `esv-nt-matt-2-v22`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But when he heard that Archelaus was reigning over Judea in place of his father Herod, he was afraid to go there, and being warned in a dream he withdrew to the district of Galilee.`,
                },
                {
                  _id: `esv-nt-matt-2-v23`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And he went and lived in a city called Nazarene, so that what was spoken by the prophets might be fulfilled, that he would be called a Nazarene.`,
                },
              ],
            },
            {
              chapter: `3`,
              chapter_id: `esv-nt-matt-3`,
              verses: [
                {
                  _id: `esv-nt-matt-3-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `John the Baptist Prepares the Way`,
                  paragraph: `In those days John the Baptist came preaching in the wilderness of Judea,`,
                },
                {
                  _id: `esv-nt-matt-3-v2`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Repent, for the kingdom of heaven is at hand.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-3-v3`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `For this is he who was spoken of by the prophet Isaiah when he said,<br><br>&#8220;The voice of one crying in the wilderness:<br>
                    &#8216;Prepare the way of the Lord;<br>
                    make his paths straight.&#8216;&#8221;`,
                },
                {
                  _id: `esv-nt-matt-3-v4`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Now John wore a garment of camel&#8216;s hair and a leather belt around his waist, and his food was locusts and wild honey.`,
                },
                {
                  _id: `esv-nt-matt-3-v5`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Then Jerusalem and all Judea and all the region about the Jordan were going out to him,`,
                },
                {
                  _id: `esv-nt-matt-3-v6`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and they were baptized by him in the river Jordan, confessing their sins.`,
                },
                {
                  _id: `esv-nt-matt-3-v7`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But when he saw many of the Pharisees and Sadducees coming to his baptism, he said to them, &#8220;You brood of vipers! Who warned you to flee from the wrath to come?`,
                },
                {
                  _id: `esv-nt-matt-3-v8`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Bear fruit in keeping with repentance.`,
                },
                {
                  _id: `esv-nt-matt-3-v9`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And do not presume to say to youselves, &#8216;We have Abraham as our father&#8217;, for I tell you, God is able from these stones to raise up children from Abraham.`,
                },
                {
                  _id: `esv-nt-matt-3-v10`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Even now the axe is laid to the root of the trees. Every tree therefore that does not bear good fruit is cut down and thrown into the fire.<br>`,
                },
                {
                  _id: `esv-nt-matt-3-v11`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;I baptize you with water for repentance, but he who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-3-v12`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `His winnowing fork is in his hand, and he will clear his threshing floor and gather hiswheat into the barn, but the chaff he will burn with unquenchable fire.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-3-v13`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Baptism of Jesus`,
                  paragraph: `Then Jesus came from Galilee to the Jordan to John, to be baptized by him.`,
                },
                {
                  _id: `esv-nt-matt-3-v14`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `John would have prevented him, saying, &#8220;I need to be baptized by you, and do you come to me?&#8221;`,
                },
                {
                  _id: `esv-nt-matt-3-v15`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But Jesus answered him, Let it be so now, for thus it is fitting for us to fulfill all righteousness.&#8221; Then he consented.`,
                },
                {
                  _id: `esv-nt-matt-3-v16`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And when Jesus was baptized, immediately he went up from the water, and behold, the heavens were opened to him, and he saw the Spirit of God descending like a dove and coming to rest on him;`,
                },
                {
                  _id: `esv-nt-matt-3-v17`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `and behold, a voice from heaven said, &#8220;This is my beloved Son, with whom I am well pleased.&#8221;`,
                },
              ],
            },
            {
              chapter: `4`,
              chapter_id: `esv-nt-matt-4`,
              verses: [
                {
                  _id: `esv-nt-matt-4-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Temptation of Jesus`,
                  paragraph: `Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil.`,
                },
                {
                  _id: `esv-nt-matt-4-v2`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And after fasting forty days and forty nights, he was hungry.`,
                },
                {
                  _id: `esv-nt-matt-4-v3`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And the tempter came and said to him, &#8220;if you are the Son of God, command these stones to become loaves of bread.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v4`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But he answered, &#8220;It is written, <br><br> &#8220; &#8216;Man shall not live by bread alone,<br>but by every word that comes from the mouth of God.&#8217;&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v5`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Then the devil took him to the holy city and set him on the pinnacle of the temple`,
                },
                {
                  _id: `esv-nt-matt-4-v6`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `and said to him, &#8220;If you are the Son of God, throw yourself down, for it is written,<br><br>&#8220;&#8216;He will command his angels concerning you,&#8217;<br><br>and<br><br> &#8220;&#8216;On their hands they will bear you up,<br>lest you strike your foot against a stone.&#8217;&#8221;<br>`,
                },
                {
                  _id: `esv-nt-matt-4-v7`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Jesus said to him, &#8220;Again it is written, &#8216;You shall not put the Lord your God to the test.&#8217;&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v8`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Again, the devil took him to a very high mountain and showed him all the kingdoms of the world and their glory.`,
                },
                {
                  _id: `esv-nt-matt-4-v9`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And he said to him, &#8220;All these I will give you, if you will fall down and worship me.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v10`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `Then Jesus said to him, &#8220;Be gone, Satan! For it is written,<br><br>&#8221;&#8216;You shall worship the Lord your God<br>and him only shall you serve.&#8217;&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v11`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Then the devil left him, and behold, angels came and were ministering to him.`,
                },
                {
                  _id: `esv-nt-matt-4-v12`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Jesus Begins His Ministry`,
                  paragraph: `Now when he heard that John had been arrested, he withdrew into Galilee.`,
                },
                {
                  _id: `esv-nt-matt-4-v13`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And leaving Nazareth he went and lived in Capernaum by the sea, in the territory of Zebulun and Naphtali,`,
                },
                {
                  _id: `esv-nt-matt-4-v14`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `so that what was spoken by the prophet Isaiah might be fulfilled:`,
                },
                {
                  _id: `esv-nt-matt-4-v15`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;The land of Zebulun and the land of Naphtali,<br>the way of the sea, beyond the Jordan, Galilee of the Gentiles--`,
                },
                {
                  _id: `esv-nt-matt-4-v16`,

                  tab: true,
                  beg_break: true,
                  end_break: false,
                  gap: true,
                  title: ``,
                  paragraph: `the people dwelling in darkness<br>have seen a great light,<br>and for those dwelling in the region and shadow of death,<br>on them a light has dawned.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v17`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `From that time Jesus began to preach, saying, &#8220;Repent, for the kindom of heaven is at hand.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v18`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Jesus Calls the First Disciples`,
                  paragraph: `While walking by the Sea of Galilee, he saw two brothers, Simon (who is called Peter) and Andrew his brother, casting a net into the sea, for they were fishermen.`,
                },
                {
                  _id: `esv-nt-matt-4-v19`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And he said to them, &#8220;Follow me, and I will make you fishers of men.&#8221;`,
                },
                {
                  _id: `esv-nt-matt-4-v20`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Immediately they left their nets and followed him.`,
                },
                {
                  _id: `esv-nt-matt-4-v21`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And going on from there he saw two other brothers, James the son of Zebedee and John his brother, in the boat with Zebedee their father, mending their nets, and he called them.`,
                },
                {
                  _id: `esv-nt-matt-4-v22`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Immediately they left the boat and their father and followed him.`,
                },
                {
                  _id: `esv-nt-matt-4-v23`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Jesus Ministers to Great Crowds`,
                  paragraph: `And he went throughout all Galilee, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction among the people.`,
                },
                {
                  _id: `esv-nt-matt-4-v24`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `So his fame spread throughout all Syria, and they brought him all the sick, those afflicted with various diseases and pains, those oppressed by demons, those having seizures, and paralytics, and he healed them.`,
                },
                {
                  _id: `esv-nt-matt-4-v25`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And great crowds followed him from Galilee and the Decapolis, and from Jerusalem and Judea, and from beyond the Jordan.`,
                },
              ],
            },
            {
              chapter: `5`,
              chapter_id: `esv-nt-matt-5`,
              verses: [
                {
                  _id: `esv-nt-matt-5-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Sermon on the Mount`,
                  paragraph: `Seeing the crowds, he went up on the mountain, and when he sat down, his disciples came to him.`,
                },
                {
                  _id: `esv-nt-matt-5-v2`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `The Beatitudes`,
                  paragraph: `And he opened his mouth and taught them, saying:`,
                },
                {
                  _id: `esv-nt-matt-5-v3`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are the poor in spirit, for theirs is the kingdom of heaven.`,
                },
                {
                  _id: `esv-nt-matt-5-v4`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are those who mourn, for they shall e comforted.`,
                },
                {
                  _id: `esv-nt-matt-5-v5`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are the meek, for they shall inherit the earth.`,
                },
                {
                  _id: `esv-nt-matt-5-v6`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.`,
                },
                {
                  _id: `esv-nt-matt-5-v7`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are the merciful, for they shall receive mercy.`,
                },
                {
                  _id: `esv-nt-matt-5-v8`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are the pure in heart, for they shall see God.`,
                },
                {
                  _id: `esv-nt-matt-5-v9`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are the peacemakers, for they shall be called sons of God.`,
                },
                {
                  _id: `esv-nt-matt-5-v10`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are those who are persecuted for righteousness&#8216; sake, for theirs is the kingdom of heaven.`,
                },
                {
                  _id: `esv-nt-matt-5-v11`,

                  tab: false,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account.`,
                },
                {
                  _id: `esv-nt-matt-5-v12`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.`,
                },
                {
                  _id: `esv-nt-matt-5-v13`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Salt and Light`,
                  paragraph: `&#8220;You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored? It is no longer good for anything except to be thrown out and trampled under people&#8216;s feet.`,
                },
                {
                  _id: `esv-nt-matt-5-v14`,

                  tab: true,
                  beg_break: true,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;You are the light of the world. A city set on a hill cannot be hidden.`,
                },
                {
                  _id: `esv-nt-matt-5-v15`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `&#8220;Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house.`,
                },
                {
                  _id: `esv-nt-matt-5-v16`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.`,
                },
                {
                  _id: `esv-nt-matt-5-v17`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Christ Came to Fulfill the Law`,
                  paragraph: `&#8220;Do not think that I have come to abolish the Law of the Prophets; I have not come to abolish them but to fulfill them`,
                },
                {
                  _id: `esv-nt-matt-5-v18`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `For truly, I say to you, until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished.`,
                },
                {
                  _id: `esv-nt-matt-5-v19`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Therefore whoever relaxes one of the least of these commandments and teaches others to do the same will be called least in the kingdom of heaven, but whoever does them and teaches hem will be called great in the kingdom of heaven.`,
                },
                {
                  _id: `esv-nt-matt-5-v20`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `For I tell you, unless your righteousness exceeds that of the scribes and Pharisees, you will never enter the kingdom of heaven.`,
                },
                {
                  _id: `esv-nt-matt-5-v21`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Anger`,
                  paragraph: `&#8220;You have herd that it was said to those of old, &#8216;You shall not murder, and whoever murders will be liable to judgment.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v22`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you that everyone who is angry with his brother will be liable to judgment; whoever insults his brother will be liable to the council; and whoever says, &#8216;You Fool!&#8216; will be liable to the hell of fire.`,
                },
                {
                  _id: `esv-nt-matt-5-v23`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `So if you are offering a gift at the altar and there remember that your brother has something against you,`,
                },
                {
                  _id: `esv-nt-matt-5-v24`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `leave your gift there before the altar and go. First be reconciled to your brother, and then come and then come and offer your gift.`,
                },
                {
                  _id: `esv-nt-matt-5-v25`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Come to terms quickly with your accuser while you are going with him to court, lest your accuser hand you over to the judge, and the judge to the guard, and you be put in prison.`,
                },
                {
                  _id: `esv-nt-matt-5-v26`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Truly, I say to you, you will never get out until you have paid the last penny.`,
                },
                {
                  _id: `esv-nt-matt-5-v27`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Lust`,
                  paragraph: `&#8220;You have herd that it was said, &#8216;You shall not commit adultery.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v28`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart.`,
                },
                {
                  _id: `esv-nt-matt-5-v29`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `If your right eye causes you to sin, tear it out and throw it away. For it is better that you lose one of your members than that your whole body be thrown into hell.`,
                },
                {
                  _id: `esv-nt-matt-5-v30`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And if your right hand causes you to sin, cut it off and throw it away. For it is better that you lose one of your members than that your whole body go into hell.`,
                },
                {
                  _id: `esv-nt-matt-5-v31`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Divorce`,
                  paragraph: `&#8220;it was also said, &#8216;Whoever diverse his wife, let him give her a certificate of diverse.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v32`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you that everyone who diverse his wife, except on the ground of sexual immorality, makes her commit adultery, and whoever marries a divorced woman commits adultery.`,
                },
                {
                  _id: `esv-nt-matt-5-v33`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Oaths`,
                  paragraph: `&#8220;Again you have herd that it was said to those of old, &#8216;You shall not swear falsely, but shall perform to the Lord what you have sworm.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v34`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you, Do not take an oath at all, either by heaven, for it is the throne of God,`,
                },
                {
                  _id: `esv-nt-matt-5-v35`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `or by the earth, for it is his footstool, or by Jerusalem, for it is the city of the great King.`,
                },
                {
                  _id: `esv-nt-matt-5-v36`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And do not take an oath by your head, for you cannot make one hair white or black.`,
                },
                {
                  _id: `esv-nt-matt-5-v37`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Let what you say be simply &#8216;Yes&#8217; or &#8216;No&#8217;; anything more than this comes from evil.`,
                },
                {
                  _id: `esv-nt-matt-5-v38`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Retaliation`,
                  paragraph: `&#8220;You have herd that it was said, &#8216;An eye for an eye and a tooth for a tooth.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v39`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you, Do not resist the one who is evil. But if anyone slaps you on the right cheek, turn to him the other also.`,
                },
                {
                  _id: `esv-nt-matt-5-v40`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And if anyone would sue you and take your tunic, let him have your cloak as well.`,
                },
                {
                  _id: `esv-nt-matt-5-v41`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And if anyone forces you to go one mile, go with him two miles.`,
                },
                {
                  _id: `esv-nt-matt-5-v42`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `Give to the one who begs from you, and do not refuse the one who would borrow from you.`,
                },
                {
                  _id: `esv-nt-matt-5-v43`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: `Love Your Enemies`,
                  paragraph: `&#8220;You have heard that it was said, &#8216;You shall love your neighbor and hate your enemy.&#8216;`,
                },
                {
                  _id: `esv-nt-matt-5-v44`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `But I say to you, Love your enemies and pray for those who persecute you,`,
                },
                {
                  _id: `esv-nt-matt-5-v45`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `so that you may be sons of your Father who is in heaven, For he makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust.`,
                },
                {
                  _id: `esv-nt-matt-5-v46`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `For if you love those who love you, what reward do you have? Do not even the tax collectors do the same?`,
                },
                {
                  _id: `esv-nt-matt-5-v47`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `And if you greet only your brothers, what more are you doing than others? Do not even the Gentiles do the same?`,
                },
                {
                  _id: `esv-nt-matt-5-v48`,

                  tab: false,
                  beg_break: false,
                  end_break: false,
                  gap: false,
                  title: ``,
                  paragraph: `You therefore must be perfect, as your heavenly Father is perfect.`,
                },
              ],
            },
            {
              chapter: `6`,
              chapter_id: `esv-nt-matt-6`,
              verses: [
                {
                  _id: `esv-nt-matt-6-v1`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `"Beware of practicing your righteousness before other people in order to be seen by them, for then you will have no reward from your Father who is in heaven.`,
                },
                {
                  _id: `esv-nt-matt-6-v2`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `"Thus, when you give to the needy, sound no trumpet before you, as the hypocrites do in the synagogues and in the streets, that they may be praised by others. Truly, I say to you, they have received their reward.`,
                },
                {
                  _id: `esv-nt-matt-6-v3`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `But when you give to the needy, do not let your left hand know what your right hand is doing,`,
                },
                {
                  _id: `esv-nt-matt-6-v4`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `so that your giving may be in secret. And your Father who sees in secret will reward you.`,
                },
                {
                  _id: `esv-nt-matt-6-v5`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `“And when you pray, you must not be like the hypocrites. For they love to stand and pray in the synagogues and at the street corners, that they may be seen by others. Truly, I say to you, they have received their reward.`,
                },
                {
                  _id: `esv-nt-matt-6-v6`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you.`,
                },
                {
                  _id: `esv-nt-matt-6-v7`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `“And when you pray, do not heap up empty phrases as the Gentiles do. For they think that they will be heard for their many words.`,
                },
                {
                  _id: `esv-nt-matt-6-v8`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `Do not be like them, for your Father knows what you need before you ask him.`,
                },
                {
                  _id: `esv-nt-matt-6-v9`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `Pray then like this:<br>”Our Father in heaven,<br>hallowed be your name.`,
                },
                {
                  _id: `esv-nt-matt-6-v10`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `Your kingdom come,<br>your will be done,<br>on earth as it is in heaven.`,
                },
                {
                  _id: `esv-nt-matt-6-v11`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `Give us this day our daily bread,`,
                },
                {
                  _id: `esv-nt-matt-6-v12`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `and forgive us our debts,<br>as we also have forgiven our debtors.`,
                },
                {
                  _id: `esv-nt-matt-6-v13`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `And lead us not into temptation,<br>but deliver us from evil.`,
                },
                {
                  _id: `esv-nt-matt-6-v14`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `For if you forgive others their trespasses, your heavenly Father will also forgive you,`,
                },
                {
                  _id: `esv-nt-matt-6-v15`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `But if you do not forgive others their trespasses, neither will your Father forgive your trespasses.`,
                },
                {
                  _id: `esv-nt-matt-6-v16`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `“And when you fastm do not look gloomy like the hypocrites, for they desfigure their faces that their fasting may be seen by others. Truly, I say to you, they have received their reward.`,
                },
                {
                  _id: `esv-nt-matt-6-v17`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `But when you fast, anoint your head and wash your face,`,
                },
                {
                  _id: `esv-nt-matt-6-v18`,
                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `That your fasting may not be seen by others but by your Father who is in secret. And your Father who sees in secret will reward you.`,
                },
              ],
            },
            {
              chapter: `7`,
              chapter_id: `esv-nt-matt-7`,
              verses: [
                {
                  _id: `esv-nt-matt-7-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `VERSE`,
                },
              ],
            },
            {
              chapter: `8`,
              chapter_id: `esv-nt-matt-8`,
              verses: [
                {
                  _id: `esv-nt-matt-8-v1`,

                  tab: true,
                  beg_break: false,
                  end_break: false,
                  gap: false, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get  after them - might need to add that in the JS
                  paragraph: `VERSE`,
                },
              ],
            },
            {
              chapter: `9`,
              chapter_id: `esv-nt-matt-9`,
              verses: [],
            },
            {
              chapter: `10`,
              chapter_id: `esv-nt-matt-10`,
              verses: [],
            },
            {
              chapter: `11`,
              chapter_id: `esv-nt-matt-11`,
              verses: [],
            },
            {
              chapter: `12`,
              chapter_id: `esv-nt-matt-12`,
              verses: [],
            },
            {
              chapter: `13`,
              chapter_id: `esv-nt-matt-13`,
              verses: [],
            },
            {
              chapter: `14`,
              chapter_id: `esv-nt-matt-14`,
              verses: [],
            },
            {
              chapter: `15`,
              chapter_id: `esv-nt-matt-15`,
              verses: [],
            },
            {
              chapter: `16`,
              chapter_id: `esv-nt-matt-16`,
              verses: [],
            },
            {
              chapter: `17`,
              chapter_id: `esv-nt-matt-17`,
              verses: [],
            },
            {
              chapter: `18`,
              chapter_id: `esv-nt-matt-18`,
              verses: [],
            },
            {
              chapter: `19`,
              chapter_id: `esv-nt-matt-19`,
              verses: [],
            },
            {
              chapter: `20`,
              chapter_id: `esv-nt-matt-20`,
              verses: [],
            },
            {
              chapter: `21`,
              chapter_id: `esv-nt-matt-21`,
              verses: [],
            },
            {
              chapter: `22`,
              chapter_id: `esv-nt-matt-22`,
              verses: [],
            },
            {
              chapter: `23`,
              chapter_id: `esv-nt-matt-23`,
              verses: [],
            },
            {
              chapter: `24`,
              chapter_id: `esv-nt-matt-24`,
              verses: [],
            },
            {
              chapter: `25`,
              chapter_id: `esv-nt-matt-25`,
              verses: [],
            },
            {
              chapter: `26`,
              chapter_id: `esv-nt-matt-26`,
              verses: [],
            },
            {
              chapter: `27`,
              chapter_id: `esv-nt-matt-27`,
              verses: [],
            },
            {
              chapter: `28`,
              chapter_id: `esv-nt-matt-28`,
              verses: [],
            },
          ],
        },
        // adding mark
        {
          book_name: `Mark`,
          book_id: `esv-nt-mark`,
          chapters: [
            {
              chapter: `1`,
              chapter_id: `esv-nt-mark-1`,
              verses: [],
            },
            {
              chapter: `2`,
              chapter_id: `esv-nt-mark-2`,
              verses: [],
            },
            {
              chapter: `3`,
              chapter_id: `esv-nt-mark-3`,
              verses: [],
            },
            {
              chapter: `4`,
              chapter_id: `esv-nt-mark-4`,
              verses: [],
            },
            {
              chapter: `5`,
              chapter_id: `esv-nt-mark-5`,
              verses: [],
            },
            {
              chapter: `6`,
              chapter_id: `esv-nt-mark-6`,
              verses: [],
            },
            {
              chapter: `7`,
              chapter_id: `esv-nt-mark-7`,
              verses: [],
            },
            {
              chapter: `8`,
              chapter_id: `esv-nt-mark-8`,
              verses: [],
            },
            {
              chapter: `9`,
              chapter_id: `esv-nt-mark-9`,
              verses: [],
            },
            {
              chapter: `10`,
              chapter_id: `esv-nt-mark-10`,
              verses: [],
            },
            {
              chapter: `11`,
              chapter_id: `esv-nt-mark-11`,
              verses: [],
            },
            {
              chapter: `12`,
              chapter_id: `esv-nt-mark-12`,
              verses: [],
            },
            {
              chapter: `13`,
              chapter_id: `esv-nt-mark-13`,
              verses: [],
            },
            {
              chapter: `14`,
              chapter_id: `esv-nt-mark-14`,
              verses: [],
            },
            {
              chapter: `15`,
              chapter_id: `esv-nt-mark-15`,
              verses: [],
            },
            {
              chapter: `16`,
              chapter_id: `esv-nt-mark-16`,
              verses: [],
            },
          ],
        }, //adding luke
        {
          book_name: `Luke`,
          book_id: `esv-nt-luke`,
          chapters: [
            {
              chapter: `1`,
              chapter_id: `esv-nt-luke-1`,
              verses: [],
            },
            {
              chapter: `2`,
              chapter_id: `esv-nt-luke-2`,
              verses: [],
            },
            {
              chapter: `3`,
              chapter_id: `esv-nt-luke-3`,
              verses: [],
            },
            {
              chapter: `4`,
              chapter_id: `esv-nt-luke-4`,
              verses: [],
            },
            {
              chapter: `5`,
              chapter_id: `esv-nt-luke-5`,
              verses: [],
            },
            {
              chapter: `6`,
              chapter_id: `esv-nt-luke-6`,
              verses: [],
            },
            {
              chapter: `7`,
              chapter_id: `esv-nt-luke-7`,
              verses: [],
            },
            {
              chapter: `8`,
              chapter_id: `esv-nt-luke-8`,
              verses: [],
            },
            {
              chapter: `9`,
              chapter_id: `esv-nt-luke-9`,
              verses: [],
            },
            {
              chapter: `10`,
              chapter_id: `esv-nt-luke-10`,
              verses: [],
            },
            {
              chapter: `11`,
              chapter_id: `esv-nt-luke-11`,
              verses: [],
            },
            {
              chapter: `12`,
              chapter_id: `esv-nt-luke-12`,
              verses: [],
            },
            {
              chapter: `13`,
              chapter_id: `esv-nt-luke-13`,
              verses: [],
            },
            {
              chapter: `14`,
              chapter_id: `esv-nt-luke-14`,
              verses: [],
            },
            {
              chapter: `15`,
              chapter_id: `esv-nt-luke-15`,
              verses: [],
            },
            {
              chapter: `16`,
              chapter_id: `esv-nt-luke-16`,
              verses: [],
            },
            {
              chapter: `17`,
              chapter_id: `esv-nt-luke-17`,
              verses: [],
            },
            {
              chapter: `18`,
              chapter_id: `esv-nt-luke-18`,
              verses: [],
            },
            {
              chapter: `19`,
              chapter_id: `esv-nt-luke-19`,
              verses: [],
            },
            {
              chapter: `20`,
              chapter_id: `esv-nt-luke-20`,
              verses: [],
            },
            {
              chapter: `21`,
              chapter_id: `esv-nt-luke-21`,
              verses: [],
            },
            {
              chapter: `22`,
              chapter_id: `esv-nt-luke-22`,
              verses: [],
            },
            {
              chapter: `23`,
              chapter_id: `esv-nt-luke-23`,
              verses: [],
            },
            {
              chapter: `24`,
              chapter_id: `esv-nt-luke-24`,
              verses: [],
            },
          ],
        },
        {
          book_name: `John`,
          book_id: `esv-nt-john`,
          chapters: [
            {
              chapter: `1`,
              chapter_id: `esv-nt-john-1`,
              verses: [],
            },
            {
              chapter: `2`,
              chapter_id: `esv-nt-john-2`,
              verses: [],
            },
            {
              chapter: `3`,
              chapter_id: `esv-nt-john-3`,
              verses: [],
            },
            {
              chapter: `4`,
              chapter_id: `esv-nt-john-4`,
              verses: [],
            },
            {
              chapter: `5`,
              chapter_id: `esv-nt-john-5`,
              verses: [],
            },
            {
              chapter: `6`,
              chapter_id: `esv-nt-john-6`,
              verses: [],
            },
            {
              chapter: `7`,
              chapter_id: `esv-nt-john-7`,
              verses: [],
            },
            {
              chapter: `8`,
              chapter_id: `esv-nt-john-8`,
              verses: [],
            },
            {
              chapter: `9`,
              chapter_id: `esv-nt-john-9`,
              verses: [],
            },
            {
              chapter: `10`,
              chapter_id: `esv-nt-john-10`,
              verses: [],
            },
            {
              chapter: `11`,
              chapter_id: `esv-nt-john-11`,
              verses: [],
            },
            {
              chapter: `12`,
              chapter_id: `esv-nt-john-12`,
              verses: [],
            },
            {
              chapter: `13`,
              chapter_id: `esv-nt-john-13`,
              verses: [],
            },
            {
              chapter: `14`,
              chapter_id: `esv-nt-john-14`,
              verses: [],
            },
            {
              chapter: `15`,
              chapter_id: `esv-nt-john-15`,
              verses: [],
            },
            {
              chapter: `16`,
              chapter_id: `esv-nt-john-16`,
              verses: [],
            },
            {
              chapter: `17`,
              chapter_id: `esv-nt-john-17`,
              verses: [],
            },
            {
              chapter: `18`,
              chapter_id: `esv-nt-john-18`,
              verses: [],
            },
            {
              chapter: `19`,
              chapter_id: `esv-nt-john-19`,
              verses: [],
            },
            {
              chapter: `20`,
              chapter_id: `esv-nt-john-20`,
              verses: [],
            },
            {
              chapter: `21`,
              chapter_id: `esv-nt-john-21`,
              verses: [],
            },
          ],
        },
      ],
    }, // new bible version here
  ],
};
