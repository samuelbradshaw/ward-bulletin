const hymnList = {
  "1": { name: "The Morning Breaks", uri: "the-morning-breaks" },
  "2": { name: "The Spirit of God", uri: "the-spirit-of-god" },
  "3": { name: "Now Let Us Rejoice", uri: "now-let-us-rejoice" },
  "4": { name: "Truth Eternal", uri: "truth-eternal" },
  "5": {
    name: "High on the Mountain Top",
    uri: "high-on-the-mountain-top"
  },
  "6": { name: "Redeemer of Israel", uri: "redeemer-of-israel" },
  "7": {
    name: "Israel, Israel, God Is Calling",
    uri: "israel-israel-god-is-calling"
  },
  "8": { name: "Awake and Arise", uri: "awake-and-arise" },
  "9": { name: "Come, Rejoice", uri: "come-rejoice" },
  "10": { name: "Come, Sing to the Lord", uri: "come-sing-to-the-lord" },
  "11": {
    name: "What Was Witnessed in the Heavens?",
    uri: "what-was-witnessed-in-the-heavens"
  },
  "12": {
    name: "'Twas Witnessed in the Morning Sky",
    uri: "twas-witnessed-in-the-morning-sky"
  },
  "13": {
    name: "An Angel from on High",
    uri: "an-angel-from-on-high-13"
  },
  "14": {
    name: "Sweet Is the Peace the Gospel Brings",
    uri: "sweet-is-the-peace-the-gospel-brings"
  },
  "15": {
    name: "I Saw a Mighty Angel Fly",
    uri: "i-saw-a-mighty-angel-fly"
  },
  "16": {
    name: "What Glorious Scenes Mine Eyes Behold",
    uri: "what-glorious-scenes-mine-eyes-behold"
  },
  "17": {
    name: "Awake, Ye Saints of God, Awake!",
    uri: "awake-ye-saints-of-god-awake"
  },
  "18": {
    name: "The Voice of God Again Is Heard",
    uri: "the-voice-of-god-again-is-heard"
  },
  "19": {
    name: "We Thank Thee, O God, for a Prophet",
    uri: "we-thank-thee-o-god-for-a-prophet"
  },
  "20": {
    name: "God of Power, God of Right",
    uri: "god-of-power-god-of-right"
  },
  "21": {
    name: "Come, Listen to a Prophet's Voice",
    uri: "come-listen-to-a-prophets-voice"
  },
  "22": {
    name: "We Listen to a Prophet's Voice",
    uri: "we-listen-to-a-prophets-voice"
  },
  "23": { name: "We Ever Pray for Thee", uri: "we-ever-pray-for-thee" },
  "24": {
    name: "God Bless Our Prophet Dear",
    uri: "god-bless-our-prophet-dear"
  },
  "25": {
    name: "Now We'll Sing with One Accord",
    uri: "now-well-sing-with-one-accord"
  },
  "26": {
    name: "Joseph Smith's First Prayer",
    uri: "joseph-smiths-first-prayer"
  },
  "27": { name: "Praise to the Man", uri: "praise-to-the-man" },
  "28": {
    name: "Saints, Behold How Great Jehovah",
    uri: "saints-behold-how-great-jehovah"
  },
  "29": {
    name: "A Poor Wayfaring Man of Grief",
    uri: "a-poor-wayfaring-man-of-grief"
  },
  "30": { name: "Come, Come, Ye Saints", uri: "come-come-ye-saints" },
  "31": {
    name: "O God, Our Help in Ages Past",
    uri: "o-god-our-help-in-ages-past"
  },
  "32": {
    name: "The Happy Day at Last Has Come",
    uri: "the-happy-day-at-last-has-come"
  },
  "33": {
    name: "Our Mountain Home So Dear",
    uri: "our-mountain-home-so-dear"
  },
  "34": { name: "O Ye Mountains High", uri: "o-ye-mountains-high" },
  "35": {
    name: "For the Strength of the Hills",
    uri: "for-the-strength-of-the-hills"
  },
  "36": {
    name: "They, the Builders of the Nation",
    uri: "they-the-builders-of-the-nation"
  },
  "37": {
    name: "The Wintry Day, Descending to Its Close",
    uri: "the-wintry-day-descending-to-its-close"
  },
  "38": {
    name: "Come, All Ye Saints of Zion",
    uri: "come-all-ye-saints-of-zion"
  },
  "39": { name: "O Saints of Zion", uri: "o-saints-of-zion" },
  "40": { name: "Arise, O Glorious Zion", uri: "arise-o-glorious-zion" },
  "41": {
    name: "Let Zion in Her Beauty Rise",
    uri: "let-zion-in-her-beauty-rise"
  },
  "42": {
    name: "Hail to the Brightness of Zion's Glad Morning!",
    uri: "hail-to-the-brightness-of-zions-glad-morning"
  },
  "43": {
    name: "Zion Stands with Hills Surrounded",
    uri: "zion-stands-with-hills-surrounded"
  },
  "44": {
    name: "Beautiful Zion, Built Above",
    uri: "beautiful-zion-built-above"
  },
  "45": {
    name: "Lead Me into Life Eternal",
    uri: "lead-me-into-life-eternal"
  },
  "46": {
    name: "Glorious Things of Thee Are Spoken",
    uri: "glorious-things-of-thee-are-spoken"
  },
  "47": { name: "We Will Sing of Zion", uri: "we-will-sing-of-zion" },
  "48": {
    name: "Glorious Things Are Sung of Zion",
    uri: "glorious-things-are-sung-of-zion"
  },
  "49": { name: "Adam-ondi-Ahman", uri: "adam-ondi-ahman" },
  "50": {
    name: "Come, Thou Glorious Day of Promise",
    uri: "come-thou-glorious-day-of-promise"
  },
  "51": {
    name: "Sons of Michael, He Approaches",
    uri: "sons-of-michael-he-approaches"
  },
  "52": {
    name: "The Day Dawn Is Breaking",
    uri: "the-day-dawn-is-breaking"
  },
  "53": {
    name: "Let Earth's Inhabitants Rejoice",
    uri: "let-earths-inhabitants-rejoice"
  },
  "54": {
    name: "Behold, the Mountain of the Lord",
    uri: "behold-the-mountain-of-the-lord"
  },
  "55": {
    name: "Lo, the Mighty God Appearing!",
    uri: "lo-the-mighty-god-appearing"
  },
  "56": {
    name: "Softly Beams the Sacred Dawning",
    uri: "softly-beams-the-sacred-dawning"
  },
  "57": {
    name: "We're Not Ashamed to Own Our Lord",
    uri: "were-not-ashamed-to-own-our-lord"
  },
  "58": {
    name: "Come, Ye Children of the Lord",
    uri: "come-ye-children-of-the-lord"
  },
  "59": {
    name: "Come, O Thou King of Kings",
    uri: "come-o-thou-king-of-kings"
  },
  "60": {
    name: "Battle Hymn of the Republic",
    uri: "battle-hymn-of-the-republic"
  },
  "61": {
    name: "Raise Your Voices to the Lord",
    uri: "raise-your-voices-to-the-lord"
  },
  "62": {
    name: "All Creatures of Our God and King",
    uri: "all-creatures-of-our-god-and-king"
  },
  "63": { name: "Great King of Heaven", uri: "great-king-of-heaven" },
  "64": {
    name: "On This Day of Joy and Gladness",
    uri: "on-this-day-of-joy-and-gladness"
  },
  "65": {
    name: "Come, All Ye Saints Who Dwell on Earth",
    uri: "come-all-ye-saints-who-dwell-on-earth"
  },
  "66": {
    name: "Rejoice, the Lord Is King!",
    uri: "rejoice-the-lord-is-king"
  },
  "67": { name: "Glory to God on High", uri: "glory-to-god-on-high" },
  "68": {
    name: "A Mighty Fortress Is Our God",
    uri: "a-mighty-fortress-is-our-god"
  },
  "69": {
    name: "All Glory, Laud, and Honor",
    uri: "all-glory-laud-and-honor"
  },
  "70": { name: "Sing Praise to Him", uri: "sing-praise-to-him" },
  "71": { name: "With Songs of Praise", uri: "with-songs-of-praise" },
  "72": {
    name: "Praise to the Lord, the Almighty",
    uri: "praise-to-the-lord-the-almighty"
  },
  "73": {
    name: "Praise the Lord with Heart and Voice",
    uri: "praise-the-lord-with-heart-and-voice"
  },
  "74": { name: "Praise Ye the Lord", uri: "praise-ye-the-lord" },
  "75": { name: "In Hymns of Praise", uri: "in-hymns-of-praise" },
  "76": {
    name: "God of Our Fathers, We Come unto Thee",
    uri: "god-of-our-fathers-we-come-unto-thee"
  },
  "77": { name: "Great Is the Lord", uri: "great-is-the-lord" },
  "78": {
    name: "God of Our Fathers, Whose Almighty Hand",
    uri: "god-of-our-fathers-whose-almighty-hand"
  },
  "79": {
    name: "With All the Power of Heart and Tongue",
    uri: "with-all-the-power-of-heart-and-tongue"
  },
  "80": {
    name: "God of Our Fathers, Known of Old",
    uri: "god-of-our-fathers-known-of-old"
  },
  "81": { name: "Press Forward, Saints", uri: "press-forward-saints" },
  "82": { name: "For All the Saints", uri: "for-all-the-saints" },
  "83": {
    name: "Guide Us, O Thou Great Jehovah",
    uri: "guide-us-o-thou-great-jehovah"
  },
  "84": { name: "Faith of Our Fathers", uri: "faith-of-our-fathers" },
  "85": { name: "How Firm a Foundation", uri: "how-firm-a-foundation" },
  "86": { name: "How Great Thou Art", uri: "how-great-thou-art" },
  "87": { name: "God Is Love", uri: "god-is-love" },
  "88": {
    name: "Great God, Attend While Zion Sings",
    uri: "great-god-attend-while-zion-sings"
  },
  "89": { name: "The Lord Is My Light", uri: "the-lord-is-my-light" },
  "90": {
    name: "From All That Dwell below the Skies",
    uri: "from-all-that-dwell-below-the-skies"
  },
  "91": {
    name: "Father, Thy Children to Thee Now Raise",
    uri: "father-thy-children-to-thee-now-raise"
  },
  "92": {
    name: "For the Beauty of the Earth",
    uri: "for-the-beauty-of-the-earth"
  },
  "93": {
    name: "Prayer of Thanksgiving",
    uri: "prayer-of-thanksgiving"
  },
  "94": {
    name: "Come, Ye Thankful People",
    uri: "come-ye-thankful-people"
  },
  "95": {
    name: "Now Thank We All Our God",
    uri: "now-thank-we-all-our-god"
  },
  "96": {
    name: "Dearest Children, God Is Near You",
    uri: "dearest-children-god-is-near-you"
  },
  "97": { name: "Lead, Kindly Light", uri: "lead-kindly-light" },
  "98": {
    name: "I Need Thee Every Hour",
    uri: "i-need-thee-every-hour"
  },
  "99": {
    name: "Nearer, Dear Savior, to Thee",
    uri: "nearer-dear-savior-to-thee"
  },
  "100": {
    name: "Nearer, My God, to Thee",
    uri: "nearer-my-god-to-thee"
  },
  "101": { name: "Guide Me to Thee", uri: "guide-me-to-thee" },
  "102": {
    name: "Jesus, Lover of My Soul",
    uri: "jesus-lover-of-my-soul"
  },
  "103": {
    name: "Precious Savior, Dear Redeemer",
    uri: "precious-savior-dear-redeemer"
  },
  "104": {
    name: "Jesus, Savior, Pilot Me",
    uri: "jesus-savior-pilot-me"
  },
  "105": {
    name: "Master, the Tempest Is Raging",
    uri: "master-the-tempest-is-raging"
  },
  "106": { name: "God Speed the Right", uri: "god-speed-the-right" },
  "107": {
    name: "Lord, Accept Our True Devotion",
    uri: "lord-accept-our-true-devotion"
  },
  "108": {
    name: "The Lord Is My Shepherd",
    uri: "the-lord-is-my-shepherd"
  },
  "109": {
    name: "The Lord My Pasture Will Prepare",
    uri: "the-lord-my-pasture-will-prepare"
  },
  "110": {
    name: "Cast Thy Burden upon the Lord",
    uri: "cast-thy-burden-upon-the-lord"
  },
  "111": { name: "Rock of Ages", uri: "rock-of-ages" },
  "112": {
    name: "Savior, Redeemer of My Soul",
    uri: "savior-redeemer-of-my-soul"
  },
  "113": { name: "Our Savior's Love", uri: "our-saviors-love" },
  "114": { name: "Come unto Him", uri: "come-unto-him" },
  "115": { name: "Come, Ye Disconsolate", uri: "come-ye-disconsolate" },
  "116": { name: "Come, Follow Me", uri: "come-follow-me" },
  "117": { name: "Come unto Jesus", uri: "come-unto-jesus" },
  "118": {
    name: "Ye Simple Souls Who Stray",
    uri: "ye-simple-souls-who-stray"
  },
  "119": {
    name: "Come, We That Love the Lord",
    uri: "come-we-that-love-the-lord"
  },
  "120": { name: "Lean on My Ample Arm", uri: "lean-on-my-ample-arm" },
  "121": {
    name: "I'm a Pilgrim, I'm a Stranger",
    uri: "im-a-pilgrim-im-a-stranger"
  },
  "122": {
    name: "Though Deepening Trials",
    uri: "though-deepening-trials"
  },
  "123": {
    name: "Oh, May My Soul Commune with Thee",
    uri: "oh-may-my-soul-commune-with-thee"
  },
  "124": { name: "Be Still, My Soul", uri: "be-still-my-soul" },
  "125": {
    name: "How Gentle God's Commands",
    uri: "how-gentle-gods-commands"
  },
  "126": {
    name: "How Long, O Lord Most Holy and True",
    uri: "how-long-o-lord-most-holy-and-true"
  },
  "127": {
    name: "Does the Journey Seem Long?",
    uri: "does-the-journey-seem-long"
  },
  "128": { name: "When Faith Endures", uri: "when-faith-endures" },
  "129": {
    name: "Where Can I Turn for Peace?",
    uri: "where-can-i-turn-for-peace"
  },
  "130": { name: "Be Thou Humble", uri: "be-thou-humble" },
  "131": { name: "More Holiness Give Me", uri: "more-holiness-give-me" },
  "132": {
    name: "God Is in His Holy Temple",
    uri: "god-is-in-his-holy-temple"
  },
  "133": { name: "Father in Heaven", uri: "father-in-heaven" },
  "134": { name: "I Believe in Christ", uri: "i-believe-in-christ" },
  "135": { name: "My Redeemer Lives", uri: "my-redeemer-lives" },
  "136": {
    name: "I Know That My Redeemer Lives",
    uri: "i-know-that-my-redeemer-lives"
  },
  "137": { name: "Testimony", uri: "testimony" },
  "138": {
    name: "Bless Our Fast, We Pray",
    uri: "bless-our-fast-we-pray"
  },
  "139": {
    name: "In Fasting We Approach Thee",
    uri: "in-fasting-we-approach-thee"
  },
  "140": { name: "Did You Think to Pray?", uri: "did-you-think-to-pray" },
  "141": {
    name: "Jesus, the Very Thought of Thee",
    uri: "jesus-the-very-thought-of-thee"
  },
  "142": { name: "Sweet Hour of Prayer", uri: "sweet-hour-of-prayer" },
  "143": {
    name: "Let the Holy Spirit Guide",
    uri: "let-the-holy-spirit-guide"
  },
  "144": { name: "Secret Prayer", uri: "secret-prayer" },
  "145": {
    name: "Prayer Is the Soul's Sincere Desire",
    uri: "prayer-is-the-souls-sincere-desire"
  },
  "146": {
    name: "Gently Raise the Sacred Strain",
    uri: "gently-raise-the-sacred-strain"
  },
  "147": { name: "Sweet Is the Work", uri: "sweet-is-the-work" },
  "148": { name: "Sabbath Day", uri: "sabbath-day" },
  "149": {
    name: "As the Dew from Heaven Distilling",
    uri: "as-the-dew-from-heaven-distilling"
  },
  "150": {
    name: "O Thou Kind and Gracious Father",
    uri: "o-thou-kind-and-gracious-father"
  },
  "151": { name: "We Meet, Dear Lord", uri: "we-meet-dear-lord" },
  "152": {
    name: "God Be with You Till We Meet Again",
    uri: "god-be-with-you-till-we-meet-again"
  },
  "153": {
    name: "Lord, We Ask Thee Ere We Part",
    uri: "lord-we-ask-thee-ere-we-part"
  },
  "154": {
    name: "Father, This Hour Has Been One of Joy",
    uri: "father-this-hour-has-been-one-of-joy"
  },
  "155": {
    name: "We Have Partaken of Thy Love",
    uri: "we-have-partaken-of-thy-love"
  },
  "156": {
    name: "Sing We Now at Parting",
    uri: "sing-we-now-at-parting"
  },
  "157": {
    name: "Thy Spirit, Lord, Has Stirred Our Souls",
    uri: "thy-spirit-lord-has-stirred-our-souls"
  },
  "158": {
    name: "Before Thee, Lord, I Bow My Head",
    uri: "before-thee-lord-i-bow-my-head"
  },
  "159": { name: "Now the Day Is Over", uri: "now-the-day-is-over" },
  "160": {
    name: "Softly Now the Light of Day",
    uri: "softly-now-the-light-of-day"
  },
  "161": { name: "The Lord Be with Us", uri: "the-lord-be-with-us" },
  "162": {
    name: "Lord, We Come before Thee Now",
    uri: "lord-we-come-before-thee-now"
  },
  "163": {
    name: "Lord, Dismiss Us with Thy Blessing",
    uri: "lord-dismiss-us-with-thy-blessing"
  },
  "164": {
    name: "Great God, to Thee My Evening Song",
    uri: "great-god-to-thee-my-evening-song"
  },
  "165": {
    name: "Abide with Me; 'Tis Eventide",
    uri: "abide-with-me-tis-eventide"
  },
  "166": { name: "Abide with Me!", uri: "abide-with-me" },
  "167": {
    name: "Come, Let Us Sing an Evening Hymn",
    uri: "come-let-us-sing-an-evening-hymn"
  },
  "168": { name: "As the Shadows Fall", uri: "as-the-shadows-fall" },
  "169": {
    name: "As Now We Take the Sacrament",
    uri: "as-now-we-take-the-sacrament"
  },
  "170": {
    name: "God, Our Father, Hear Us Pray",
    uri: "god-our-father-hear-us-pray"
  },
  "171": { name: "With Humble Heart", uri: "with-humble-heart" },
  "172": {
    name: "In Humility, Our Savior",
    uri: "in-humility-our-savior"
  },
  "173": {
    name: "While of These Emblems We Partake",
    uri: "while-of-these-emblems-we-partake-173"
  },
  "174": {
    name: "While of These Emblems We Partake",
    uri: "while-of-these-emblems-we-partake-174"
  },
  "175": {
    name: "O God, the Eternal Father",
    uri: "o-god-the-eternal-father"
  },
  "176": {
    name: "'Tis Sweet to Sing the Matchless Love",
    uri: "tis-sweet-to-sing-the-matchless-love-176"
  },
  "177": {
    name: "'Tis Sweet To Sing the Matchless Love",
    uri: "tis-sweet-to-sing-the-matchless-love-177"
  },
  "178": { name: "O Lord of Hosts", uri: "o-lord-of-hosts" },
  "179": {
    name: "Again, Our Dear Redeeming Lord",
    uri: "again-our-dear-redeeming-lord"
  },
  "180": {
    name: "Father in Heaven, We Do Believe",
    uri: "father-in-heaven-we-do-believe"
  },
  "181": {
    name: "Jesus of Nazareth, Savior and King",
    uri: "jesus-of-nazareth-savior-and-king"
  },
  "182": {
    name: "We'll Sing All Hail to Jesus' Name",
    uri: "well-sing-all-hail-to-jesus-name"
  },
  "183": {
    name: "In Remembrance of Thy Suffering",
    uri: "in-remembrance-of-thy-suffering"
  },
  "184": {
    name: "Upon the Cross of Calvary",
    uri: "upon-the-cross-of-calvary"
  },
  "185": {
    name: "Reverently and Meekly Now",
    uri: "reverently-and-meekly-now"
  },
  "186": {
    name: "Again We Meet around the Board",
    uri: "again-we-meet-around-the-board"
  },
  "187": {
    name: "God Loved Us, So He Sent His Son",
    uri: "god-loved-us-so-he-sent-his-son"
  },
  "188": {
    name: "Thy Will, O Lord, Be Done",
    uri: "thy-will-o-lord-be-done"
  },
  "189": {
    name: "O Thou, Before the World Began",
    uri: "o-thou-before-the-world-began"
  },
  "190": {
    name: "In Memory of the Crucified",
    uri: "in-memory-of-the-crucified"
  },
  "191": {
    name: "Behold the Great Redeemer Die",
    uri: "behold-the-great-redeemer-die"
  },
  "192": {
    name: "He Died! The Great Redeemer Died",
    uri: "he-died-the-great-redeemer-died"
  },
  "193": { name: "I Stand All Amazed", uri: "i-stand-all-amazed" },
  "194": {
    name: "There Is a Green Hill Far Away",
    uri: "there-is-a-green-hill-far-away"
  },
  "195": {
    name: "How Great the Wisdom and the Love",
    uri: "how-great-the-wisdom-and-the-love"
  },
  "196": {
    name: "Jesus, Once of Humble Birth",
    uri: "jesus-once-of-humble-birth"
  },
  "197": {
    name: "O Savior, Thou Who Wearest a Crown",
    uri: "o-savior-thou-who-wearest-a-crown"
  },
  "198": { name: "That Easter Morn", uri: "that-easter-morn" },
  "199": { name: "He Is Risen!", uri: "he-is-risen" },
  "200": {
    name: "Christ the Lord Is Risen Today",
    uri: "christ-the-lord-is-risen-today"
  },
  "201": { name: "Joy to the World", uri: "joy-to-the-world" },
  "202": {
    name: "Oh, Come, All Ye Faithful",
    uri: "oh-come-all-ye-faithful"
  },
  "203": {
    name: "Angels We Have Heard on High",
    uri: "angels-we-have-heard-on-high"
  },
  "204": { name: "Silent Night", uri: "silent-night" },
  "205": {
    name: "Once in Royal David's City",
    uri: "once-in-royal-davids-city"
  },
  "206": { name: "Away in a Manger", uri: "away-in-a-manger" },
  "207": {
    name: "It Came upon the Midnight Clear",
    uri: "it-came-upon-the-midnight-clear"
  },
  "208": {
    name: "O Little Town of Bethlehem",
    uri: "o-little-town-of-bethlehem"
  },
  "209": {
    name: "Hark! The Herald Angels Sing",
    uri: "hark-the-herald-angels-sing"
  },
  "210": { name: "With Wondering Awe", uri: "with-wondering-awe" },
  "211": {
    name: "While Shepherds Watched Their Flocks",
    uri: "while-shepherds-watched-their-flocks"
  },
  "212": {
    name: "Far, Far Away on Judea's Plains",
    uri: "far-far-away-on-judeas-plains"
  },
  "213": { name: "The First Noel", uri: "the-first-noel" },
  "214": {
    name: "I Heard the Bells on Christmas Day",
    uri: "i-heard-the-bells-on-christmas-day"
  },
  "215": { name: "Ring Out, Wild Bells", uri: "ring-out-wild-bells" },
  "216": { name: "We Are Sowing", uri: "we-are-sowing" },
  "217": { name: "Come, Let Us Anew", uri: "come-let-us-anew" },
  "218": {
    name: "We Give Thee But Thine Own",
    uri: "we-give-thee-but-thine-own"
  },
  "219": {
    name: "Because I Have Been Given Much",
    uri: "because-i-have-been-given-much"
  },
  "220": {
    name: "Lord, I Would Follow Thee",
    uri: "lord-i-would-follow-thee"
  },
  "221": {
    name: "Dear to the Heart of the Shepherd",
    uri: "dear-to-the-heart-of-the-shepherd"
  },
  "222": {
    name: "Hear Thou Our Hymn, O Lord",
    uri: "hear-thou-our-hymn-o-lord"
  },
  "223": { name: "Have I Done Any Good?", uri: "have-i-done-any-good" },
  "224": {
    name: "I Have Work Enough to Do",
    uri: "i-have-work-enough-to-do"
  },
  "225": {
    name: "We Are Marching On to Glory",
    uri: "we-are-marching-on-to-glory"
  },
  "226": {
    name: "Improve the Shining Moments",
    uri: "improve-the-shining-moments"
  },
  "227": {
    name: "There Is Sunshine in My Soul Today",
    uri: "there-is-sunshine-in-my-soul-today"
  },
  "228": {
    name: "You Can Make the Pathway Bright",
    uri: "you-can-make-the-pathway-bright"
  },
  "229": {
    name: "Today, While the Sun Shines",
    uri: "today-while-the-sun-shines"
  },
  "230": { name: "Scatter Sunshine", uri: "scatter-sunshine" },
  "231": {
    name: "Father, Cheer Our Souls Tonight",
    uri: "father-cheer-our-souls-tonight"
  },
  "232": {
    name: "Let Us Oft Speak Kind Words",
    uri: "let-us-oft-speak-kind-words"
  },
  "233": { name: "Nay, Speak No Ill", uri: "nay-speak-no-ill" },
  "234": {
    name: "Jesus, Mighty King in Zion",
    uri: "jesus-mighty-king-in-zion"
  },
  "235": {
    name: "Should You Feel Inclined to Censure",
    uri: "should-you-feel-inclined-to-censure"
  },
  "236": {
    name: "Lord, Accept into Thy Kingdom",
    uri: "lord-accept-into-thy-kingdom"
  },
  "237": { name: "Do What Is Right", uri: "do-what-is-right" },
  "238": {
    name: "Behold Thy Sons and Daughters, Lord",
    uri: "behold-thy-sons-and-daughters-lord"
  },
  "239": { name: "Choose the Right", uri: "choose-the-right" },
  "240": {
    name: "Know This, That Every Soul Is Free",
    uri: "know-this-that-every-soul-is-free"
  },
  "241": { name: "Count Your Blessings", uri: "count-your-blessings" },
  "242": {
    name: "Praise God, from Whom All Blessings Flow",
    uri: "praise-god-from-whom-all-blessings-flow"
  },
  "243": { name: "Let Us All Press On", uri: "let-us-all-press-on" },
  "244": { name: "Come Along, Come Along", uri: "come-along-come-along" },
  "245": {
    name: "This House We Dedicate to Thee",
    uri: "this-house-we-dedicate-to-thee"
  },
  "246": {
    name: "Onward, Christian Soldiers",
    uri: "onward-christian-soldiers"
  },
  "247": {
    name: "We Love Thy House, O God",
    uri: "we-love-thy-house-o-god"
  },
  "248": {
    name: "Up, Awake, Ye Defenders of Zion",
    uri: "up-awake-ye-defenders-of-zion"
  },
  "249": { name: "Called to Serve", uri: "called-to-serve" },
  "250": { name: "We Are All Enlisted", uri: "we-are-all-enlisted" },
  "251": { name: "Behold! A Royal Army", uri: "behold-a-royal-army" },
  "252": {
    name: "Put Your Shoulder to the Wheel",
    uri: "put-your-shoulder-to-the-wheel"
  },
  "253": {
    name: "Like Ten Thousand Legions Marching",
    uri: "like-ten-thousand-legions-marching"
  },
  "254": { name: "True to the Faith", uri: "true-to-the-faith" },
  "255": { name: "Carry On", uri: "carry-on" },
  "256": {
    name: "As Zion's Youth in Latter Days",
    uri: "as-zions-youth-in-latter-days"
  },
  "257": {
    name: "Rejoice! A Glorious Sound Is Heard",
    uri: "rejoice-a-glorious-sound-is-heard"
  },
  "258": {
    name: "O Thou Rock of Our Salvation",
    uri: "o-thou-rock-of-our-salvation"
  },
  "259": { name: "Hope of Israel", uri: "hope-of-israel" },
  "260": {
    name: "Who's on the Lord's Side?",
    uri: "whos-on-the-lords-side"
  },
  "261": {
    name: "Thy Servants Are Prepared",
    uri: "thy-servants-are-prepared"
  },
  "262": {
    name: "Go, Ye Messengers of Glory",
    uri: "go-ye-messengers-of-glory"
  },
  "263": { name: "Go Forth with Faith", uri: "go-forth-with-faith" },
  "264": { name: "Hark, All Ye Nations!", uri: "hark-all-ye-nations" },
  "265": {
    name: "Arise, O God, and Shine",
    uri: "arise-o-god-and-shine"
  },
  "266": { name: "The Time Is Far Spent", uri: "the-time-is-far-spent" },
  "267": {
    name: "How Wondrous and Great",
    uri: "how-wondrous-and-great"
  },
  "268": {
    name: "Come, All Whose Souls Are Lighted",
    uri: "come-all-whose-souls-are-lighted"
  },
  "269": {
    name: "Jehovah, Lord of Heaven and Earth",
    uri: "jehovah-lord-of-heaven-and-earth"
  },
  "270": {
    name: "I'll Go Where You Want Me to Go",
    uri: "ill-go-where-you-want-me-to-go"
  },
  "271": {
    name: "Oh, Holy Words of Truth and Love",
    uri: "oh-holy-words-of-truth-and-love"
  },
  "272": { name: "Oh Say, What Is Truth?", uri: "oh-say-what-is-truth" },
  "273": {
    name: "Truth Reflects upon Our Senses",
    uri: "truth-reflects-upon-our-senses"
  },
  "274": { name: "The Iron Rod", uri: "the-iron-rod" },
  "275": {
    name: "Men Are That They Might Have Joy",
    uri: "men-are-that-they-might-have-joy"
  },
  "276": {
    name: "Come Away to the Sunday School",
    uri: "come-away-to-the-sunday-school"
  },
  "277": {
    name: "As I Search the Holy Scriptures",
    uri: "as-i-search-the-holy-scriptures"
  },
  "278": {
    name: "Thanks for the Sabbath School",
    uri: "thanks-for-the-sabbath-school"
  },
  "279": { name: "Thy Holy Word", uri: "thy-holy-word" },
  "280": {
    name: "Welcome, Welcome, Sabbath Morning",
    uri: "welcome-welcome-sabbath-morning"
  },
  "281": {
    name: "Help Me Teach with Inspiration",
    uri: "help-me-teach-with-inspiration"
  },
  "282": {
    name: "We Meet Again in Sabbath School",
    uri: "we-meet-again-in-sabbath-school"
  },
  "283": {
    name: "The Glorious Gospel Light Has Shone",
    uri: "the-glorious-gospel-light-has-shone"
  },
  "284": {
    name: "If You Could Hie to Kolob",
    uri: "if-you-could-hie-to-kolob"
  },
  "285": {
    name: "God Moves in a Mysterious Way",
    uri: "god-moves-in-a-mysterious-way"
  },
  "286": {
    name: "Oh, What Songs of the Heart",
    uri: "oh-what-songs-of-the-heart"
  },
  "287": {
    name: "Rise, Ye Saints, and Temples Enter",
    uri: "rise-ye-saints-and-temples-enter"
  },
  "288": {
    name: "How Beautiful Thy Temples, Lord",
    uri: "how-beautiful-thy-temples-lord"
  },
  "289": {
    name: "Holy Temples on Mount Zion",
    uri: "holy-temples-on-mount-zion"
  },
  "290": {
    name: "Rejoice, Ye Saints of Latter Days",
    uri: "rejoice-ye-saints-of-latter-days"
  },
  "291": { name: "Turn Your Hearts", uri: "turn-your-hearts" },
  "292": { name: "O My Father", uri: "o-my-father" },
  "293": {
    name: "Each Life That Touches Ours for Good",
    uri: "each-life-that-touches-ours-for-good"
  },
  "294": { name: "Love at Home", uri: "love-at-home" },
  "295": {
    name: "O Love That Glorifies the Son",
    uri: "o-love-that-glorifies-the-son"
  },
  "296": {
    name: "Our Father, by Whose Name",
    uri: "our-father-by-whose-name"
  },
  "297": {
    name: "From Homes of Saints Glad Songs Arise",
    uri: "from-homes-of-saints-glad-songs-arise"
  },
  "298": {
    name: "Home Can Be a Heaven on Earth",
    uri: "home-can-be-a-heaven-on-earth"
  },
  "299": {
    name: "Children of Our Heavenly Father",
    uri: "children-of-our-heavenly-father"
  },
  "300": {
    name: "Families Can Be Together Forever",
    uri: "families-can-be-together-forever"
  },
  "301": { name: "I Am a Child of God", uri: "i-am-a-child-of-god" },
  "302": {
    name: "I Know My Father Lives",
    uri: "i-know-my-father-lives"
  },
  "303": { name: "Keep the Commandments", uri: "keep-the-commandments" },
  "304": {
    name: "Teach Me to Walk in the Light",
    uri: "teach-me-to-walk-in-the-light"
  },
  "305": { name: "The Light Divine", uri: "the-light-divine" },
  "306": { name: "God's Daily Care", uri: "gods-daily-care" },
  "307": { name: "In Our Lovely Deseret", uri: "in-our-lovely-deseret" },
  "308": { name: "Love One Another", uri: "love-one-another" },
  "309": {
    name: "As Sisters in Zion (Women)",
    uri: "as-sisters-in-zion-women"
  },
  "310": {
    name: "A Key Was Turned in Latter Days (Women)",
    uri: "a-key-was-turned-in-latter-days-women"
  },
  "311": {
    name: "We Meet Again as Sisters (Women)",
    uri: "we-meet-again-as-sisters-women"
  },
  "312": {
    name: "We Ever Pray for Thee (Women)",
    uri: "we-ever-pray-for-thee-women"
  },
  "313": { name: "God Is Love (Women)", uri: "god-is-love-women" },
  "314": {
    name: "How Gentle God's Commands (Women)",
    uri: "how-gentle-gods-commands-women"
  },
  "315": {
    name: "Jesus, the Very Thought of Thee (Women)",
    uri: "jesus-the-very-thought-of-thee-women"
  },
  "316": {
    name: "The Lord Is My Shepherd (Women)",
    uri: "the-lord-is-my-shepherd-women"
  },
  "317": {
    name: "Sweet Is the Work (Women)",
    uri: "sweet-is-the-work-women"
  },
  "318": { name: "Love at Home (Women)", uri: "love-at-home-women" },
  "319": {
    name: "Ye Elders of Israel (Men)",
    uri: "ye-elders-of-israel-men"
  },
  "320": {
    name: "The Priesthood of Our Lord (Men)",
    uri: "the-priesthood-of-our-lord-men"
  },
  "321": {
    name: "Ye Who Are Called to Labor (Men)",
    uri: "ye-who-are-called-to-labor-men"
  },
  "322": {
    name: "Come, All Ye Sons of God (Men)",
    uri: "come-all-ye-sons-of-god-men"
  },
  "323": {
    name: "Rise Up, O Men of God (Men's Choir)",
    uri: "rise-up-o-men-of-god-mens-choir"
  },
  "324": {
    name: "Rise Up, O Men of God (Men)",
    uri: "rise-up-o-men-of-god-men"
  },
  "325": {
    name: "See the Mighty Priesthood Gathered (Men's Choir)",
    uri: "see-the-mighty-priesthood-gathered-mens-choir"
  },
  "326": {
    name: "Come, Come, Ye Saints (Men's Choir)",
    uri: "come-come-ye-saints-mens-choir"
  },
  "327": {
    name: "Go, Ye Messengers of Heaven (Men's Choir)",
    uri: "go-ye-messengers-of-heaven-mens-choir"
  },
  "328": {
    name: "An Angel from on High",
    uri: "an-angel-from-on-high-328"
  },
  "329": {
    name: "Thy Servants Are Prepared (Men's Choir)",
    uri: "thy-servants-are-prepared-mens-choir"
  },
  "330": {
    name: "See, the Mighty Angel Flying (Men's Choir)",
    uri: "see-the-mighty-angel-flying-mens-choir"
  },
  "331": {
    name: "Oh Say, What Is Truth? (Men's Choir)",
    uri: "oh-say-what-is-truth-mens-choir"
  },
  "332": {
    name: "Come, O Thou King of Kings (Men's Choir)",
    uri: "come-o-thou-king-of-kings-mens-choir"
  },
  "333": {
    name: "High on the Mountain Top (Men's Choir)",
    uri: "high-on-the-mountain-top-mens-choir"
  },
  "334": {
    name: "I Need Thee Every Hour (Men's Choir)",
    uri: "i-need-thee-every-hour-mens-choir"
  },
  "335": {
    name: "Brightly Beams Our Father's Mercy (Men's Choir)",
    uri: "brightly-beams-our-fathers-mercy-mens-choir"
  },
  "336": {
    name: "School Thy Feelings (Men's Choir)",
    uri: "school-thy-feelings-mens-choir"
  },
  "337": {
    name: "O Home Beloved (Men's Choir)",
    uri: "o-home-beloved-mens-choir"
  },
  "338": { name: "America the Beautiful", uri: "america-the-beautiful" },
  "339": {
    name: "My Country, 'Tis of Thee",
    uri: "my-country-tis-of-thee"
  },
  "340": {
    name: "The Star-Spangled Banner",
    uri: "the-star-spangled-banner"
  },
  "341": { name: "God Save the King", uri: "god-save-the-king" }
};

export default hymnList;
