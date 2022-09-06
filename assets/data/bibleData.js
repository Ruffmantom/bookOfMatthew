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
  app_version: "000.020",
  bibles: [
    {
      bible_type: "ESV",
      bible_id: "b_esv",
      bible_year: "2001 – 2022 Crossway ©",
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
                  new_para: true,
                  title: "The genealogy of Jesus Christ",
                  paragraph:
                    "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.",
                },
                {
                  _id: "esv-nt-matt-1-v2",
                  new_para: false,
                  title: "",
                  paragraph:
                    "Abraham was the father of Isaac, and Isaac the father of Jacob, and Jacob the father of Judah and his brothers, ",
                },
                {
                  _id: "esv-nt-matt-1-v3",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Judah the father of Perez and Zerah by Tamar, and perez the father of Hezron the father of Ram, ",
                },
                {
                  _id: "esv-nt-matt-1-v4",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Ram the father of Amminadab, and Amminadab the father of Nahshon, and Nahshon the father of Salmon, ",
                },
                {
                  _id: "esv-nt-matt-1-v5",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Salmon the father of Boaz by Rahab, and Boaz the father of Obed by Ruth, and Obed the father of Jesse, ",
                },
                {
                  _id: "esv-nt-matt-1-v6",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Jesse the father of David the king.<br>  &emsp;And David was the father of Solomon bu the wife of Uriah, ",
                },
                {
                  _id: "esv-nt-matt-1-v7",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Solomon the father of Rehoboam, and Rehoboam the father of Abijah, and Abijah the father of Asaph, ",
                },
                {
                  _id: "esv-nt-matt-1-v8",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Asaph the father of Jehoshaphat, and Jehoshaphat the father of Joram, and Joram the father of Uzziah, ",
                },
                {
                  _id: "esv-nt-matt-1-v9",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Uzziah the father of Jotham, and Jotham the father of Ahaz, and Ahaz the father of Hezekiah, ",
                },
                {
                  _id: "esv-nt-matt-1-v10",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Hezekiah the father of Manasseh, and Meanasseh the father of Amos, and Amos the father of Josiah, ",
                },
                {
                  _id: "esv-nt-matt-1-v11",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Josiah the father of Jechoniah and his brothers, at the time of the eportation to Babylon.  <br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v12",
                  new_para: true,
                  title: "",
                  paragraph:
                    "And after the deportation to Babylon: Jechoniah was the father of Shealtiel, and Shealtiel the father of Zerubbabel, ",
                },
                {
                  _id: "esv-nt-matt-1-v13",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Zerubbabel the father of Abiud, and Abiud the father of Eliakim, and Eliakim the father of Azor,  ",
                },
                {
                  _id: "esv-nt-matt-1-v14",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Azor the father of Zadok, and Zadok the father of Achim, and Achim the father of Eliud ",
                },
                {
                  _id: "esv-nt-matt-1-v15",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Eliud the father of Eleazar, and Eleazar the father of Matthan, and Matthan the father of Jacob, ",
                },
                {
                  _id: "esv-nt-matt-1-v16",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and Jacob the father of Joseph the husband of Mary, of whom Jesus was born, who is called Christ.",
                },
                {
                  _id: "esv-nt-matt-1-v17",
                  new_para: false,
                  title: "",
                  paragraph:
                    "So all the generations from Abraham to David were fourteen generathions, and from David to the deportation to Babulon fourteen generations, and from the deportations to Babulon to the Christ fourteen generations.<br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v18",
                  new_para: true,
                  title: "The birth of Jesus Christ",
                  paragraph:
                    "Now the birth of Jesus Christ took place in this way.  When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit.",
                },
                {
                  _id: "esv-nt-matt-1-v19",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And her husband Joseph, being a just man and unwilling to put her to shame, resolved to divorxe her quietly.",
                },
                {
                  _id: "esv-nt-matt-1-v20",
                  new_para: false,
                  title: "",
                  paragraph:
                    'But as he considered these things, behold, an angel of the Lord appeared to him in a dream, saying, "Joseph, son of David, do not fear the take Mary as your wife, for that which is conceived in her is from the Holy Spirit.',
                },
                {
                  _id: "esv-nt-matt-1-v21",
                  new_para: false,
                  title: "",
                  paragraph:
                    'She will bear a son, and you shall call his name Jesus, for he will save his prople from their sins."',
                },
                {
                  _id: "esv-nt-matt-1-v22",
                  new_para: false,
                  title: "",
                  paragraph:
                    "All this took place to fulfill what the Lord had spoken bu the prophet:<br><br>",
                },
                {
                  _id: "esv-nt-matt-1-v23",
                  new_para: false,
                  title: "",
                  paragraph:
                    '"Behold, the virgin shall conceive and bear a son,<br>and they shall call his name Immanuel"<br> (which means, God with us).<br><br>',
                },
                {
                  _id: "esv-nt-matt-1-v24",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When Joseph woke from sleep, he did as the angel of the Lord commanded him: he took his wife,",
                },
                {
                  _id: "esv-nt-matt-1-v25",
                  new_para: false,
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
                  new_para: true, 
                  title: "The Visit of the Wise Men", 
                  paragraph:
                    "Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem,",
                },
                {
                  _id: "esv-nt-matt-2-v2",
                  new_para: false,
                  title: "",
                  paragraph:
                    "saying, “Where is he who has been born king of the Jews? For we saw his star when it rose and have come to worship him.”",
                },
                {
                  _id: "esv-nt-matt-2-v3",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When Herod the king heard this, he was troubled, and all Jerusalem with him;",
                },
                {
                  _id: "esv-nt-matt-2-v4",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and assembling all the chief prises and scribes of the people, he inquired of them where the Christ was to be born.",
                },
                {
                  _id: "esv-nt-matt-2-v5",
                  new_para: false,
                  title: "",
                  paragraph:
                    "They told him, “In Bethlehem of Judea for so it is written by the prophet:<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v6",
                  new_para: true,
                  title: "",
                  paragraph: `“‘And you, O Bethlehem, in the land of Judah,<br>
                    are by no means least among the rulers of Judah;<br>
                    for from you shall come a ruler<br>
                    who will qshepherd my people Israel.’”<br><br>`,
                },
                {
                  _id: "esv-nt-matt-2-v7",
                  new_para: true,
                  title: "",
                  paragraph:
                    "Then Herod summoned the wise men secretly and ascertained from them what time the star had appeared.",
                },
                {
                  _id: "esv-nt-matt-2-v8",
                  new_para: false,
                  title: "",
                  paragraph:
                    "and he sent them to the Bethlehem, saying, “Go and search diligently for the child. And when you have found him, bring me word, that I too may come and worship him.”",
                },
                {
                  _id: "esv-nt-matt-2-v9",
                  new_para: false,
                  title: "",
                  paragraph:
                    "after listening to the king, they went on their way. And behold, the star that they had seen when it rose went before them until it came to rest over the place where the child was.",
                },
                {
                  _id: "esv-nt-matt-2-v10",
                  new_para: false,
                  title: "",
                  paragraph:
                    "When they saw the star, they rejoiced exceedingly with great joy.",
                },
                {
                  _id: "esv-nt-matt-2-v11",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.",
                },
                {
                  _id: "esv-nt-matt-2-v12",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And being warned in a dream not to return to Herod, they departed to their own country by another way.<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v13",
                  new_para: true,
                  title: "The Flight to Egypt",
                  paragraph:
                    "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, “Rise, take the child and his mother, and flee to Egypt, and remain there until I tell you, for Herod is about to search for the child, to destroy him.”",
                },
                {
                  _id: "esv-nt-matt-2-v14",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And he rose and took the child and his mother by night and departed to Egypt",
                },
                {
                  _id: "esv-nt-matt-2-v15",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And remained there until the death of Herod. This was to fulfill what the Lord had spoken by the prophet, “Out of Egypt I called my son.”<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v16",
                  new_para: true,
                  title: "Herod Kills the Children",
                  paragraph:
                    "Then Herod, when he saw that he had been tricked by the wise men, became furious, and he sent and killed all the male children in Bethlehem and in all that region who were two years old or under, according to the time that he had ascertained from the wise men,",
                },
                {
                  _id: "esv-nt-matt-2-v17",
                  new_para: false,
                  title: "",
                  paragraph:
                    "Then was fulfilled what was spoken bu the prophet Jeremiah:<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v18",
                  new_para: true,
                  title: "",
                  paragraph:
                    "“A voice was heard in Ramah,<br>weeping and loud lamentation,<br>Rachel weeping for her children;<br>she refused to be comforted, because they are no more.”<br><br>",
                },
                {
                  _id: "esv-nt-matt-2-v19",
                  new_para: true,
                  title: "The Return to Nazareth",
                  paragraph:
                    "But when Herod died, behold, an angel of the Lord appeared in a dream to Joseph in Egypt,",
                },
                {
                  _id: "esv-nt-matt-2-v20",
                  new_para: false,
                  title: "",
                  paragraph:
                    "saying, “Rise, take the child and his mother and go to the land of Israel, for those who sought the shield’s life are dead.”",
                },
                {
                  _id: "esv-nt-matt-2-v21",
                  new_para: false,
                  title: "",
                  paragraph:
                    "And he rose and took the child and his mother and went to the land of Israel.",
                },
                {
                  _id: "esv-nt-matt-2-v22",
                  new_para: false,
                  title: "",
                  paragraph:
                    "But when he heard that Archelaus was reigning over Judea in place of his father Herod, he was afraid to go there, and being warned in a dream he withdrew to the district of Galilee.",
                },
                {
                  _id: "esv-nt-matt-2-v23",
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
              verses: [
                {
                  _id: `esv-nt-matt-3-v1`,
                  new_para: true, 
                  title: `John the Baptist Prepares the Way`, 
                  paragraph: `In those days John the Baptist came preaching in the wilderness of Judea,`,
                },
                {
                  _id: `esv-nt-matt-3-v2`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `“Repent, for the kingdom of heaven is at hand.”`,
                },
                {
                  _id: `esv-nt-matt-3-v3`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `For this is he who was spoken of by the prophet Isaiah when he said,<br><br>“The voice of one crying in the wilderness:<br>
                    ‘Prepare the way of the Lord;<br>
                    make his paths straight.’”<br><br>`,
                },
                {
                  _id: `esv-nt-matt-3-v4`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `Now John wore a garment of camel’s hair and a leather belt around his waist, and his food was locusts and wild honey.`,
                },
                {
                  _id: `esv-nt-matt-3-v5`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Then Jerusalem and all Judea and all the region about the Jordan were going out to him,`,
                },
                {
                  _id: `esv-nt-matt-3-v6`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `and they were baptized by him in the river Jordan, confessing their sins.`,
                },
                {
                  _id: `esv-nt-matt-3-v7`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `But when he saw many of the Pharisees and Sadducees coming to his baptism, he said to them, "You brood of vipers! Who warned you to flee from the wrath to come?`,
                },
                {
                  _id: `esv-nt-matt-3-v8`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Bear fruit in keeping with repentance.`,
                },
                {
                  _id: `esv-nt-matt-3-v9`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And do not presume to say to youselves, 'We have Abraham as our father', for I tell you, God is able from these stones to raise up children from Abraham.`,
                },
                {
                  _id: `esv-nt-matt-3-v10`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Even now the axe is laid to the root of the trees. Every tree therefore that does not bear good fruit is cut down and thrown into the fire.<br>`,
                },
                {
                  _id: `esv-nt-matt-3-v11`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `"I baptize you with water for repentance, but he who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire."`,
                },
                {
                  _id: `esv-nt-matt-3-v12`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `His winnowing fork is in his hand, and he will clear his threshing floor and gather hiswheat into the barn, but the chaff he will burn with unquenchable fire."<br><br>`,
                },
                {
                  _id: `esv-nt-matt-3-v13`,
                  new_para: true, 
                  title: `The Baptism of Jesus`, 
                  paragraph: `Then Jesus came from Galilee to the Jordan to John, to be baptized by him.`,
                },
                {
                  _id: `esv-nt-matt-3-v14`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `John would have prevented him, saying, "I need to be baptized by you, and do you come to me?"`,
                },
                {
                  _id: `esv-nt-matt-3-v15`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `But Jesus answered him, "Let it be so now, for thus it is fitting for us to fulfill all righteousness." Then he consented.`,
                },
                {
                  _id: `esv-nt-matt-3-v16`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And when Jesus was baptized, immediately he went up from the water, and behold, the heavens were opened to him, and he saw the Spirit of God descending like a dove and coming to rest on him;`,
                },
                {
                  _id: `esv-nt-matt-3-v17`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `and behold, a voice from heaven said, "This is my beloved Son, with whom I am well pleased."`,
                },
              ],
            },
            {
              chapter: "4",
              chapter_id: "esv-nt-matt-4",
              verses: [
                {
                  _id: `esv-nt-matt-4-v1`,
                  new_para: true, 
                  title: `The Temptation of Jesus`, 
                  paragraph: `Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil.`,
                },
                {
                  _id: `esv-nt-matt-4-v2`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And after fasting forty days and forty nights, he was hungry.`,
                },
                {
                  _id: `esv-nt-matt-4-v3`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And the tempter came and said to him, "if you are the Son of God, command these stones to become loaves of bread."`,
                },
                {
                  _id: `esv-nt-matt-4-v4`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `But he answered, "It is written, <br><br> "'Man shall not live by bread alone,<br>but by every word that comes from the mouth of God.'"<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v5`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `Then the devil took him to the holy city and set him on the pinnacle of the temple`,
                },
                {
                  _id: `esv-nt-matt-4-v6`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `and said to him, "If you are the Son of God, throw yourself down, for it is written,<br><br>"'He will command his angels concerning you,'<br><br>and<br><br> "'On their hands they will bear you up,<br>lest you strike your foot against a stone.'"<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v7`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `Jesus said to him, "Again it is written, 'You shall not put the Lord your God to the test.'"`,
                },
                {
                  _id: `esv-nt-matt-4-v8`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Again, the devil took him to a very high mountain and showed him all the kingdoms of the world and their glory.`,
                },
                {
                  _id: `esv-nt-matt-4-v9`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And he said to him, "All these I will give you, if you will fall down and worship me."`,
                },
                {
                  _id: `esv-nt-matt-4-v10`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Then Jesus said to him, "Be gone, Satan! For it is written,<br><br>"'You shall worship the Lord your God<br>and him only shall you serve.'"<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v11`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `Then the devil left him, and behold, angels came and were ministering to him.<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v12`,
                  new_para: true, 
                  title: `Jesus Begins His Ministry`, 
                  paragraph: `Now when he heard that John had been arrested, he withdrew into Galilee.`,
                },
                {
                  _id: `esv-nt-matt-4-v13`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And leaving Nazareth he went and lived in Capernaum by the sea, in the territory of Zebulun and Naphtali,`,
                },
                {
                  _id: `esv-nt-matt-4-v14`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `so that what was spoken by the prophet Isaiah might be fulfilled;<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v15`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `"The land of Zebulun and the land of Naphtali,<br>the way of the sea, beyond the Jordan, Galilee of the Gentiles--<br>`,
                },
                {
                  _id: `esv-nt-matt-4-v16`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `the people dwelling in darkness<br>have seen a great light,<br>and for those dwelling in the region and shadow of death,<br>on them a light has dawned."<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v17`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `From that time Jesus began to preach, saying, "Repent, for the kindom of heaven is at hand."<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v18`,
                  new_para: true, 
                  title: `Jesus Calls the First Disciples`, 
                  paragraph: `While walking by the Sea of Galilee, he saw two brothers, Simon (who is called Peter) and Andrew his brother, casting a net into the sea, for they were fishermen.`,
                },
                {
                  _id: `esv-nt-matt-4-v19`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And he said to them, "Follow me, and I will make you fishers of men."`,
                },
                {
                  _id: `esv-nt-matt-4-v20`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Immediately they left their nets and followed him.`,
                },
                {
                  _id: `esv-nt-matt-4-v21`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And going on from there he saw two other brothers, James the son of Zebedee and John his brother, in the boat with Zebedee their father, mending their nets, and he called them.`,
                },
                {
                  _id: `esv-nt-matt-4-v22`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `Immediately they left the boat and their father and followed him.<br><br>`,
                },
                {
                  _id: `esv-nt-matt-4-v23`,
                  new_para: true, 
                  title: `Jesus Ministers to Great Crowds`, 
                  paragraph: `And he went throughout all Galilee, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction among the people.`,
                },
                {
                  _id: `esv-nt-matt-4-v24`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `So his fame spread throughout all Syria, and they brought him all the sick, those afflicted with various diseases and pains, those oppressed by demons, those having seizures, and paralytics, and he healed them.`,
                },
                {
                  _id: `esv-nt-matt-4-v25`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `And great crowds followed him from Galilee and the Decapolis, and from Jerusalem and Judea, and from beyond the Jordan.`,
                }
              ],
            },
            {
              chapter: "5",
              chapter_id: "esv-nt-matt-5",
              verses: [
                {
                  _id: `esv-nt-matt-5-v1`,
                  new_para: true, 
                  title: `The Sermon on the Mount`, 
                  paragraph: `Seeing the crowds, he went up on the mountain, and when he sat down, his disciples came to him.`,
                },
                {
                  _id: `esv-nt-matt-5-v2`,
                  new_para: true, 
                  title: `The Beatitudes`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v3`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v4`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v5`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v6`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v7`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v8`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v9`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v10`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v11`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v12`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v13`,
                  new_para: true, 
                  title: `Salt and Light`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v14`,
                  new_para: true, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v15`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v16`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v17`,
                  new_para: true, 
                  title: `Christ Came to Fulfill the Law`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v18`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v19`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v20`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v21`,
                  new_para: true, 
                  title: `Anger`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v22`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v23`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v24`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-25`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v26`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v27`,
                  new_para: true, 
                  title: `Lust`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v28`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v29`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v30`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v31`,
                  new_para: true, 
                  title: `Divorce`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v32`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v33`,
                  new_para: true, 
                  title: `Oaths`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v34`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v35`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v36`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v37`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v38`,
                  new_para: true, 
                  title: `Retaliation`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v39`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v40`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v41`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v42`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v43`,
                  new_para: true, 
                  title: `Love Your Enemies`, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v44`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v45`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v46`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v47`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                },
                {
                  _id: `esv-nt-matt-5-v48`,
                  new_para: false, 
                  title: ``, 
                  paragraph: `VERSE`,
                }
              ],
            },
            {
              chapter: "6",
              chapter_id: "esv-nt-matt-6",
              verses: [
                {
                  _id: `esv-nt-matt-6-v1`,
                  new_para: true, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get <br><br> after them - might need to add that in the JS
                  paragraph: `VERSE`,
                },
              ],
            },
            {
              chapter: "7",
              chapter_id: "esv-nt-matt-7",
              verses: [
                {
                  _id: `esv-nt-matt-7-v1`,
                  new_para: true, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get <br><br> after them - might need to add that in the JS
                  paragraph: `VERSE`,
                },
              ],
            },
            {
              chapter: "8",
              chapter_id: "esv-nt-matt-8",
              verses: [
                {
                  _id: `esv-nt-matt-8-v1`,
                  new_para: true, // can be true or false if true - it will add a <br> else it will be a regular span
                  title: ``, //titles get <br><br> after them - might need to add that in the JS
                  paragraph: `VERSE`,
                },
              ],
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
              chapter_id: "esv-nt-luke-17",
              verses: [],
            },
            {
              chapter: "18",
              chapter_id: "esv-nt-luke-18",
              verses: [],
            },
            {
              chapter: "19",
              chapter_id: "esv-nt-luke-19",
              verses: [],
            },
            {
              chapter: "20",
              chapter_id: "esv-nt-luke-20",
              verses: [],
            },
            {
              chapter: "21",
              chapter_id: "esv-nt-luke-21",
              verses: [],
            },
            {
              chapter: "22",
              chapter_id: "esv-nt-luke-22",
              verses: [],
            },
            {
              chapter: "23",
              chapter_id: "esv-nt-luke-23",
              verses: [],
            },
            {
              chapter: "24",
              chapter_id: "esv-nt-luke-24",
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
