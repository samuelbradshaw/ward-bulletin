let hymns = hymnsData().playlist.list.map(data => {
  let { name, playerlink, pdf } = data;
  let match = /www.lds.org\/music\/\library\/hymns\/(.+)\?/.exec(playerlink);
  let uri = match ? match[1] : "";
  id = "";
  if (pdf) {
    match = /pdf\/music\/hymns\/([0-9\-]*)-/.exec(pdf);
    id = match ? match[1] : "";
  }
  return { name, uri, id };
});
saveHymns(hymns);
console.log(`Generated ${hymns.length} hymns`);

function saveHymns(hymns) {
  const fs = require("fs");
  fs.writeFileSync(`src/assets/hymns.json`, JSON.stringify(hymns));
}

function hymnsData() {
  return {
    playlist: {
      list: [
        {
          name: "The Morning Breaks",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0010-the-morning-breaks-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0010-the-morning-breaks-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0010-the-morning-breaks-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-morning-breaks?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0010-the-morning-breaks-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0010-the-morning-breaks-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0010-the-morning-breaks-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10765670018183467892-eng",
          songNumber: "1",
          detailColumn: "1"
        },
        {
          name: "The Spirit of God",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0020-the-spirit-of-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0020-the-spirit-of-god-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0020-the-spirit-of-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-spirit-of-god?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0020-the-spirit-of-god-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0020-the-spirit-of-god-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0020-the-spirit-of-god-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "31892659373502376660-eng",
          songNumber: "2",
          detailColumn: "2"
        },
        {
          name: "Now Let Us Rejoice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0030-now-let-us-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0030-now-let-us-rejoice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0030-now-let-us-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/now-let-us-rejoice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0030-now-let-us-rejoice-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0030-now-let-us-rejoice-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0030-now-let-us-rejoice-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "91807500630541895000-eng",
          songNumber: "3",
          detailColumn: "3"
        },
        {
          name: "Truth Eternal",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0040-truth-eternal-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0040-truth-eternal-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0040-truth-eternal-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/truth-eternal?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0040-truth-eternal-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "73002206137610111890-eng",
          songNumber: "4",
          detailColumn: "4"
        },
        {
          name: "High on the Mountain Top",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0050-high-on-the-mountain-top-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0050-high-on-the-mountain-top-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0050-high-on-the-mountain-top-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/high-on-the-mountain-top?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0050-high-on-the-mountain-top-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0050-high-on-the-mountain-top-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0050-high-on-the-mountain-top-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "91783729563082390760-eng",
          songNumber: "5",
          detailColumn: "5"
        },
        {
          name: "Redeemer of Israel",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0060-redeemer-of-israel-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0060-redeemer-of-israel-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0060-redeemer-of-israel-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/redeemer-of-israel?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0060-redeemer-of-israel-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0060-redeemer-of-israel-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0060-redeemer-of-israel-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18049379209622088316-eng",
          songNumber: "6",
          detailColumn: "6"
        },
        {
          name: "Israel, Israel, God Is Calling",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0070-israel-israel-god-is-calling-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0070-israel-israel-god-is-calling-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0070-israel-israel-god-is-calling-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/israel-israel-god-is-calling?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0070-israel-israel-god-is-calling-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0070-israel-israel-god-is-calling-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0070-israel-israel-god-is-calling-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16312588522419082383-eng",
          songNumber: "7",
          detailColumn: "7"
        },
        {
          name: "Awake and Arise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0080-awake-and-arise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0080-awake-and-arise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0080-awake-and-arise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/awake-and-arise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0080-awake-and-arise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14673303197435913037-eng",
          songNumber: "8",
          detailColumn: "8"
        },
        {
          name: "Come, Rejoice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0090-come-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0090-come-rejoice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0090-come-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-rejoice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0090-come-rejoice-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0090-come-rejoice-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0090-come-rejoice-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16017642587260009504-eng",
          songNumber: "9",
          detailColumn: "9"
        },
        {
          name: "Come, Sing to the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0100-come-sing-to-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0100-come-sing-to-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0100-come-sing-to-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-sing-to-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0100-come-sing-to-the-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "27126586895126696100-eng",
          songNumber: "10",
          detailColumn: "10"
        },
        {
          name: "What Was Witnessed in the Heavens?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0110-what-was-witnessed-in-the-heavens-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0110-what-was-witnessed-in-the-heavens-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0110-what-was-witnessed-in-the-heavens-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/what-was-witnessed-in-the-heavens?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0110-what-was-witnessed-in-the-heavens-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "29590225962123240850-eng",
          songNumber: "11",
          detailColumn: "11"
        },
        {
          name: "'Twas Witnessed in the Morning Sky",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/twas-witnessed-in-the-morning-sky?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "86809087464809734390-eng",
          songNumber: "12",
          detailColumn: "12"
        },
        {
          name: "An Angel from on High",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0130-an-angel-from-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0130-an-angel-from-on-high-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0130-an-angel-from-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/an-angel-from-on-high-13?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0130-an-angel-from-on-high-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "23982951506444518240-eng",
          songNumber: "13",
          detailColumn: "13"
        },
        {
          name: "Sweet Is the Peace the Gospel Brings",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sweet-is-the-peace-the-gospel-brings?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0140-sweet-is-the-peace-the-gospel-brings-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "63156000990664255040-eng",
          songNumber: "14",
          detailColumn: "14"
        },
        {
          name: "I Saw a Mighty Angel Fly",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/i-saw-a-mighty-angel-fly?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "17519662798684788960-eng",
          songNumber: "15",
          detailColumn: "15"
        },
        {
          name: "What Glorious Scenes Mine Eyes Behold",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0160-what-glorious-scenes-mine-eyes-behold-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0160-what-glorious-scenes-mine-eyes-behold-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0160-what-glorious-scenes-mine-eyes-behold-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/what-glorious-scenes-mine-eyes-behold?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0160-what-glorious-scenes-mine-eyes-behold-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16028440213655773309-eng",
          songNumber: "16",
          detailColumn: "16"
        },
        {
          name: "Awake, Ye Saints of God, Awake!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0170-awake-ye-saints-of-god-awake-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0170-awake-ye-saints-of-god-awake-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0170-awake-ye-saints-of-god-awake-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/awake-ye-saints-of-god-awake?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0170-awake-ye-saints-of-god-awake-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "94252160281879332440-eng",
          songNumber: "17",
          detailColumn: "17"
        },
        {
          name: "The Voice of God Again Is Heard",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0180-the-voice-of-god-again-is-heard-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0180-the-voice-of-god-again-is-heard-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0180-the-voice-of-god-again-is-heard-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-voice-of-god-again-is-heard?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0180-the-voice-of-god-again-is-heard-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "61389848576859332600-eng",
          songNumber: "18",
          detailColumn: "18"
        },
        {
          name: "We Thank Thee, O God, for a Prophet",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-thank-thee-o-god-for-a-prophet?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0190-we-thank-thee-o-god-for-a-prophet-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "74745903887593502650-eng",
          songNumber: "19",
          detailColumn: "19"
        },
        {
          name: "God of Power, God of Right",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0200-god-of-power-god-of-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0200-god-of-power-god-of-right-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0200-god-of-power-god-of-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-of-power-god-of-right?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0200-god-of-power-god-of-right-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0200-god-of-power-god-of-right-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0200-god-of-power-god-of-right-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11154037236989165420-eng",
          songNumber: "20",
          detailColumn: "20"
        },
        {
          name: "Come, Listen to a Prophet's Voice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-listen-to-a-prophets-voice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0210-come-listen-to-a-prophets-voice-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "28984439182580480880-eng",
          songNumber: "21",
          detailColumn: "21"
        },
        {
          name: "We Listen to a Prophet's Voice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-listen-to-a-prophets-voice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0220-we-listen-to-a-prophets-voice-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16526137268744132171-eng",
          songNumber: "22",
          detailColumn: "22"
        },
        {
          name: "We Ever Pray for Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0230-we-ever-pray-for-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0230-we-ever-pray-for-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0230-we-ever-pray-for-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-ever-pray-for-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0230-we-ever-pray-for-thee-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0230-we-ever-pray-for-thee-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0230-we-ever-pray-for-thee-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11917861815497005195-eng",
          songNumber: "23",
          detailColumn: "23"
        },
        {
          name: "God Bless Our Prophet Dear",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0240-god-bless-our-prophet-dear-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0240-god-bless-our-prophet-dear-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0240-god-bless-our-prophet-dear-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-bless-our-prophet-dear?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0240-god-bless-our-prophet-dear-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "19820870752304671920-eng",
          songNumber: "24",
          detailColumn: "24"
        },
        {
          name: "Now We'll Sing with One Accord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0250-now-well-sing-with-one-accord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0250-now-well-sing-with-one-accord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0250-now-well-sing-with-one-accord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/now-well-sing-with-one-accord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0250-now-well-sing-with-one-accord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "72118109656122678400-eng",
          songNumber: "25",
          detailColumn: "25"
        },
        {
          name: "Joseph Smith's First Prayer",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0260-joseph-smiths-first-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0260-joseph-smiths-first-prayer-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0260-joseph-smiths-first-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/joseph-smiths-first-prayer?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0260-joseph-smiths-first-prayer-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0260-joseph-smiths-first-prayer-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0260-joseph-smiths-first-prayer-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "44966565252446518600-eng",
          songNumber: "26",
          detailColumn: "26"
        },
        {
          name: "Praise to the Man",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0270-praise-to-the-man-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0270-praise-to-the-man-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0270-praise-to-the-man-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/praise-to-the-man?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0270-praise-to-the-man-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0270-praise-to-the-man-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0270-praise-to-the-man-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10062355978068256774-eng",
          songNumber: "27",
          detailColumn: "27"
        },
        {
          name: "Saints, Behold How Great Jehovah",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0280-saints-behold-how-great-jehovah-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0280-saints-behold-how-great-jehovah-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0280-saints-behold-how-great-jehovah-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/saints-behold-how-great-jehovah?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0280-saints-behold-how-great-jehovah-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "84856953387888720760-eng",
          songNumber: "28",
          detailColumn: "28"
        },
        {
          name: "A Poor Wayfaring Man of Grief",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0290-a-poor-wayfaring-man-of-grief-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0290-a-poor-wayfaring-man-of-grief-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0290-a-poor-wayfaring-man-of-grief-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/a-poor-wayfaring-man-of-grief?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0290-a-poor-wayfaring-man-of-grief-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "30120625053834330720-eng",
          songNumber: "29",
          detailColumn: "29"
        },
        {
          name: "Come, Come, Ye Saints",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0300-come-come-ye-saints-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0300-come-come-ye-saints-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0300-come-come-ye-saints-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-come-ye-saints?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0300-come-come-ye-saints-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0300-come-come-ye-saints-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0300-come-come-ye-saints-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11904324387593182224-eng",
          songNumber: "30",
          detailColumn: "30"
        },
        {
          name: "O God, Our Help in Ages Past",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0310-o-god-our-help-in-ages-past-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0310-o-god-our-help-in-ages-past-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0310-o-god-our-help-in-ages-past-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-god-our-help-in-ages-past?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0310-o-god-our-help-in-ages-past-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "81459524517868649530-eng",
          songNumber: "31",
          detailColumn: "31"
        },
        {
          name: "The Happy Day at Last Has Come",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0320-the-happy-day-at-last-has-come-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0320-the-happy-day-at-last-has-come-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0320-the-happy-day-at-last-has-come-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-happy-day-at-last-has-come?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0320-the-happy-day-at-last-has-come-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17015285722710274612-eng",
          songNumber: "32",
          detailColumn: "32"
        },
        {
          name: "Our Mountain Home So Dear",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0330-our-mountain-home-so-dear-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0330-our-mountain-home-so-dear-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0330-our-mountain-home-so-dear-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/our-mountain-home-so-dear?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0330-our-mountain-home-so-dear-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "50279777031260137410-eng",
          songNumber: "33",
          detailColumn: "33"
        },
        {
          name: "O Ye Mountains High",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0340-o-ye-mountains-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0340-o-ye-mountains-high-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0340-o-ye-mountains-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-ye-mountains-high?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0340-o-ye-mountains-high-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14326699287150695570-eng",
          songNumber: "34",
          detailColumn: "34"
        },
        {
          name: "For the Strength of the Hills",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0350-for-the-strength-of-the-hills-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0350-for-the-strength-of-the-hills-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0350-for-the-strength-of-the-hills-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/for-the-strength-of-the-hills?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0350-for-the-strength-of-the-hills-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10384694285265984158-eng",
          songNumber: "35",
          detailColumn: "35"
        },
        {
          name: "They, the Builders of the Nation",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0360-they-the-builders-of-the-nation-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0360-they-the-builders-of-the-nation-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0360-they-the-builders-of-the-nation-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/they-the-builders-of-the-nation?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0360-they-the-builders-of-the-nation-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17442954195940387835-eng",
          songNumber: "36",
          detailColumn: "36"
        },
        {
          name: "The Wintry Day, Descending to Its Close",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0370-the-wintry-day-descending-to-its-close-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0370-the-wintry-day-descending-to-its-close-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0370-the-wintry-day-descending-to-its-close-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-wintry-day-descending-to-its-close?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0370-the-wintry-day-descending-to-its-close-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "30647875316746062890-eng",
          songNumber: "37",
          detailColumn: "37"
        },
        {
          name: "Come, All Ye Saints of Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0380-come-all-ye-saints-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0380-come-all-ye-saints-of-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0380-come-all-ye-saints-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-all-ye-saints-of-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0380-come-all-ye-saints-of-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "83720985821640800050-eng",
          songNumber: "38",
          detailColumn: "38"
        },
        {
          name: "O Saints of Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0390-o-saints-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0390-o-saints-of-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0390-o-saints-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-saints-of-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0390-o-saints-of-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "28782415461627959740-eng",
          songNumber: "39",
          detailColumn: "39"
        },
        {
          name: "Arise, O Glorious Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0400-arise-o-glorious-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0400-arise-o-glorious-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0400-arise-o-glorious-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/arise-o-glorious-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0400-arise-o-glorious-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "63637532675864415860-eng",
          songNumber: "40",
          detailColumn: "40"
        },
        {
          name: "Let Zion in Her Beauty Rise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0410-let-zion-in-her-beauty-rise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0410-let-zion-in-her-beauty-rise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0410-let-zion-in-her-beauty-rise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/let-zion-in-her-beauty-rise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0410-let-zion-in-her-beauty-rise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10271669161712085747-eng",
          songNumber: "41",
          detailColumn: "41"
        },
        {
          name: "Hail to the Brightness of Zion's Glad Morning!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0420-hail-to-the-brightness-of-zions-glad-morning-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0420-hail-to-the-brightness-of-zions-glad-morning-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0420-hail-to-the-brightness-of-zions-glad-morning-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/hail-to-the-brightness-of-zions-glad-morning?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0420-hail-to-the-brightness-of-zions-glad-morning-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10422405625017820403-eng",
          songNumber: "42",
          detailColumn: "42"
        },
        {
          name: "Zion Stands with Hills Surrounded",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0430-zion-stands-with-hills-surrounded-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0430-zion-stands-with-hills-surrounded-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0430-zion-stands-with-hills-surrounded-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/zion-stands-with-hills-surrounded?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0430-zion-stands-with-hills-surrounded-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12629995880081338296-eng",
          songNumber: "43",
          detailColumn: "43"
        },
        {
          name: "Beautiful Zion, Built Above",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0440-beautiful-zion-built-above-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0440-beautiful-zion-built-above-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0440-beautiful-zion-built-above-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/beautiful-zion-built-above?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0440-beautiful-zion-built-above-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "62013958084902516030-eng",
          songNumber: "44",
          detailColumn: "44"
        },
        {
          name: "Lead Me into Life Eternal",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0450-lead-me-into-life-eternal-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0450-lead-me-into-life-eternal-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0450-lead-me-into-life-eternal-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lead-me-into-life-eternal?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0450-lead-me-into-life-eternal-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0450-lead-me-into-life-eternal-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0450-lead-me-into-life-eternal-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "36552119643651810600-eng",
          songNumber: "45",
          detailColumn: "45"
        },
        {
          name: "Glorious Things of Thee Are Spoken",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0460-glorious-things-of-thee-are-spoken-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0460-glorious-things-of-thee-are-spoken-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0460-glorious-things-of-thee-are-spoken-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/glorious-things-of-thee-are-spoken?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0460-glorious-things-of-thee-are-spoken-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "54229436141970367850-eng",
          songNumber: "46",
          detailColumn: "46"
        },
        {
          name: "We Will Sing of Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0470-we-will-sing-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0470-we-will-sing-of-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0470-we-will-sing-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-will-sing-of-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0470-we-will-sing-of-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14598888392966085983-eng",
          songNumber: "47",
          detailColumn: "47"
        },
        {
          name: "Glorious Things Are Sung of Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0480-glorious-things-are-sung-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0480-glorious-things-are-sung-of-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0480-glorious-things-are-sung-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/glorious-things-are-sung-of-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0480-glorious-things-are-sung-of-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17718226801896596365-eng",
          songNumber: "48",
          detailColumn: "48"
        },
        {
          name: "Adam-ondi-Ahman",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0490-adam-ondi-ahman-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0490-adam-ondi-ahman-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0490-adam-ondi-ahman-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/adam-ondi-ahman?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0490-adam-ondi-ahman-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13199050556356770360-eng",
          songNumber: "49",
          detailColumn: "49"
        },
        {
          name: "Come, Thou Glorious Day of Promise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0500-come-thou-glorious-day-of-promise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0500-come-thou-glorious-day-of-promise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0500-come-thou-glorious-day-of-promise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-thou-glorious-day-of-promise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0500-come-thou-glorious-day-of-promise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "99704031692903210630-eng",
          songNumber: "50",
          detailColumn: "50"
        },
        {
          name: "Sons of Michael, He Approaches",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0510-sons-of-michael-he-approaches-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0510-sons-of-michael-he-approaches-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0510-sons-of-michael-he-approaches-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sons-of-michael-he-approaches?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0510-sons-of-michael-he-approaches-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "64233270111829921780-eng",
          songNumber: "51",
          detailColumn: "51"
        },
        {
          name: "The Day Dawn Is Breaking",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0520-the-day-dawn-is-breaking-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0520-the-day-dawn-is-breaking-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0520-the-day-dawn-is-breaking-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-day-dawn-is-breaking?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0520-the-day-dawn-is-breaking-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0520-the-day-dawn-is-breaking-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0520-the-day-dawn-is-breaking-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11744033461351388780-eng",
          songNumber: "52",
          detailColumn: "52"
        },
        {
          name: "Let Earth's Inhabitants Rejoice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0530-let-earths-inhabitants-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0530-let-earths-inhabitants-rejoice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0530-let-earths-inhabitants-rejoice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/let-earths-inhabitants-rejoice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0530-let-earths-inhabitants-rejoice-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13424090001149725143-eng",
          songNumber: "53",
          detailColumn: "53"
        },
        {
          name: "Behold, the Mountain of the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/behold-the-mountain-of-the-lord?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "10519563340804592660-eng",
          songNumber: "54",
          detailColumn: "54"
        },
        {
          name: "Lo, the Mighty God Appearing!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0550-lo-the-mighty-god-appearing-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0550-lo-the-mighty-god-appearing-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0550-lo-the-mighty-god-appearing-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lo-the-mighty-god-appearing?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0550-lo-the-mighty-god-appearing-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "61846305681599758690-eng",
          songNumber: "55",
          detailColumn: "55"
        },
        {
          name: "Softly Beams the Sacred Dawning",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0560-softly-beams-the-sacred-dawning-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0560-softly-beams-the-sacred-dawning-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0560-softly-beams-the-sacred-dawning-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/softly-beams-the-sacred-dawning?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0560-softly-beams-the-sacred-dawning-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "70693501292002890040-eng",
          songNumber: "56",
          detailColumn: "56"
        },
        {
          name: "We're Not Ashamed to Own Our Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0570-were-not-ashamed-to-own-our-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0570-were-not-ashamed-to-own-our-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0570-were-not-ashamed-to-own-our-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/were-not-ashamed-to-own-our-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0570-were-not-ashamed-to-own-our-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17767687615524481094-eng",
          songNumber: "57",
          detailColumn: "57"
        },
        {
          name: "Come, Ye Children of the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0580-come-ye-children-of-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0580-come-ye-children-of-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0580-come-ye-children-of-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-ye-children-of-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0580-come-ye-children-of-the-lord-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0580-come-ye-children-of-the-lord-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0580-come-ye-children-of-the-lord-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17203794585895802707-eng",
          songNumber: "58",
          detailColumn: "58"
        },
        {
          name: "Come, O Thou King of Kings",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0590-come-o-thou-king-of-kings-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0590-come-o-thou-king-of-kings-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0590-come-o-thou-king-of-kings-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-o-thou-king-of-kings?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0590-come-o-thou-king-of-kings-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0590-come-o-thou-king-of-kings-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0590-come-o-thou-king-of-kings-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13876259452418865408-eng",
          songNumber: "59",
          detailColumn: "59"
        },
        {
          name: "Battle Hymn of the Republic",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0600-battle-hymn-of-the-republic-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0600-battle-hymn-of-the-republic-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0600-battle-hymn-of-the-republic-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/battle-hymn-of-the-republic?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0600-battle-hymn-of-the-republic-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12909050173748103379-eng",
          songNumber: "60",
          detailColumn: "60"
        },
        {
          name: "Raise Your Voices to the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0610-raise-your-voices-to-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0610-raise-your-voices-to-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0610-raise-your-voices-to-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/raise-your-voices-to-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0610-raise-your-voices-to-the-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16060841575682655787-eng",
          songNumber: "61",
          detailColumn: "61"
        },
        {
          name: "All Creatures of Our God and King",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/all-creatures-of-our-god-and-king?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "12096310523428528039-eng",
          songNumber: "62",
          detailColumn: "62"
        },
        {
          name: "Great King of Heaven",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0630-great-king-of-heaven-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0630-great-king-of-heaven-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0630-great-king-of-heaven-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/great-king-of-heaven?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0630-great-king-of-heaven-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15029474236696816211-eng",
          songNumber: "63",
          detailColumn: "63"
        },
        {
          name: "On This Day of Joy and Gladness",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0640-on-this-day-of-joy-and-gladness-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0640-on-this-day-of-joy-and-gladness-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0640-on-this-day-of-joy-and-gladness-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/on-this-day-of-joy-and-gladness?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0640-on-this-day-of-joy-and-gladness-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18247440864567398652-eng",
          songNumber: "64",
          detailColumn: "64"
        },
        {
          name: "Come, All Ye Saints Who Dwell on Earth",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0650-come-all-ye-saints-who-dwell-on-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0650-come-all-ye-saints-who-dwell-on-earth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0650-come-all-ye-saints-who-dwell-on-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-all-ye-saints-who-dwell-on-earth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0650-come-all-ye-saints-who-dwell-on-earth-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58743388901058522880-eng",
          songNumber: "65",
          detailColumn: "65"
        },
        {
          name: "Rejoice, the Lord Is King!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0660-rejoice-the-lord-is-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0660-rejoice-the-lord-is-king-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0660-rejoice-the-lord-is-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rejoice-the-lord-is-king?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0660-rejoice-the-lord-is-king-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0660-rejoice-the-lord-is-king-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0660-rejoice-the-lord-is-king-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "60830926083618724540-eng",
          songNumber: "66",
          detailColumn: "66"
        },
        {
          name: "Glory to God on High",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0670-glory-to-god-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0670-glory-to-god-on-high-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0670-glory-to-god-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/glory-to-god-on-high?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0670-glory-to-god-on-high-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0670-glory-to-god-on-high-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0670-glory-to-god-on-high-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "93953073171358844310-eng",
          songNumber: "67",
          detailColumn: "67"
        },
        {
          name: "A Mighty Fortress Is Our God",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0680-a-mighty-fortress-is-our-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0680-a-mighty-fortress-is-our-god-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0680-a-mighty-fortress-is-our-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/a-mighty-fortress-is-our-god?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0680-a-mighty-fortress-is-our-god-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "38949745856736168590-eng",
          songNumber: "68",
          detailColumn: "68"
        },
        {
          name: "All Glory, Laud, and Honor",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0690-all-glory-laud-and-honor-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0690-all-glory-laud-and-honor-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0690-all-glory-laud-and-honor-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/all-glory-laud-and-honor?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0690-all-glory-laud-and-honor-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11384345509566286162-eng",
          songNumber: "69",
          detailColumn: "69"
        },
        {
          name: "Sing Praise to Him",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0700-sing-praise-to-him-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0700-sing-praise-to-him-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0700-sing-praise-to-him-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sing-praise-to-him?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0700-sing-praise-to-him-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17703688314641002501-eng",
          songNumber: "70",
          detailColumn: "70"
        },
        {
          name: "With Songs of Praise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0710-with-songs-of-praise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0710-with-songs-of-praise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0710-with-songs-of-praise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/with-songs-of-praise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0710-with-songs-of-praise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12780397658481419913-eng",
          songNumber: "71",
          detailColumn: "71"
        },
        {
          name: "Praise to the Lord, the Almighty",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/praise-to-the-lord-the-almighty?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0720-praise-to-the-lord-the-almighty-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15313771066987192587-eng",
          songNumber: "72",
          detailColumn: "72"
        },
        {
          name: "Praise the Lord with Heart and Voice",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0730-praise-the-lord-with-heart-and-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0730-praise-the-lord-with-heart-and-voice-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0730-praise-the-lord-with-heart-and-voice-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/praise-the-lord-with-heart-and-voice?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0730-praise-the-lord-with-heart-and-voice-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "80838738215100819100-eng",
          songNumber: "73",
          detailColumn: "73"
        },
        {
          name: "Praise Ye the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0740-praise-ye-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0740-praise-ye-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0740-praise-ye-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/praise-ye-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0740-praise-ye-the-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14306219863353152608-eng",
          songNumber: "74",
          detailColumn: "74"
        },
        {
          name: "In Hymns of Praise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0750-in-hymns-of-praise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0750-in-hymns-of-praise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0750-in-hymns-of-praise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-hymns-of-praise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0750-in-hymns-of-praise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12425356950802927172-eng",
          songNumber: "75",
          detailColumn: "75"
        },
        {
          name: "God of Our Fathers, We Come unto Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0760-god-of-our-fathers-we-come-unto-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0760-god-of-our-fathers-we-come-unto-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0760-god-of-our-fathers-we-come-unto-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-of-our-fathers-we-come-unto-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0760-god-of-our-fathers-we-come-unto-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "91245925984527915450-eng",
          songNumber: "76",
          detailColumn: "76"
        },
        {
          name: "Great Is the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0770-great-is-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0770-great-is-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0770-great-is-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/great-is-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0770-great-is-the-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12706971682208708789-eng",
          songNumber: "77",
          detailColumn: "77"
        },
        {
          name: "God of Our Fathers, Whose Almighty Hand",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-of-our-fathers-whose-almighty-hand?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0780-god-of-our-fathers-whose-almighty-hand-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "63930571099311902110-eng",
          songNumber: "78",
          detailColumn: "78"
        },
        {
          name: "With All the Power of Heart and Tongue",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0790-with-all-the-power-of-heart-and-tongue-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0790-with-all-the-power-of-heart-and-tongue-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0790-with-all-the-power-of-heart-and-tongue-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/with-all-the-power-of-heart-and-tongue?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0790-with-all-the-power-of-heart-and-tongue-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16313971620317479609-eng",
          songNumber: "79",
          detailColumn: "79"
        },
        {
          name: "God of Our Fathers, Known of Old",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0800-god-of-our-fathers-known-of-old-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0800-god-of-our-fathers-known-of-old-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0800-god-of-our-fathers-known-of-old-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-of-our-fathers-known-of-old?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0800-god-of-our-fathers-known-of-old-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "72517672603305578760-eng",
          songNumber: "80",
          detailColumn: "80"
        },
        {
          name: "Press Forward, Saints",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0810-press-forward-saints-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0810-press-forward-saints-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0810-press-forward-saints-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/press-forward-saints?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0810-press-forward-saints-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0810-press-forward-saints-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0810-press-forward-saints-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16240852518279752944-eng",
          songNumber: "81",
          detailColumn: "81"
        },
        {
          name: "For All the Saints",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/for-all-the-saints?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "49911684903663828590-eng",
          songNumber: "82",
          detailColumn: "82"
        },
        {
          name: "Guide Us, O Thou Great Jehovah",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/guide-us-o-thou-great-jehovah?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0830-guide-us-o-thou-great-jehovah-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14014121627684189847-eng",
          songNumber: "83",
          detailColumn: "83"
        },
        {
          name: "Faith of Our Fathers",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0840-faith-of-our-fathers-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0840-faith-of-our-fathers-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0840-faith-of-our-fathers-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/faith-of-our-fathers?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0840-faith-of-our-fathers-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18097981325060909062-eng",
          songNumber: "84",
          detailColumn: "84"
        },
        {
          name: "How Firm a Foundation",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0850-how-firm-a-foundation-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0850-how-firm-a-foundation-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0850-how-firm-a-foundation-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-firm-a-foundation?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0850-how-firm-a-foundation-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0850-how-firm-a-foundation-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0850-how-firm-a-foundation-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "92623360777107604270-eng",
          songNumber: "85",
          detailColumn: "85"
        },
        {
          name: "How Great Thou Art",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/how-great-thou-art?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "42665871230021616590-eng",
          songNumber: "86",
          detailColumn: "86"
        },
        {
          name: "God Is Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0870-god-is-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0870-god-is-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0870-god-is-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-is-love?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0870-god-is-love-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0870-god-is-love-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0870-god-is-love-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18322358187256549105-eng",
          songNumber: "87",
          detailColumn: "87"
        },
        {
          name: "Great God, Attend While Zion Sings",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0880-great-god-attend-while-zion-sings-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0880-great-god-attend-while-zion-sings-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0880-great-god-attend-while-zion-sings-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/great-god-attend-while-zion-sings?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0880-great-god-attend-while-zion-sings-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "67058779032536433170-eng",
          songNumber: "88",
          detailColumn: "88"
        },
        {
          name: "The Lord Is My Light",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0890-the-lord-is-my-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0890-the-lord-is-my-light-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0890-the-lord-is-my-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-lord-is-my-light?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0890-the-lord-is-my-light-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0890-the-lord-is-my-light-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0890-the-lord-is-my-light-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12126407988376817894-eng",
          songNumber: "89",
          detailColumn: "89"
        },
        {
          name: "From All That Dwell below the Skies",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0900-from-all-that-dwell-below-the-skies-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0900-from-all-that-dwell-below-the-skies-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0900-from-all-that-dwell-below-the-skies-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/from-all-that-dwell-below-the-skies?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0900-from-all-that-dwell-below-the-skies-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "89627488912707283800-eng",
          songNumber: "90",
          detailColumn: "90"
        },
        {
          name: "Father, Thy Children to Thee Now Raise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0910-father-thy-children-to-thee-now-raise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0910-father-thy-children-to-thee-now-raise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0910-father-thy-children-to-thee-now-raise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/father-thy-children-to-thee-now-raise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0910-father-thy-children-to-thee-now-raise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10413928226071093319-eng",
          songNumber: "91",
          detailColumn: "91"
        },
        {
          name: "For the Beauty of the Earth",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/for-the-beauty-of-the-earth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0920-for-the-beauty-of-the-earth-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14403453494439318840-eng",
          songNumber: "92",
          detailColumn: "92"
        },
        {
          name: "Prayer of Thanksgiving",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0930-prayer-of-thanksgiving-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0930-prayer-of-thanksgiving-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0930-prayer-of-thanksgiving-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/prayer-of-thanksgiving?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0930-prayer-of-thanksgiving-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0930-prayer-of-thanksgiving-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0930-prayer-of-thanksgiving-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10398967669138057784-eng",
          songNumber: "93",
          detailColumn: "93"
        },
        {
          name: "Come, Ye Thankful People",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0940-come-ye-thankful-people-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0940-come-ye-thankful-people-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0940-come-ye-thankful-people-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-ye-thankful-people?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0940-come-ye-thankful-people-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0940-come-ye-thankful-people-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0940-come-ye-thankful-people-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14913836867660842853-eng",
          songNumber: "94",
          detailColumn: "94"
        },
        {
          name: "Now Thank We All Our God",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0950-now-thank-we-all-our-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0950-now-thank-we-all-our-god-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0950-now-thank-we-all-our-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/now-thank-we-all-our-god?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0950-now-thank-we-all-our-god-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "74587143669767375400-eng",
          songNumber: "95",
          detailColumn: "95"
        },
        {
          name: "Dearest Children, God Is Near You",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0960-dearest-children-god-is-near-you-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0960-dearest-children-god-is-near-you-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0960-dearest-children-god-is-near-you-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/dearest-children-god-is-near-you?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0960-dearest-children-god-is-near-you-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0960-dearest-children-god-is-near-you-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0960-dearest-children-god-is-near-you-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14067988704495524935-eng",
          songNumber: "96",
          detailColumn: "96"
        },
        {
          name: "Lead, Kindly Light",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0970-lead-kindly-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0970-lead-kindly-light-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0970-lead-kindly-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lead-kindly-light?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0970-lead-kindly-light-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-0970-lead-kindly-light-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-0970-lead-kindly-light-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14941285996846458873-eng",
          songNumber: "97",
          detailColumn: "97"
        },
        {
          name: "I Need Thee Every Hour",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0980-i-need-thee-every-hour-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0980-i-need-thee-every-hour-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0980-i-need-thee-every-hour-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-need-thee-every-hour?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0980-i-need-thee-every-hour-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "21309002524833056800-eng",
          songNumber: "98",
          detailColumn: "98"
        },
        {
          name: "Nearer, Dear Savior, to Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0990-nearer-dear-savior-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0990-nearer-dear-savior-to-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-0990-nearer-dear-savior-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/nearer-dear-savior-to-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-0990-nearer-dear-savior-to-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14009931587035612715-eng",
          songNumber: "99",
          detailColumn: "99"
        },
        {
          name: "Nearer, My God, to Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1000-nearer-my-god-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1000-nearer-my-god-to-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1000-nearer-my-god-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/nearer-my-god-to-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1000-nearer-my-god-to-thee-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1000-nearer-my-god-to-thee-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1000-nearer-my-god-to-thee-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15864833420531317256-eng",
          songNumber: "100",
          detailColumn: "100"
        },
        {
          name: "Guide Me to Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1010-guide-me-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1010-guide-me-to-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1010-guide-me-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/guide-me-to-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1010-guide-me-to-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14470348850577331930-eng",
          songNumber: "101",
          detailColumn: "101"
        },
        {
          name: "Jesus, Lover of My Soul",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1020-jesus-lover-of-my-soul-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1020-jesus-lover-of-my-soul-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1020-jesus-lover-of-my-soul-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-lover-of-my-soul?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1020-jesus-lover-of-my-soul-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10283262954764329032-eng",
          songNumber: "102",
          detailColumn: "102"
        },
        {
          name: "Precious Savior, Dear Redeemer",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1030-precious-savior-dear-redeemer-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1030-precious-savior-dear-redeemer-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1030-precious-savior-dear-redeemer-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/precious-savior-dear-redeemer?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1030-precious-savior-dear-redeemer-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12264248656561344039-eng",
          songNumber: "103",
          detailColumn: "103"
        },
        {
          name: "Jesus, Savior, Pilot Me",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1040-jesus-savior-pilot-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1040-jesus-savior-pilot-me-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1040-jesus-savior-pilot-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-savior-pilot-me?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1040-jesus-savior-pilot-me-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1040-jesus-savior-pilot-me-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1040-jesus-savior-pilot-me-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14840867644515040736-eng",
          songNumber: "104",
          detailColumn: "104"
        },
        {
          name: "Master, the Tempest Is Raging",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1050-master-the-tempest-is-raging-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1050-master-the-tempest-is-raging-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1050-master-the-tempest-is-raging-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/master-the-tempest-is-raging?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1050-master-the-tempest-is-raging-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "20120500163418413000-eng",
          songNumber: "105",
          detailColumn: "105"
        },
        {
          name: "God Speed the Right",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1060-god-speed-the-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1060-god-speed-the-right-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1060-god-speed-the-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-speed-the-right?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1060-god-speed-the-right-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "64091812640823015140-eng",
          songNumber: "106",
          detailColumn: "106"
        },
        {
          name: "Lord, Accept Our True Devotion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1070-lord-accept-our-true-devotion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1070-lord-accept-our-true-devotion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1070-lord-accept-our-true-devotion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-accept-our-true-devotion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1070-lord-accept-our-true-devotion-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1070-lord-accept-our-true-devotion-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1070-lord-accept-our-true-devotion-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13988813404524414664-eng",
          songNumber: "107",
          detailColumn: "107"
        },
        {
          name: "The Lord Is My Shepherd",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1080-the-lord-is-my-shepherd-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1080-the-lord-is-my-shepherd-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1080-the-lord-is-my-shepherd-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-lord-is-my-shepherd?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1080-the-lord-is-my-shepherd-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1080-the-lord-is-my-shepherd-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1080-the-lord-is-my-shepherd-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "35147491117014100000-eng",
          songNumber: "108",
          detailColumn: "108"
        },
        {
          name: "The Lord My Pasture Will Prepare",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1090-the-lord-my-pasture-will-prepare-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1090-the-lord-my-pasture-will-prepare-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1090-the-lord-my-pasture-will-prepare-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-lord-my-pasture-will-prepare?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1090-the-lord-my-pasture-will-prepare-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "45074377408540226790-eng",
          songNumber: "109",
          detailColumn: "109"
        },
        {
          name: "Cast Thy Burden upon the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1100-cast-thy-burden-upon-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1100-cast-thy-burden-upon-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1100-cast-thy-burden-upon-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/cast-thy-burden-upon-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1100-cast-thy-burden-upon-the-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12584571583894636248-eng",
          songNumber: "110",
          detailColumn: "110"
        },
        {
          name: "Rock of Ages",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1110-rock-of-ages-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1110-rock-of-ages-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1110-rock-of-ages-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rock-of-ages?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1110-rock-of-ages-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "97429230135003531660-eng",
          songNumber: "111",
          detailColumn: "111"
        },
        {
          name: "Savior, Redeemer of My Soul",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1120-savior-redeemer-of-my-soul-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1120-savior-redeemer-of-my-soul-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1120-savior-redeemer-of-my-soul-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/savior-redeemer-of-my-soul?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1120-savior-redeemer-of-my-soul-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12874876150408270900-eng",
          songNumber: "112",
          detailColumn: "112"
        },
        {
          name: "Our Savior's Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1130-our-saviors-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1130-our-saviors-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1130-our-saviors-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/our-saviors-love?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1130-our-saviors-love-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1130-our-saviors-love-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1130-our-saviors-love-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "27030879355113327120-eng",
          songNumber: "113",
          detailColumn: "113"
        },
        {
          name: "Come unto Him",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1140-come-unto-him-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1140-come-unto-him-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1140-come-unto-him-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-unto-him?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1140-come-unto-him-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12142768148779916778-eng",
          songNumber: "114",
          detailColumn: "114"
        },
        {
          name: "Come, Ye Disconsolate",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1150-come-ye-disconsolate-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1150-come-ye-disconsolate-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1150-come-ye-disconsolate-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-ye-disconsolate?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1150-come-ye-disconsolate-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1150-come-ye-disconsolate-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1150-come-ye-disconsolate-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12327753389772805638-eng",
          songNumber: "115",
          detailColumn: "115"
        },
        {
          name: "Come, Follow Me",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1160-come-follow-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1160-come-follow-me-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1160-come-follow-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-follow-me?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1160-come-follow-me-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1160-come-follow-me-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1160-come-follow-me-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "50666227369967534970-eng",
          songNumber: "116",
          detailColumn: "116"
        },
        {
          name: "Come unto Jesus",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1170-come-unto-jesus-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1170-come-unto-jesus-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1170-come-unto-jesus-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-unto-jesus?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1170-come-unto-jesus-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1170-come-unto-jesus-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1170-come-unto-jesus-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17064841335373861367-eng",
          songNumber: "117",
          detailColumn: "117"
        },
        {
          name: "Ye Simple Souls Who Stray",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1180-ye-simple-souls-who-stray-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1180-ye-simple-souls-who-stray-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1180-ye-simple-souls-who-stray-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/ye-simple-souls-who-stray?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1180-ye-simple-souls-who-stray-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "57273391255720378350-eng",
          songNumber: "118",
          detailColumn: "118"
        },
        {
          name: "Come, We That Love the Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1190-come-we-that-love-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1190-come-we-that-love-the-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1190-come-we-that-love-the-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-we-that-love-the-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1190-come-we-that-love-the-lord-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1190-come-we-that-love-the-lord-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1190-come-we-that-love-the-lord-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "86955859071916231520-eng",
          songNumber: "119",
          detailColumn: "119"
        },
        {
          name: "Lean on My Ample Arm",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1200-lean-on-my-ample-arm-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1200-lean-on-my-ample-arm-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1200-lean-on-my-ample-arm-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lean-on-my-ample-arm?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1200-lean-on-my-ample-arm-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16061940480495735096-eng",
          songNumber: "120",
          detailColumn: "120"
        },
        {
          name: "I'm a Pilgrim, I'm a Stranger",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1210-im-a-pilgrim-im-a-stranger-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1210-im-a-pilgrim-im-a-stranger-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1210-im-a-pilgrim-im-a-stranger-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/im-a-pilgrim-im-a-stranger?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1210-im-a-pilgrim-im-a-stranger-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "21244501203256892470-eng",
          songNumber: "121",
          detailColumn: "121"
        },
        {
          name: "Though Deepening Trials",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1220-though-deepening-trials-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1220-though-deepening-trials-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1220-though-deepening-trials-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/though-deepening-trials?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1220-though-deepening-trials-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1220-though-deepening-trials-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1220-though-deepening-trials-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58582491160227283100-eng",
          songNumber: "122",
          detailColumn: "122"
        },
        {
          name: "Oh, May My Soul Commune with Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1230-oh-may-my-soul-commune-with-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1230-oh-may-my-soul-commune-with-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1230-oh-may-my-soul-commune-with-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-may-my-soul-commune-with-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1230-oh-may-my-soul-commune-with-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "77398836577644877010-eng",
          songNumber: "123",
          detailColumn: "123"
        },
        {
          name: "Be Still, My Soul",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink: null,
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "92517371057860415170-eng",
          songNumber: "124",
          detailColumn: "124"
        },
        {
          name: "How Gentle God's Commands",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1250-how-gentle-gods-commands-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1250-how-gentle-gods-commands-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1250-how-gentle-gods-commands-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-gentle-gods-commands?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1250-how-gentle-gods-commands-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1250-how-gentle-gods-commands-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1250-how-gentle-gods-commands-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11337004580563321310-eng",
          songNumber: "125",
          detailColumn: "125"
        },
        {
          name: "How Long, O Lord Most Holy and True",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1260-how-long-o-lord-most-holy-and-true-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1260-how-long-o-lord-most-holy-and-true-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1260-how-long-o-lord-most-holy-and-true-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-long-o-lord-most-holy-and-true?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1260-how-long-o-lord-most-holy-and-true-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12319449218690338665-eng",
          songNumber: "126",
          detailColumn: "126"
        },
        {
          name: "Does the Journey Seem Long?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1270-does-the-journey-seem-long-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1270-does-the-journey-seem-long-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1270-does-the-journey-seem-long-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/does-the-journey-seem-long?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1270-does-the-journey-seem-long-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13743858036526296951-eng",
          songNumber: "127",
          detailColumn: "127"
        },
        {
          name: "When Faith Endures",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1280-when-faith-endures-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1280-when-faith-endures-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1280-when-faith-endures-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/when-faith-endures?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1280-when-faith-endures-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1280-when-faith-endures-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1280-when-faith-endures-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "53317431433758850530-eng",
          songNumber: "128",
          detailColumn: "128"
        },
        {
          name: "Where Can I Turn for Peace?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1290-where-can-i-turn-for-peace-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1290-where-can-i-turn-for-peace-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1290-where-can-i-turn-for-peace-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/where-can-i-turn-for-peace?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1290-where-can-i-turn-for-peace-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1290-where-can-i-turn-for-peace-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1290-where-can-i-turn-for-peace-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18185769653310248416-eng",
          songNumber: "129",
          detailColumn: "129"
        },
        {
          name: "Be Thou Humble",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1300-be-thou-humble-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1300-be-thou-humble-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1300-be-thou-humble-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/be-thou-humble?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1300-be-thou-humble-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1300-be-thou-humble-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1300-be-thou-humble-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17874563342862922582-eng",
          songNumber: "130",
          detailColumn: "130"
        },
        {
          name: "More Holiness Give Me",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1310-more-holiness-give-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1310-more-holiness-give-me-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1310-more-holiness-give-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/more-holiness-give-me?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1310-more-holiness-give-me-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1310-more-holiness-give-me-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1310-more-holiness-give-me-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12287993588429686332-eng",
          songNumber: "131",
          detailColumn: "131"
        },
        {
          name: "God Is in His Holy Temple",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1320-god-is-in-his-holy-temple-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1320-god-is-in-his-holy-temple-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1320-god-is-in-his-holy-temple-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-is-in-his-holy-temple?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1320-god-is-in-his-holy-temple-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11909849441310136009-eng",
          songNumber: "132",
          detailColumn: "132"
        },
        {
          name: "Father in Heaven",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1330-father-in-heaven-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1330-father-in-heaven-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1330-father-in-heaven-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/father-in-heaven?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1330-father-in-heaven-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15100906510559676990-eng",
          songNumber: "133",
          detailColumn: "133"
        },
        {
          name: "I Believe in Christ",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1340-i-believe-in-christ-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1340-i-believe-in-christ-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1340-i-believe-in-christ-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-believe-in-christ?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1340-i-believe-in-christ-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1340-i-believe-in-christ-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1340-i-believe-in-christ-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11043848574329268466-eng",
          songNumber: "134",
          detailColumn: "134"
        },
        {
          name: "My Redeemer Lives",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1350-my-redeemer-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1350-my-redeemer-lives-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1350-my-redeemer-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/my-redeemer-lives?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1350-my-redeemer-lives-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1350-my-redeemer-lives-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1350-my-redeemer-lives-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14992386220933791464-eng",
          songNumber: "135",
          detailColumn: "135"
        },
        {
          name: "I Know That My Redeemer Lives",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-know-that-my-redeemer-lives?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1360-i-know-that-my-redeemer-lives-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "68834352194346462690-eng",
          songNumber: "136",
          detailColumn: "136"
        },
        {
          name: "Testimony",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1370-testimony-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1370-testimony-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1370-testimony-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/testimony?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1370-testimony-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1370-testimony-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1370-testimony-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12265711566714536280-eng",
          songNumber: "137",
          detailColumn: "137"
        },
        {
          name: "Bless Our Fast, We Pray",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1380-bless-our-fast-we-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1380-bless-our-fast-we-pray-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1380-bless-our-fast-we-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/bless-our-fast-we-pray?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1380-bless-our-fast-we-pray-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1380-bless-our-fast-we-pray-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1380-bless-our-fast-we-pray-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13963635380333496433-eng",
          songNumber: "138",
          detailColumn: "138"
        },
        {
          name: "In Fasting We Approach Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1390-in-fasting-we-approach-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1390-in-fasting-we-approach-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1390-in-fasting-we-approach-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-fasting-we-approach-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1390-in-fasting-we-approach-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "98810758667942692990-eng",
          songNumber: "139",
          detailColumn: "139"
        },
        {
          name: "Did You Think to Pray?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1400-did-you-think-to-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1400-did-you-think-to-pray-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1400-did-you-think-to-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/did-you-think-to-pray?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1400-did-you-think-to-pray-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1400-did-you-think-to-pray-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1400-did-you-think-to-pray-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "56344060875155789620-eng",
          songNumber: "140",
          detailColumn: "140"
        },
        {
          name: "Jesus, the Very Thought of Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-the-very-thought-of-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1410-jesus-the-very-thought-of-thee-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14674414691025600642-eng",
          songNumber: "141",
          detailColumn: "141"
        },
        {
          name: "Sweet Hour of Prayer",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1420-sweet-hour-of-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1420-sweet-hour-of-prayer-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1420-sweet-hour-of-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sweet-hour-of-prayer?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1420-sweet-hour-of-prayer-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1420-sweet-hour-of-prayer-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1420-sweet-hour-of-prayer-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "57001200007330320070-eng",
          songNumber: "142",
          detailColumn: "142"
        },
        {
          name: "Let the Holy Spirit Guide",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/let-the-holy-spirit-guide?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "79774140572576513440-eng",
          songNumber: "143",
          detailColumn: "143"
        },
        {
          name: "Secret Prayer",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1440-secret-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1440-secret-prayer-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1440-secret-prayer-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/secret-prayer?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1440-secret-prayer-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1440-secret-prayer-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1440-secret-prayer-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "46440378843636550250-eng",
          songNumber: "144",
          detailColumn: "144"
        },
        {
          name: "Prayer Is the Soul's Sincere Desire",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/prayer-is-the-souls-sincere-desire?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1450-prayer-is-the-souls-sincere-desire-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "50372185058550130130-eng",
          songNumber: "145",
          detailColumn: "145"
        },
        {
          name: "Gently Raise the Sacred Strain",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/gently-raise-the-sacred-strain?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1460-gently-raise-the-sacred-strain-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17199595006311989796-eng",
          songNumber: "146",
          detailColumn: "146"
        },
        {
          name: "Sweet Is the Work",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1470-sweet-is-the-work-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1470-sweet-is-the-work-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1470-sweet-is-the-work-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sweet-is-the-work?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1470-sweet-is-the-work-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1470-sweet-is-the-work-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1470-sweet-is-the-work-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12161830107041804810-eng",
          songNumber: "147",
          detailColumn: "147"
        },
        {
          name: "Sabbath Day",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1480-sabbath-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1480-sabbath-day-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1480-sabbath-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sabbath-day?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1480-sabbath-day-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14971906328610782138-eng",
          songNumber: "148",
          detailColumn: "148"
        },
        {
          name: "As the Dew from Heaven Distilling",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1490-as-the-dew-from-heaven-distilling-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1490-as-the-dew-from-heaven-distilling-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1490-as-the-dew-from-heaven-distilling-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-the-dew-from-heaven-distilling?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1490-as-the-dew-from-heaven-distilling-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14294971522452136475-eng",
          songNumber: "149",
          detailColumn: "149"
        },
        {
          name: "O Thou Kind and Gracious Father",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1500-o-thou-kind-and-gracious-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1500-o-thou-kind-and-gracious-father-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1500-o-thou-kind-and-gracious-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-thou-kind-and-gracious-father?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1500-o-thou-kind-and-gracious-father-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "95355605189663184600-eng",
          songNumber: "150",
          detailColumn: "150"
        },
        {
          name: "We Meet, Dear Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1510-we-meet-dear-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1510-we-meet-dear-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1510-we-meet-dear-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-meet-dear-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1510-we-meet-dear-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14534826360120556273-eng",
          songNumber: "151",
          detailColumn: "151"
        },
        {
          name: "God Be with You Till We Meet Again",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-be-with-you-till-we-meet-again?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1520-god-be-with-you-till-we-meet-again-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17970111561370729304-eng",
          songNumber: "152",
          detailColumn: "152"
        },
        {
          name: "Lord, We Ask Thee Ere We Part",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-we-ask-thee-ere-we-part?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1530-lord-we-ask-thee-ere-we-part-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "40856459800412656050-eng",
          songNumber: "153",
          detailColumn: "153"
        },
        {
          name: "Father, This Hour Has Been One of Joy",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1540-father-this-hour-has-been-one-of-joy-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1540-father-this-hour-has-been-one-of-joy-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1540-father-this-hour-has-been-one-of-joy-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/father-this-hour-has-been-one-of-joy?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1540-father-this-hour-has-been-one-of-joy-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13772499131734958050-eng",
          songNumber: "154",
          detailColumn: "154"
        },
        {
          name: "We Have Partaken of Thy Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1550-we-have-partaken-of-thy-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1550-we-have-partaken-of-thy-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1550-we-have-partaken-of-thy-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-have-partaken-of-thy-love?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1550-we-have-partaken-of-thy-love-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "62728835644908756100-eng",
          songNumber: "155",
          detailColumn: "155"
        },
        {
          name: "Sing We Now at Parting",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1560-sing-we-now-at-parting-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1560-sing-we-now-at-parting-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1560-sing-we-now-at-parting-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sing-we-now-at-parting?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1560-sing-we-now-at-parting-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1560-sing-we-now-at-parting-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1560-sing-we-now-at-parting-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13150855371380334883-eng",
          songNumber: "156",
          detailColumn: "156"
        },
        {
          name: "Thy Spirit, Lord, Has Stirred Our Souls",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1570-thy-spirit-lord-has-stirred-our-souls-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1570-thy-spirit-lord-has-stirred-our-souls-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1570-thy-spirit-lord-has-stirred-our-souls-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thy-spirit-lord-has-stirred-our-souls?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1570-thy-spirit-lord-has-stirred-our-souls-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15034864459457616455-eng",
          songNumber: "157",
          detailColumn: "157"
        },
        {
          name: "Before Thee, Lord, I Bow My Head",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1580-before-thee-lord-i-bow-my-head-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1580-before-thee-lord-i-bow-my-head-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1580-before-thee-lord-i-bow-my-head-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/before-thee-lord-i-bow-my-head?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1580-before-thee-lord-i-bow-my-head-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13428853392332633402-eng",
          songNumber: "158",
          detailColumn: "158"
        },
        {
          name: "Now the Day Is Over",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1590-now-the-day-is-over-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1590-now-the-day-is-over-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1590-now-the-day-is-over-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/now-the-day-is-over?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1590-now-the-day-is-over-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11279475884658517300-eng",
          songNumber: "159",
          detailColumn: "159"
        },
        {
          name: "Softly Now the Light of Day",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1600-softly-now-the-light-of-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1600-softly-now-the-light-of-day-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1600-softly-now-the-light-of-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/softly-now-the-light-of-day?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1600-softly-now-the-light-of-day-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "32864395541156739490-eng",
          songNumber: "160",
          detailColumn: "160"
        },
        {
          name: "The Lord Be with Us",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1610-the-lord-be-with-us-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1610-the-lord-be-with-us-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1610-the-lord-be-with-us-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-lord-be-with-us?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1610-the-lord-be-with-us-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17841244455014325766-eng",
          songNumber: "161",
          detailColumn: "161"
        },
        {
          name: "Lord, We Come before Thee Now",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1620-lord-we-come-before-thee-now-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1620-lord-we-come-before-thee-now-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1620-lord-we-come-before-thee-now-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-we-come-before-thee-now?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1620-lord-we-come-before-thee-now-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1620-lord-we-come-before-thee-now-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1620-lord-we-come-before-thee-now-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "88461608679988506910-eng",
          songNumber: "162",
          detailColumn: "162"
        },
        {
          name: "Lord, Dismiss Us with Thy Blessing",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1630-lord-dismiss-us-with-thy-blessing-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1630-lord-dismiss-us-with-thy-blessing-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1630-lord-dismiss-us-with-thy-blessing-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-dismiss-us-with-thy-blessing?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1630-lord-dismiss-us-with-thy-blessing-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15773974078452230908-eng",
          songNumber: "163",
          detailColumn: "163"
        },
        {
          name: "Great God, to Thee My Evening Song",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1640-great-god-to-thee-my-evening-song-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1640-great-god-to-thee-my-evening-song-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1640-great-god-to-thee-my-evening-song-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/great-god-to-thee-my-evening-song?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1640-great-god-to-thee-my-evening-song-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "24491562686932852950-eng",
          songNumber: "164",
          detailColumn: "164"
        },
        {
          name: "Abide with Me; 'Tis Eventide",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1650-abide-with-me-tis-eventide-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1650-abide-with-me-tis-eventide-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1650-abide-with-me-tis-eventide-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/abide-with-me-tis-eventide?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1650-abide-with-me-tis-eventide-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1650-abide-with-me-tis-eventide-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1650-abide-with-me-tis-eventide-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14036413657778075628-eng",
          songNumber: "165",
          detailColumn: "165"
        },
        {
          name: "Abide with Me!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1660-abide-with-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1660-abide-with-me-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1660-abide-with-me-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/abide-with-me?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1660-abide-with-me-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1660-abide-with-me-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1660-abide-with-me-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "79882413644477594140-eng",
          songNumber: "166",
          detailColumn: "166"
        },
        {
          name: "Come, Let Us Sing an Evening Hymn",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1670-come-let-us-sing-an-evening-hymn-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1670-come-let-us-sing-an-evening-hymn-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1670-come-let-us-sing-an-evening-hymn-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-let-us-sing-an-evening-hymn?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1670-come-let-us-sing-an-evening-hymn-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15992779575965331908-eng",
          songNumber: "167",
          detailColumn: "167"
        },
        {
          name: "As the Shadows Fall",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1680-as-the-shadows-fall-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1680-as-the-shadows-fall-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1680-as-the-shadows-fall-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-the-shadows-fall?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1680-as-the-shadows-fall-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14746732886639783171-eng",
          songNumber: "168",
          detailColumn: "168"
        },
        {
          name: "As Now We Take the Sacrament",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1690-as-now-we-take-the-sacrament-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1690-as-now-we-take-the-sacrament-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1690-as-now-we-take-the-sacrament-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-now-we-take-the-sacrament?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1690-as-now-we-take-the-sacrament-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15053108406133447552-eng",
          songNumber: "169",
          detailColumn: "169"
        },
        {
          name: "God, Our Father, Hear Us Pray",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1700-god-our-father-hear-us-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1700-god-our-father-hear-us-pray-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1700-god-our-father-hear-us-pray-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-our-father-hear-us-pray?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1700-god-our-father-hear-us-pray-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1700-god-our-father-hear-us-pray-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1700-god-our-father-hear-us-pray-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18247162663172520295-eng",
          songNumber: "170",
          detailColumn: "170"
        },
        {
          name: "With Humble Heart",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1710-with-humble-heart-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1710-with-humble-heart-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1710-with-humble-heart-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/with-humble-heart?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1710-with-humble-heart-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "75357103157366473530-eng",
          songNumber: "171",
          detailColumn: "171"
        },
        {
          name: "In Humility, Our Savior",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1720-in-humility-our-savior-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1720-in-humility-our-savior-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1720-in-humility-our-savior-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-humility-our-savior?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1720-in-humility-our-savior-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1720-in-humility-our-savior-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1720-in-humility-our-savior-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10233751480537990907-eng",
          songNumber: "172",
          detailColumn: "172"
        },
        {
          name: "While of These Emblems We Partake",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/while-of-these-emblems-we-partake-173?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1730-while-of-these-emblems-we-partake-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12471117130582109418-eng",
          songNumber: "173",
          detailColumn: "173"
        },
        {
          name: "While of These Emblems We Partake",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1740-while-of-these-emblems-we-partake-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1740-while-of-these-emblems-we-partake-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1740-while-of-these-emblems-we-partake-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/while-of-these-emblems-we-partake-174?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1740-while-of-these-emblems-we-partake-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12335119450209055066-eng",
          songNumber: "174",
          detailColumn: "174"
        },
        {
          name: "O God, the Eternal Father",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1750-o-god-the-eternal-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1750-o-god-the-eternal-father-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1750-o-god-the-eternal-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-god-the-eternal-father?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1750-o-god-the-eternal-father-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1750-o-god-the-eternal-father-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1750-o-god-the-eternal-father-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "33928723816685767100-eng",
          songNumber: "175",
          detailColumn: "175"
        },
        {
          name: "'Tis Sweet to Sing the Matchless Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1760-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1760-tis-sweet-to-sing-the-matchless-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1760-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/tis-sweet-to-sing-the-matchless-love-176?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1760-tis-sweet-to-sing-the-matchless-love-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12661087223257584067-eng",
          songNumber: "176",
          detailColumn: "176"
        },
        {
          name: "'Tis Sweet To Sing the Matchless Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/tis-sweet-to-sing-the-matchless-love-177?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1770-tis-sweet-to-sing-the-matchless-love-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "94652031015013084890-eng",
          songNumber: "177",
          detailColumn: "177"
        },
        {
          name: "O Lord of Hosts",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1780-o-lord-of-hosts-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1780-o-lord-of-hosts-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1780-o-lord-of-hosts-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-lord-of-hosts?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1780-o-lord-of-hosts-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15577774570730634263-eng",
          songNumber: "178",
          detailColumn: "178"
        },
        {
          name: "Again, Our Dear Redeeming Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1790-again-our-dear-redeeming-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1790-again-our-dear-redeeming-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1790-again-our-dear-redeeming-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/again-our-dear-redeeming-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1790-again-our-dear-redeeming-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "39398080931698340040-eng",
          songNumber: "179",
          detailColumn: "179"
        },
        {
          name: "Father in Heaven, We Do Believe",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1800-father-in-heaven-we-do-believe-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1800-father-in-heaven-we-do-believe-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1800-father-in-heaven-we-do-believe-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/father-in-heaven-we-do-believe?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1800-father-in-heaven-we-do-believe-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13350976101451766967-eng",
          songNumber: "180",
          detailColumn: "180"
        },
        {
          name: "Jesus of Nazareth, Savior and King",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1810-jesus-of-nazareth-savior-and-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1810-jesus-of-nazareth-savior-and-king-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1810-jesus-of-nazareth-savior-and-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-of-nazareth-savior-and-king?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1810-jesus-of-nazareth-savior-and-king-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "31318445720146082460-eng",
          songNumber: "181",
          detailColumn: "181"
        },
        {
          name: "We'll Sing All Hail to Jesus' Name",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/well-sing-all-hail-to-jesus-name?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1820-well-sing-all-hail-to-jesus-name-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10394933404629638550-eng",
          songNumber: "182",
          detailColumn: "182"
        },
        {
          name: "In Remembrance of Thy Suffering",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1830-in-remembrance-of-thy-suffering-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1830-in-remembrance-of-thy-suffering-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1830-in-remembrance-of-thy-suffering-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-remembrance-of-thy-suffering?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1830-in-remembrance-of-thy-suffering-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12344128667760254428-eng",
          songNumber: "183",
          detailColumn: "183"
        },
        {
          name: "Upon the Cross of Calvary",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1840-upon-the-cross-of-calvary-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1840-upon-the-cross-of-calvary-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1840-upon-the-cross-of-calvary-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/upon-the-cross-of-calvary?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1840-upon-the-cross-of-calvary-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16186858617891982722-eng",
          songNumber: "184",
          detailColumn: "184"
        },
        {
          name: "Reverently and Meekly Now",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1850-reverently-and-meekly-now-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1850-reverently-and-meekly-now-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1850-reverently-and-meekly-now-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/reverently-and-meekly-now?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1850-reverently-and-meekly-now-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "59051531354263784170-eng",
          songNumber: "185",
          detailColumn: "185"
        },
        {
          name: "Again We Meet around the Board",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1860-again-we-meet-around-the-board-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1860-again-we-meet-around-the-board-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1860-again-we-meet-around-the-board-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/again-we-meet-around-the-board?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1860-again-we-meet-around-the-board-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17288582779268466244-eng",
          songNumber: "186",
          detailColumn: "186"
        },
        {
          name: "God Loved Us, So He Sent His Son",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-loved-us-so-he-sent-his-son?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1870-god-loved-us-so-he-sent-his-son-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13232856245603337311-eng",
          songNumber: "187",
          detailColumn: "187"
        },
        {
          name: "Thy Will, O Lord, Be Done",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1880-thy-will-o-lord-be-done-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1880-thy-will-o-lord-be-done-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1880-thy-will-o-lord-be-done-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thy-will-o-lord-be-done?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1880-thy-will-o-lord-be-done-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "47527071407028954960-eng",
          songNumber: "188",
          detailColumn: "188"
        },
        {
          name: "O Thou, Before the World Began",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1890-o-thou-before-the-world-began-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1890-o-thou-before-the-world-began-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1890-o-thou-before-the-world-began-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-thou-before-the-world-began?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1890-o-thou-before-the-world-began-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10709183067713713329-eng",
          songNumber: "189",
          detailColumn: "189"
        },
        {
          name: "In Memory of the Crucified",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1900-in-memory-of-the-crucified-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1900-in-memory-of-the-crucified-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1900-in-memory-of-the-crucified-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-memory-of-the-crucified?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1900-in-memory-of-the-crucified-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17014718981051044245-eng",
          songNumber: "190",
          detailColumn: "190"
        },
        {
          name: "Behold the Great Redeemer Die",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1910-behold-the-great-redeemer-die-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1910-behold-the-great-redeemer-die-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1910-behold-the-great-redeemer-die-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/behold-the-great-redeemer-die?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1910-behold-the-great-redeemer-die-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1910-behold-the-great-redeemer-die-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1910-behold-the-great-redeemer-die-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "67030293884120223680-eng",
          songNumber: "191",
          detailColumn: "191"
        },
        {
          name: "He Died! The Great Redeemer Died",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1920-he-died-the-great-redeemer-died-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1920-he-died-the-great-redeemer-died-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1920-he-died-the-great-redeemer-died-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/he-died-the-great-redeemer-died?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1920-he-died-the-great-redeemer-died-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13253970914486029349-eng",
          songNumber: "192",
          detailColumn: "192"
        },
        {
          name: "I Stand All Amazed",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1930-i-stand-all-amazed-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1930-i-stand-all-amazed-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1930-i-stand-all-amazed-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-stand-all-amazed?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1930-i-stand-all-amazed-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1930-i-stand-all-amazed-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1930-i-stand-all-amazed-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17726424741882356049-eng",
          songNumber: "193",
          detailColumn: "193"
        },
        {
          name: "There Is a Green Hill Far Away",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/there-is-a-green-hill-far-away?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1940-there-is-a-green-hill-far-away-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "63425622332572761790-eng",
          songNumber: "194",
          detailColumn: "194"
        },
        {
          name: "How Great the Wisdom and the Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-great-the-wisdom-and-the-love?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1950-how-great-the-wisdom-and-the-love-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58469375691320394300-eng",
          songNumber: "195",
          detailColumn: "195"
        },
        {
          name: "Jesus, Once of Humble Birth",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1960-jesus-once-of-humble-birth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1960-jesus-once-of-humble-birth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1960-jesus-once-of-humble-birth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-once-of-humble-birth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1960-jesus-once-of-humble-birth-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1960-jesus-once-of-humble-birth-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1960-jesus-once-of-humble-birth-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12797217557525858744-eng",
          songNumber: "196",
          detailColumn: "196"
        },
        {
          name: "O Savior, Thou Who Wearest a Crown",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1970-o-savior-thou-who-wearest-a-crown-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1970-o-savior-thou-who-wearest-a-crown-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1970-o-savior-thou-who-wearest-a-crown-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-savior-thou-who-wearest-a-crown?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1970-o-savior-thou-who-wearest-a-crown-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12512134476252923286-eng",
          songNumber: "197",
          detailColumn: "197"
        },
        {
          name: "That Easter Morn",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1980-that-easter-morn-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1980-that-easter-morn-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1980-that-easter-morn-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/that-easter-morn?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1980-that-easter-morn-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "56763450876519085140-eng",
          songNumber: "198",
          detailColumn: "198"
        },
        {
          name: "He Is Risen!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1990-he-is-risen-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1990-he-is-risen-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-1990-he-is-risen-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/he-is-risen?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-1990-he-is-risen-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-1990-he-is-risen-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-1990-he-is-risen-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "37655703349899552790-eng",
          songNumber: "199",
          detailColumn: "199"
        },
        {
          name: "Christ the Lord Is Risen Today",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/christ-the-lord-is-risen-today?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2000-christ-the-lord-is-risen-today-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "32399854908845013700-eng",
          songNumber: "200",
          detailColumn: "200"
        },
        {
          name: "Joy to the World",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2010-joy-to-the-world-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2010-joy-to-the-world-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2010-joy-to-the-world-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/joy-to-the-world?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2010-joy-to-the-world-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2010-joy-to-the-world-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2010-joy-to-the-world-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12602879731770928443-eng",
          songNumber: "201",
          detailColumn: "201"
        },
        {
          name: "Oh, Come, All Ye Faithful",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2020-oh-come-all-ye-faithful-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2020-oh-come-all-ye-faithful-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2020-oh-come-all-ye-faithful-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-come-all-ye-faithful?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2020-oh-come-all-ye-faithful-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2020-oh-come-all-ye-faithful-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2020-oh-come-all-ye-faithful-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "70803423043746738400-eng",
          songNumber: "202",
          detailColumn: "202"
        },
        {
          name: "Angels We Have Heard on High",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2030-angels-we-have-heard-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2030-angels-we-have-heard-on-high-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2030-angels-we-have-heard-on-high-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/angels-we-have-heard-on-high?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2030-angels-we-have-heard-on-high-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10720282317948816663-eng",
          songNumber: "203",
          detailColumn: "203"
        },
        {
          name: "Silent Night",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2040-silent-night-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2040-silent-night-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2040-silent-night-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/silent-night?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2040-silent-night-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2040-silent-night-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2040-silent-night-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15464787400167200412-eng",
          songNumber: "204",
          detailColumn: "204"
        },
        {
          name: "Once in Royal David's City",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2050-once-in-royal-davids-city-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2050-once-in-royal-davids-city-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2050-once-in-royal-davids-city-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/once-in-royal-davids-city?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2050-once-in-royal-davids-city-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "54350771356339603570-eng",
          songNumber: "205",
          detailColumn: "205"
        },
        {
          name: "Away in a Manger",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2060-away-in-a-manger-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2060-away-in-a-manger-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2060-away-in-a-manger-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/away-in-a-manger?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2060-away-in-a-manger-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2060-away-in-a-manger-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2060-away-in-a-manger-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16865215611403631609-eng",
          songNumber: "206",
          detailColumn: "206"
        },
        {
          name: "It Came upon the Midnight Clear",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2070-it-came-upon-the-midnight-clear-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2070-it-came-upon-the-midnight-clear-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2070-it-came-upon-the-midnight-clear-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/it-came-upon-the-midnight-clear?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2070-it-came-upon-the-midnight-clear-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16380873184092887196-eng",
          songNumber: "207",
          detailColumn: "207"
        },
        {
          name: "O Little Town of Bethlehem",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2080-o-little-town-of-bethlehem-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2080-o-little-town-of-bethlehem-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2080-o-little-town-of-bethlehem-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-little-town-of-bethlehem?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2080-o-little-town-of-bethlehem-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2080-o-little-town-of-bethlehem-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2080-o-little-town-of-bethlehem-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "49038932500684530200-eng",
          songNumber: "208",
          detailColumn: "208"
        },
        {
          name: "Hark! The Herald Angels Sing",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2090-hark-the-herald-angels-sing-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2090-hark-the-herald-angels-sing-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2090-hark-the-herald-angels-sing-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/hark-the-herald-angels-sing?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2090-hark-the-herald-angels-sing-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2090-hark-the-herald-angels-sing-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2090-hark-the-herald-angels-sing-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "87540865047633981840-eng",
          songNumber: "209",
          detailColumn: "209"
        },
        {
          name: "With Wondering Awe",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2100-with-wondering-awe-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2100-with-wondering-awe-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2100-with-wondering-awe-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/with-wondering-awe?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2100-with-wondering-awe-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11123964386928317606-eng",
          songNumber: "210",
          detailColumn: "210"
        },
        {
          name: "While Shepherds Watched Their Flocks",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2110-while-shepherds-watched-their-flocks-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2110-while-shepherds-watched-their-flocks-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2110-while-shepherds-watched-their-flocks-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/while-shepherds-watched-their-flocks?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2110-while-shepherds-watched-their-flocks-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15697508212868610300-eng",
          songNumber: "211",
          detailColumn: "211"
        },
        {
          name: "Far, Far Away on Judea's Plains",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/far-far-away-on-judeas-plains?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2120-far-far-away-on-judeas-plains-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11510478595683076593-eng",
          songNumber: "212",
          detailColumn: "212"
        },
        {
          name: "The First Noel",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2130-the-first-noel-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2130-the-first-noel-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2130-the-first-noel-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-first-noel?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2130-the-first-noel-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2130-the-first-noel-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2130-the-first-noel-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "34280999801573759200-eng",
          songNumber: "213",
          detailColumn: "213"
        },
        {
          name: "I Heard the Bells on Christmas Day",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2140-i-heard-the-bells-on-christmas-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2140-i-heard-the-bells-on-christmas-day-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2140-i-heard-the-bells-on-christmas-day-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-heard-the-bells-on-christmas-day?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2140-i-heard-the-bells-on-christmas-day-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "21135043481503987510-eng",
          songNumber: "214",
          detailColumn: "214"
        },
        {
          name: "Ring Out, Wild Bells",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2150-ring-out-wild-bells-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2150-ring-out-wild-bells-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2150-ring-out-wild-bells-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/ring-out-wild-bells?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2150-ring-out-wild-bells-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "67750990031090734520-eng",
          songNumber: "215",
          detailColumn: "215"
        },
        {
          name: "We Are Sowing",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2160-we-are-sowing-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2160-we-are-sowing-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2160-we-are-sowing-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-are-sowing?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2160-we-are-sowing-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "98307401003861333920-eng",
          songNumber: "216",
          detailColumn: "216"
        },
        {
          name: "Come, Let Us Anew",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2170-come-let-us-anew-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2170-come-let-us-anew-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2170-come-let-us-anew-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-let-us-anew?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2170-come-let-us-anew-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15349482895224727212-eng",
          songNumber: "217",
          detailColumn: "217"
        },
        {
          name: "We Give Thee But Thine Own",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2180-we-give-thee-but-thine-own-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2180-we-give-thee-but-thine-own-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2180-we-give-thee-but-thine-own-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-give-thee-but-thine-own?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2180-we-give-thee-but-thine-own-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13030791160467714057-eng",
          songNumber: "218",
          detailColumn: "218"
        },
        {
          name: "Because I Have Been Given Much",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/because-i-have-been-given-much?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "53503805031415158590-eng",
          songNumber: "219",
          detailColumn: "219"
        },
        {
          name: "Lord, I Would Follow Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2200-lord-i-would-follow-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2200-lord-i-would-follow-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2200-lord-i-would-follow-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-i-would-follow-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2200-lord-i-would-follow-thee-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2200-lord-i-would-follow-thee-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2200-lord-i-would-follow-thee-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "72564350254955300250-eng",
          songNumber: "220",
          detailColumn: "220"
        },
        {
          name: "Dear to the Heart of the Shepherd",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2210-dear-to-the-heart-of-the-shepherd-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2210-dear-to-the-heart-of-the-shepherd-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2210-dear-to-the-heart-of-the-shepherd-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/dear-to-the-heart-of-the-shepherd?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2210-dear-to-the-heart-of-the-shepherd-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "98884391729714237870-eng",
          songNumber: "221",
          detailColumn: "221"
        },
        {
          name: "Hear Thou Our Hymn, O Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2220-hear-thou-our-hymn-o-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2220-hear-thou-our-hymn-o-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2220-hear-thou-our-hymn-o-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/hear-thou-our-hymn-o-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2220-hear-thou-our-hymn-o-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "73712777355927349720-eng",
          songNumber: "222",
          detailColumn: "222"
        },
        {
          name: "Have I Done Any Good?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2230-have-i-done-any-good-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2230-have-i-done-any-good-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2230-have-i-done-any-good-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/have-i-done-any-good?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2230-have-i-done-any-good-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2230-have-i-done-any-good-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2230-have-i-done-any-good-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "65054120451817910060-eng",
          songNumber: "223",
          detailColumn: "223"
        },
        {
          name: "I Have Work Enough to Do",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2240-i-have-work-enough-to-do-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2240-i-have-work-enough-to-do-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2240-i-have-work-enough-to-do-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-have-work-enough-to-do?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2240-i-have-work-enough-to-do-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "77977025554361223730-eng",
          songNumber: "224",
          detailColumn: "224"
        },
        {
          name: "We Are Marching On to Glory",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2250-we-are-marching-on-to-glory-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2250-we-are-marching-on-to-glory-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2250-we-are-marching-on-to-glory-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-are-marching-on-to-glory?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2250-we-are-marching-on-to-glory-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16711211787040045390-eng",
          songNumber: "225",
          detailColumn: "225"
        },
        {
          name: "Improve the Shining Moments",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2260-improve-the-shining-moments-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2260-improve-the-shining-moments-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2260-improve-the-shining-moments-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/improve-the-shining-moments?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2260-improve-the-shining-moments-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "38549692760221984380-eng",
          songNumber: "226",
          detailColumn: "226"
        },
        {
          name: "There Is Sunshine in My Soul Today",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/there-is-sunshine-in-my-soul-today?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2270-there-is-sunshine-in-my-soul-today-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13711376742569430861-eng",
          songNumber: "227",
          detailColumn: "227"
        },
        {
          name: "You Can Make the Pathway Bright",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2280-you-can-make-the-pathway-bright-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2280-you-can-make-the-pathway-bright-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2280-you-can-make-the-pathway-bright-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/you-can-make-the-pathway-bright?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2280-you-can-make-the-pathway-bright-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "23807324405008709220-eng",
          songNumber: "228",
          detailColumn: "228"
        },
        {
          name: "Today, While the Sun Shines",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2290-today-while-the-sun-shines-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2290-today-while-the-sun-shines-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2290-today-while-the-sun-shines-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/today-while-the-sun-shines?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2290-today-while-the-sun-shines-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "85697745786953500140-eng",
          songNumber: "229",
          detailColumn: "229"
        },
        {
          name: "Scatter Sunshine",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2300-scatter-sunshine-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2300-scatter-sunshine-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2300-scatter-sunshine-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/scatter-sunshine?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2300-scatter-sunshine-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "78840242471475501930-eng",
          songNumber: "230",
          detailColumn: "230"
        },
        {
          name: "Father, Cheer Our Souls Tonight",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2310-father-cheer-our-souls-tonight-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2310-father-cheer-our-souls-tonight-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2310-father-cheer-our-souls-tonight-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/father-cheer-our-souls-tonight?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2310-father-cheer-our-souls-tonight-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "56045280189449110040-eng",
          songNumber: "231",
          detailColumn: "231"
        },
        {
          name: "Let Us Oft Speak Kind Words",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/let-us-oft-speak-kind-words?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2320-let-us-oft-speak-kind-words-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "68535050530697925360-eng",
          songNumber: "232",
          detailColumn: "232"
        },
        {
          name: "Nay, Speak No Ill",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2330-nay-speak-no-ill-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2330-nay-speak-no-ill-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2330-nay-speak-no-ill-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/nay-speak-no-ill?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2330-nay-speak-no-ill-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "38464986516920875090-eng",
          songNumber: "233",
          detailColumn: "233"
        },
        {
          name: "Jesus, Mighty King in Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2340-jesus-mighty-king-in-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2340-jesus-mighty-king-in-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2340-jesus-mighty-king-in-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-mighty-king-in-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2340-jesus-mighty-king-in-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16054965491230916599-eng",
          songNumber: "234",
          detailColumn: "234"
        },
        {
          name: "Should You Feel Inclined to Censure",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2350-should-you-feel-inclined-to-censure-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2350-should-you-feel-inclined-to-censure-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2350-should-you-feel-inclined-to-censure-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/should-you-feel-inclined-to-censure?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2350-should-you-feel-inclined-to-censure-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14655725058803773641-eng",
          songNumber: "235",
          detailColumn: "235"
        },
        {
          name: "Lord, Accept into Thy Kingdom",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2360-lord-accept-into-thy-kingdom-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2360-lord-accept-into-thy-kingdom-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2360-lord-accept-into-thy-kingdom-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/lord-accept-into-thy-kingdom?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2360-lord-accept-into-thy-kingdom-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "57912657512437288450-eng",
          songNumber: "236",
          detailColumn: "236"
        },
        {
          name: "Do What Is Right",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2370-do-what-is-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2370-do-what-is-right-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2370-do-what-is-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/do-what-is-right?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2370-do-what-is-right-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2370-do-what-is-right-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2370-do-what-is-right-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10951299784489817370-eng",
          songNumber: "237",
          detailColumn: "237"
        },
        {
          name: "Behold Thy Sons and Daughters, Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2380-behold-thy-sons-and-daughters-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2380-behold-thy-sons-and-daughters-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2380-behold-thy-sons-and-daughters-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/behold-thy-sons-and-daughters-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2380-behold-thy-sons-and-daughters-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "25402853437282971440-eng",
          songNumber: "238",
          detailColumn: "238"
        },
        {
          name: "Choose the Right",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2390-choose-the-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2390-choose-the-right-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2390-choose-the-right-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/choose-the-right?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2390-choose-the-right-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2390-choose-the-right-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2390-choose-the-right-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18118995962052527159-eng",
          songNumber: "239",
          detailColumn: "239"
        },
        {
          name: "Know This, That Every Soul Is Free",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2400-know-this-that-every-soul-is-free-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2400-know-this-that-every-soul-is-free-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2400-know-this-that-every-soul-is-free-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/know-this-that-every-soul-is-free?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2400-know-this-that-every-soul-is-free-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "90019051602394764130-eng",
          songNumber: "240",
          detailColumn: "240"
        },
        {
          name: "Count Your Blessings",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2410-count-your-blessings-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2410-count-your-blessings-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2410-count-your-blessings-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/count-your-blessings?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2410-count-your-blessings-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2410-count-your-blessings-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2410-count-your-blessings-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "80547270038821545800-eng",
          songNumber: "241",
          detailColumn: "241"
        },
        {
          name: "Praise God, from Whom All Blessings Flow",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/praise-god-from-whom-all-blessings-flow?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2420-praise-god-from-whom-all-blessings-flow-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "21056099031138053160-eng",
          songNumber: "242",
          detailColumn: "242"
        },
        {
          name: "Let Us All Press On",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2430-let-us-all-press-on-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2430-let-us-all-press-on-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2430-let-us-all-press-on-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/let-us-all-press-on?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2430-let-us-all-press-on-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2430-let-us-all-press-on-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2430-let-us-all-press-on-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10641859941704376128-eng",
          songNumber: "243",
          detailColumn: "243"
        },
        {
          name: "Come Along, Come Along",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2440-come-along-come-along-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2440-come-along-come-along-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2440-come-along-come-along-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-along-come-along?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2440-come-along-come-along-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "30112275092134601490-eng",
          songNumber: "244",
          detailColumn: "244"
        },
        {
          name: "This House We Dedicate to Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2450-this-house-we-dedicate-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2450-this-house-we-dedicate-to-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2450-this-house-we-dedicate-to-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/this-house-we-dedicate-to-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2450-this-house-we-dedicate-to-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "95392168444047134780-eng",
          songNumber: "245",
          detailColumn: "245"
        },
        {
          name: "Onward, Christian Soldiers",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2460-onward-christian-soldiers-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2460-onward-christian-soldiers-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2460-onward-christian-soldiers-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/onward-christian-soldiers?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2460-onward-christian-soldiers-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2460-onward-christian-soldiers-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2460-onward-christian-soldiers-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "25179063522971596870-eng",
          songNumber: "246",
          detailColumn: "246"
        },
        {
          name: "We Love Thy House, O God",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2470-we-love-thy-house-o-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2470-we-love-thy-house-o-god-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2470-we-love-thy-house-o-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-love-thy-house-o-god?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2470-we-love-thy-house-o-god-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "80528744083923076410-eng",
          songNumber: "247",
          detailColumn: "247"
        },
        {
          name: "Up, Awake, Ye Defenders of Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2480-up-awake-ye-defenders-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2480-up-awake-ye-defenders-of-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2480-up-awake-ye-defenders-of-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/up-awake-ye-defenders-of-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2480-up-awake-ye-defenders-of-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13048053374747474788-eng",
          songNumber: "248",
          detailColumn: "248"
        },
        {
          name: "Called to Serve",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2490-called-to-serve-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2490-called-to-serve-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2490-called-to-serve-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/called-to-serve?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2490-called-to-serve-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2490-called-to-serve-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2490-called-to-serve-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "75648928716802867000-eng",
          songNumber: "249",
          detailColumn: "249"
        },
        {
          name: "We Are All Enlisted",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2500-we-are-all-enlisted-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2500-we-are-all-enlisted-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2500-we-are-all-enlisted-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-are-all-enlisted?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2500-we-are-all-enlisted-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2500-we-are-all-enlisted-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2500-we-are-all-enlisted-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "30546610093034467340-eng",
          songNumber: "250",
          detailColumn: "250"
        },
        {
          name: "Behold! A Royal Army",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2510-behold-a-royal-army-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2510-behold-a-royal-army-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2510-behold-a-royal-army-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/behold-a-royal-army?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2510-behold-a-royal-army-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2510-behold-a-royal-army-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2510-behold-a-royal-army-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11914365402114783000-eng",
          songNumber: "251",
          detailColumn: "251"
        },
        {
          name: "Put Your Shoulder to the Wheel",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/put-your-shoulder-to-the-wheel?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2520-put-your-shoulder-to-the-wheel-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17163098200955944350-eng",
          songNumber: "252",
          detailColumn: "252"
        },
        {
          name: "Like Ten Thousand Legions Marching",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2530-like-ten-thousand-legions-marching-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2530-like-ten-thousand-legions-marching-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2530-like-ten-thousand-legions-marching-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/like-ten-thousand-legions-marching?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2530-like-ten-thousand-legions-marching-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18010152480155052783-eng",
          songNumber: "253",
          detailColumn: "253"
        },
        {
          name: "True to the Faith",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2540-true-to-the-faith-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2540-true-to-the-faith-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2540-true-to-the-faith-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/true-to-the-faith?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2540-true-to-the-faith-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2540-true-to-the-faith-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2540-true-to-the-faith-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18269242140004702681-eng",
          songNumber: "254",
          detailColumn: "254"
        },
        {
          name: "Carry On",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2550-carry-on--vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2550-carry-on--instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2550-carry-on--vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/carry-on?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2550-carry-on--eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "92359417477843000430-eng",
          songNumber: "255",
          detailColumn: "255"
        },
        {
          name: "As Zion's Youth in Latter Days",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-zions-youth-in-latter-days?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2560-as-zions-youth-in-latter-days-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "22028746747338839140-eng",
          songNumber: "256",
          detailColumn: "256"
        },
        {
          name: "Rejoice! A Glorious Sound Is Heard",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2570-rejoice-a-glorious-sound-is-heard-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2570-rejoice-a-glorious-sound-is-heard-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2570-rejoice-a-glorious-sound-is-heard-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rejoice-a-glorious-sound-is-heard?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2570-rejoice-a-glorious-sound-is-heard-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "54292588865324591900-eng",
          songNumber: "257",
          detailColumn: "257"
        },
        {
          name: "O Thou Rock of Our Salvation",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2580-o-thou-rock-of-our-salvation-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2580-o-thou-rock-of-our-salvation-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2580-o-thou-rock-of-our-salvation-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-thou-rock-of-our-salvation?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2580-o-thou-rock-of-our-salvation-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11199429704556472435-eng",
          songNumber: "258",
          detailColumn: "258"
        },
        {
          name: "Hope of Israel",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2590-hope-of-israel-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2590-hope-of-israel-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2590-hope-of-israel-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/hope-of-israel?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2590-hope-of-israel-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2590-hope-of-israel-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2590-hope-of-israel-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "65718622908659551300-eng",
          songNumber: "259",
          detailColumn: "259"
        },
        {
          name: "Who's on the Lord's Side?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2600-whos-on-the-lords-side-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2600-whos-on-the-lords-side-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2600-whos-on-the-lords-side-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/whos-on-the-lords-side?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2600-whos-on-the-lords-side-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10846448011276855342-eng",
          songNumber: "260",
          detailColumn: "260"
        },
        {
          name: "Thy Servants Are Prepared",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2610-thy-servants-are-prepared-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2610-thy-servants-are-prepared-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2610-thy-servants-are-prepared-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thy-servants-are-prepared?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2610-thy-servants-are-prepared-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13867243772149227083-eng",
          songNumber: "261",
          detailColumn: "261"
        },
        {
          name: "Go, Ye Messengers of Glory",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2620-go-ye-messengers-of-glory-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2620-go-ye-messengers-of-glory-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2620-go-ye-messengers-of-glory-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/go-ye-messengers-of-glory?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2620-go-ye-messengers-of-glory-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14542461760593146789-eng",
          songNumber: "262",
          detailColumn: "262"
        },
        {
          name: "Go Forth with Faith",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2630-go-forth-with-faith-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2630-go-forth-with-faith-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2630-go-forth-with-faith-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/go-forth-with-faith?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2630-go-forth-with-faith-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2630-go-forth-with-faith-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2630-go-forth-with-faith-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15590057444741282646-eng",
          songNumber: "263",
          detailColumn: "263"
        },
        {
          name: "Hark, All Ye Nations!",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2640-hark-all-ye-nations-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2640-hark-all-ye-nations-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2640-hark-all-ye-nations-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/hark-all-ye-nations?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2640-hark-all-ye-nations-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2640-hark-all-ye-nations-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2640-hark-all-ye-nations-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10342808876267547298-eng",
          songNumber: "264",
          detailColumn: "264"
        },
        {
          name: "Arise, O God, and Shine",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2650-arise-o-god-and-shine-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2650-arise-o-god-and-shine-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2650-arise-o-god-and-shine-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/arise-o-god-and-shine?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2650-arise-o-god-and-shine-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "46152630940716904710-eng",
          songNumber: "265",
          detailColumn: "265"
        },
        {
          name: "The Time Is Far Spent",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2660-the-time-is-far-spent-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2660-the-time-is-far-spent-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2660-the-time-is-far-spent-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-time-is-far-spent?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2660-the-time-is-far-spent-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13176402663563270408-eng",
          songNumber: "266",
          detailColumn: "266"
        },
        {
          name: "How Wondrous and Great",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2670-how-wondrous-and-great-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2670-how-wondrous-and-great-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2670-how-wondrous-and-great-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-wondrous-and-great?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2670-how-wondrous-and-great-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2670-how-wondrous-and-great-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2670-how-wondrous-and-great-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "44426607013278076800-eng",
          songNumber: "267",
          detailColumn: "267"
        },
        {
          name: "Come, All Whose Souls Are Lighted",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2680-come-all-whose-souls-are-lighted-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2680-come-all-whose-souls-are-lighted-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2680-come-all-whose-souls-are-lighted-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-all-whose-souls-are-lighted?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2680-come-all-whose-souls-are-lighted-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13862630796493675903-eng",
          songNumber: "268",
          detailColumn: "268"
        },
        {
          name: "Jehovah, Lord of Heaven and Earth",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2690-jehovah-lord-of-heaven-and-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2690-jehovah-lord-of-heaven-and-earth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2690-jehovah-lord-of-heaven-and-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jehovah-lord-of-heaven-and-earth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2690-jehovah-lord-of-heaven-and-earth-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "42463302227815596760-eng",
          songNumber: "269",
          detailColumn: "269"
        },
        {
          name: "I'll Go Where You Want Me to Go",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/ill-go-where-you-want-me-to-go?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2700-ill-go-where-you-want-me-to-go-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "54529031998388581250-eng",
          songNumber: "270",
          detailColumn: "270"
        },
        {
          name: "Oh, Holy Words of Truth and Love",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2710-oh-holy-words-of-truth-and-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2710-oh-holy-words-of-truth-and-love-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2710-oh-holy-words-of-truth-and-love-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-holy-words-of-truth-and-love?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2710-oh-holy-words-of-truth-and-love-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58449760916821911700-eng",
          songNumber: "271",
          detailColumn: "271"
        },
        {
          name: "Oh Say, What Is Truth?",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2720-oh-say-what-is-truth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2720-oh-say-what-is-truth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2720-oh-say-what-is-truth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-say-what-is-truth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2720-oh-say-what-is-truth-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17111830328428883113-eng",
          songNumber: "272",
          detailColumn: "272"
        },
        {
          name: "Truth Reflects upon Our Senses",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2730-truth-reflects-upon-our-senses-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2730-truth-reflects-upon-our-senses-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2730-truth-reflects-upon-our-senses-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/truth-reflects-upon-our-senses?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2730-truth-reflects-upon-our-senses-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12261445632684348784-eng",
          songNumber: "273",
          detailColumn: "273"
        },
        {
          name: "The Iron Rod",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2740-the-iron-rod-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2740-the-iron-rod-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2740-the-iron-rod-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-iron-rod?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2740-the-iron-rod-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2740-the-iron-rod-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2740-the-iron-rod-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14566963314179660308-eng",
          songNumber: "274",
          detailColumn: "274"
        },
        {
          name: "Men Are That They Might Have Joy",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2750-men-are-that-they-might-have-joy-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2750-men-are-that-they-might-have-joy-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2750-men-are-that-they-might-have-joy-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/men-are-that-they-might-have-joy?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2750-men-are-that-they-might-have-joy-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "23011193308503245580-eng",
          songNumber: "275",
          detailColumn: "275"
        },
        {
          name: "Come Away to the Sunday School",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2760-come-away-to-the-sunday-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2760-come-away-to-the-sunday-school-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2760-come-away-to-the-sunday-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-away-to-the-sunday-school?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2760-come-away-to-the-sunday-school-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "55835541992486874090-eng",
          songNumber: "276",
          detailColumn: "276"
        },
        {
          name: "As I Search the Holy Scriptures",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-i-search-the-holy-scriptures?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2770-as-i-search-the-holy-scriptures-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "34623319388793477740-eng",
          songNumber: "277",
          detailColumn: "277"
        },
        {
          name: "Thanks for the Sabbath School",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2780-thanks-for-the-sabbath-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2780-thanks-for-the-sabbath-school-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2780-thanks-for-the-sabbath-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thanks-for-the-sabbath-school?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2780-thanks-for-the-sabbath-school-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10133522724857227030-eng",
          songNumber: "278",
          detailColumn: "278"
        },
        {
          name: "Thy Holy Word",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2790-thy-holy-word-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2790-thy-holy-word-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2790-thy-holy-word-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thy-holy-word?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2790-thy-holy-word-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "18284568661017874741-eng",
          songNumber: "279",
          detailColumn: "279"
        },
        {
          name: "Welcome, Welcome, Sabbath Morning",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2800-welcome-welcome-sabbath-morning-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2800-welcome-welcome-sabbath-morning-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2800-welcome-welcome-sabbath-morning-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/welcome-welcome-sabbath-morning?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2800-welcome-welcome-sabbath-morning-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "66366849101828490230-eng",
          songNumber: "280",
          detailColumn: "280"
        },
        {
          name: "Help Me Teach with Inspiration",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2810-help-me-teach-with-inspiration-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2810-help-me-teach-with-inspiration-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2810-help-me-teach-with-inspiration-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/help-me-teach-with-inspiration?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2810-help-me-teach-with-inspiration-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2810-help-me-teach-with-inspiration-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2810-help-me-teach-with-inspiration-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17497434438725625242-eng",
          songNumber: "281",
          detailColumn: "281"
        },
        {
          name: "We Meet Again in Sabbath School",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2820-we-meet-again-in-sabbath-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2820-we-meet-again-in-sabbath-school-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2820-we-meet-again-in-sabbath-school-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-meet-again-in-sabbath-school?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2820-we-meet-again-in-sabbath-school-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "10726357882478896892-eng",
          songNumber: "282",
          detailColumn: "282"
        },
        {
          name: "The Glorious Gospel Light Has Shone",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2830-the-glorious-gospel-light-has-shone-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2830-the-glorious-gospel-light-has-shone-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2830-the-glorious-gospel-light-has-shone-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-glorious-gospel-light-has-shone?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2830-the-glorious-gospel-light-has-shone-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "52266871602500037100-eng",
          songNumber: "283",
          detailColumn: "283"
        },
        {
          name: "If You Could Hie to Kolob",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/if-you-could-hie-to-kolob?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "15681646883579103338-eng",
          songNumber: "284",
          detailColumn: "284"
        },
        {
          name: "God Moves in a Mysterious Way",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2850-god-moves-in-a-mysterious-way-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2850-god-moves-in-a-mysterious-way-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2850-god-moves-in-a-mysterious-way-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-moves-in-a-mysterious-way?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2850-god-moves-in-a-mysterious-way-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12346842560941459489-eng",
          songNumber: "285",
          detailColumn: "285"
        },
        {
          name: "Oh, What Songs of the Heart",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2860-oh-what-songs-of-the-heart-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2860-oh-what-songs-of-the-heart-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2860-oh-what-songs-of-the-heart-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-what-songs-of-the-heart?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2860-oh-what-songs-of-the-heart-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16243882101162827288-eng",
          songNumber: "286",
          detailColumn: "286"
        },
        {
          name: "Rise, Ye Saints, and Temples Enter",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2870-rise-ye-saints-and-temples-enter-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2870-rise-ye-saints-and-temples-enter-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2870-rise-ye-saints-and-temples-enter-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rise-ye-saints-and-temples-enter?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2870-rise-ye-saints-and-temples-enter-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "52268301509031462120-eng",
          songNumber: "287",
          detailColumn: "287"
        },
        {
          name: "How Beautiful Thy Temples, Lord",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2880-how-beautiful-thy-temples-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2880-how-beautiful-thy-temples-lord-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2880-how-beautiful-thy-temples-lord-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-beautiful-thy-temples-lord?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2880-how-beautiful-thy-temples-lord-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "34863408603616179100-eng",
          songNumber: "288",
          detailColumn: "288"
        },
        {
          name: "Holy Temples on Mount Zion",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2890-holy-temples-on-mount-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2890-holy-temples-on-mount-zion-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2890-holy-temples-on-mount-zion-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/holy-temples-on-mount-zion?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2890-holy-temples-on-mount-zion-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "32319800631092735200-eng",
          songNumber: "289",
          detailColumn: "289"
        },
        {
          name: "Rejoice, Ye Saints of Latter Days",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2900-rejoice-ye-saints-of-latter-days-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2900-rejoice-ye-saints-of-latter-days-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2900-rejoice-ye-saints-of-latter-days-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rejoice-ye-saints-of-latter-days?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2900-rejoice-ye-saints-of-latter-days-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "45985783221652756940-eng",
          songNumber: "290",
          detailColumn: "290"
        },
        {
          name: "Turn Your Hearts",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2910-turn-your-hearts-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2910-turn-your-hearts-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2910-turn-your-hearts-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/turn-your-hearts?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2910-turn-your-hearts-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15203865258636708272-eng",
          songNumber: "291",
          detailColumn: "291"
        },
        {
          name: "O My Father",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2920-o-my-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2920-o-my-father-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2920-o-my-father-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-my-father?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2920-o-my-father-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2920-o-my-father-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2920-o-my-father-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12384802581654470825-eng",
          songNumber: "292",
          detailColumn: "292"
        },
        {
          name: "Each Life That Touches Ours for Good",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/each-life-that-touches-ours-for-good?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2930-each-life-that-touches-ours-for-good-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15206700146709003241-eng",
          songNumber: "293",
          detailColumn: "293"
        },
        {
          name: "Love at Home",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2940-love-at-home-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2940-love-at-home-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2940-love-at-home-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/love-at-home?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2940-love-at-home-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2940-love-at-home-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2940-love-at-home-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "34557320460566073370-eng",
          songNumber: "294",
          detailColumn: "294"
        },
        {
          name: "O Love That Glorifies the Son",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2950-o-love-that-glorifies-the-son-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2950-o-love-that-glorifies-the-son-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2950-o-love-that-glorifies-the-son-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-love-that-glorifies-the-son?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2950-o-love-that-glorifies-the-son-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14355538046134398226-eng",
          songNumber: "295",
          detailColumn: "295"
        },
        {
          name: "Our Father, by Whose Name",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2960-our-father-by-whose-name-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2960-our-father-by-whose-name-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2960-our-father-by-whose-name-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/our-father-by-whose-name?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2960-our-father-by-whose-name-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "40127487314182557990-eng",
          songNumber: "296",
          detailColumn: "296"
        },
        {
          name: "From Homes of Saints Glad Songs Arise",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2970-from-homes-of-saints-glad-songs-arise-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2970-from-homes-of-saints-glad-songs-arise-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2970-from-homes-of-saints-glad-songs-arise-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/from-homes-of-saints-glad-songs-arise?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2970-from-homes-of-saints-glad-songs-arise-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11361318628202526433-eng",
          songNumber: "297",
          detailColumn: "297"
        },
        {
          name: "Home Can Be a Heaven on Earth",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/home-can-be-a-heaven-on-earth?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-2980-home-can-be-a-heaven-on-earth-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "94323589645385585690-eng",
          songNumber: "298",
          detailColumn: "298"
        },
        {
          name: "Children of Our Heavenly Father",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url: null,
          alturl: null,
          mp3: null,
          playerlink:
            "https://www.lds.org/music/library/hymns/children-of-our-heavenly-father?lang=eng",
          pdf: null,
          video1: null,
          video2: null,
          showAsterisk: true,
          hasDownload: false,
          midi: null,
          songid: "12915846820777547567-eng",
          songNumber: "299",
          detailColumn: "299"
        },
        {
          name: "Families Can Be Together Forever",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3000-families-can-be-together-forever-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3000-families-can-be-together-forever-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3000-families-can-be-together-forever-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/families-can-be-together-forever?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3000-families-can-be-together-forever-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "77384271969452594010-eng",
          songNumber: "300",
          detailColumn: "300"
        },
        {
          name: "I Am a Child of God",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3010-i-am-a-child-of-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3010-i-am-a-child-of-god-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3010-i-am-a-child-of-god-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-am-a-child-of-god?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3010-i-am-a-child-of-god-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16495385379978007027-eng",
          songNumber: "301",
          detailColumn: "301"
        },
        {
          name: "I Know My Father Lives",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3020-i-know-my-father-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3020-i-know-my-father-lives-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3020-i-know-my-father-lives-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-know-my-father-lives?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3020-i-know-my-father-lives-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "99507066988753291800-eng",
          songNumber: "302",
          detailColumn: "302"
        },
        {
          name: "Keep the Commandments",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3030-keep-the-commandments-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3030-keep-the-commandments-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3030-keep-the-commandments-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/keep-the-commandments?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3030-keep-the-commandments-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12031752844013706943-eng",
          songNumber: "303",
          detailColumn: "303"
        },
        {
          name: "Teach Me to Walk in the Light",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3040-teach-me-to-walk-in-the-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3040-teach-me-to-walk-in-the-light-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3040-teach-me-to-walk-in-the-light-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/teach-me-to-walk-in-the-light?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3040-teach-me-to-walk-in-the-light-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15826274484027055301-eng",
          songNumber: "304",
          detailColumn: "304"
        },
        {
          name: "The Light Divine",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3050-the-light-divine-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3050-the-light-divine-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3050-the-light-divine-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-light-divine?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3050-the-light-divine-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "14471813717289248360-eng",
          songNumber: "305",
          detailColumn: "305"
        },
        {
          name: "God's Daily Care",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3060-gods-daily-care-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3060-gods-daily-care-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3060-gods-daily-care-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/gods-daily-care?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3060-gods-daily-care-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "62374861895592532370-eng",
          songNumber: "306",
          detailColumn: "306"
        },
        {
          name: "In Our Lovely Deseret",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3070-in-our-lovely-deseret-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3070-in-our-lovely-deseret-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3070-in-our-lovely-deseret-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/in-our-lovely-deseret?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3070-in-our-lovely-deseret-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12499028476676265152-eng",
          songNumber: "307",
          detailColumn: "307"
        },
        {
          name: "Love One Another",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3080-love-one-another-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3080-love-one-another-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3080-love-one-another-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/love-one-another?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3080-love-one-another-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "40862308881174665980-eng",
          songNumber: "308",
          detailColumn: "308"
        },
        {
          name: "As Sisters in Zion (Women)",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3090-as-sisters-in-zion-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3090-as-sisters-in-zion-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3090-as-sisters-in-zion-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/as-sisters-in-zion-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3090-as-sisters-in-zion-women-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-3090-as-sisters-in-zion-women-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-3090-as-sisters-in-zion-women-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15696831427463515535-eng",
          songNumber: "309",
          detailColumn: "309"
        },
        {
          name: "A Key Was Turned in Latter Days (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3100-a-key-was-turned-in-latter-days-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3100-a-key-was-turned-in-latter-days-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3100-a-key-was-turned-in-latter-days-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/a-key-was-turned-in-latter-days-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3100-a-key-was-turned-in-latter-days-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13986621673918522596-eng",
          songNumber: "310",
          detailColumn: "310"
        },
        {
          name: "We Meet Again as Sisters (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3110-we-meet-again-as-sisters-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3110-we-meet-again-as-sisters-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3110-we-meet-again-as-sisters-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-meet-again-as-sisters-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3110-we-meet-again-as-sisters-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15974556427267497746-eng",
          songNumber: "311",
          detailColumn: "311"
        },
        {
          name: "We Ever Pray for Thee (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3120-we-ever-pray-for-thee-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3120-we-ever-pray-for-thee-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3120-we-ever-pray-for-thee-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/we-ever-pray-for-thee-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3120-we-ever-pray-for-thee-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "44347855088639510490-eng",
          songNumber: "312",
          detailColumn: "312"
        },
        {
          name: "God Is Love (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3130-god-is-love-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3130-god-is-love-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3130-god-is-love-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-is-love-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3130-god-is-love-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "82161918170223546510-eng",
          songNumber: "313",
          detailColumn: "313"
        },
        {
          name: "How Gentle God's Commands (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3140-how-gentle-gods-commands-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3140-how-gentle-gods-commands-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3140-how-gentle-gods-commands-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/how-gentle-gods-commands-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3140-how-gentle-gods-commands-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "51627874497237994890-eng",
          songNumber: "314",
          detailColumn: "314"
        },
        {
          name: "Jesus, the Very Thought of Thee (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3150-jesus-the-very-thought-of-thee-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3150-jesus-the-very-thought-of-thee-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3150-jesus-the-very-thought-of-thee-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/jesus-the-very-thought-of-thee-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3150-jesus-the-very-thought-of-thee-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13671390111943017218-eng",
          songNumber: "315",
          detailColumn: "315"
        },
        {
          name: "The Lord Is My Shepherd (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3160-the-lord-is-my-shepherd-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3160-the-lord-is-my-shepherd-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3160-the-lord-is-my-shepherd-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-lord-is-my-shepherd-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3160-the-lord-is-my-shepherd-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "92388324382482223060-eng",
          songNumber: "316",
          detailColumn: "316"
        },
        {
          name: "Sweet Is the Work (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3170-sweet-is-the-work-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3170-sweet-is-the-work-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3170-sweet-is-the-work-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/sweet-is-the-work-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3170-sweet-is-the-work-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "45012589239021744400-eng",
          songNumber: "317",
          detailColumn: "317"
        },
        {
          name: "Love at Home (Women)",
          artist: "Hymnal",
          book: "Hymnal, Music for Women",
          bookFilter: "hymnal-music-for-women",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3180-love-at-home-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3180-love-at-home-women-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3180-love-at-home-women-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/love-at-home-women?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3180-love-at-home-women-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "63262725861916397490-eng",
          songNumber: "318",
          detailColumn: "318"
        },
        {
          name: "Ye Elders of Israel (Men)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3190-ye-elders-of-israel-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3190-ye-elders-of-israel-men-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3190-ye-elders-of-israel-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/ye-elders-of-israel-men?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3190-ye-elders-of-israel-men-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-3190-ye-elders-of-israel-men-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-3190-ye-elders-of-israel-men-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15031308423499217607-eng",
          songNumber: "319",
          detailColumn: "319"
        },
        {
          name: "The Priesthood of Our Lord (Men)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3200-the-priesthood-of-our-lord-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3200-the-priesthood-of-our-lord-men-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3200-the-priesthood-of-our-lord-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-priesthood-of-our-lord-men?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3200-the-priesthood-of-our-lord-men-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15306630293601387700-eng",
          songNumber: "320",
          detailColumn: "320"
        },
        {
          name: "Ye Who Are Called to Labor (Men)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3210-ye-who-are-called-to-labor-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3210-ye-who-are-called-to-labor-men-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3210-ye-who-are-called-to-labor-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/ye-who-are-called-to-labor-men?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3210-ye-who-are-called-to-labor-men-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "13911686728457638808-eng",
          songNumber: "321",
          detailColumn: "321"
        },
        {
          name: "Come, All Ye Sons of God (Men)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3220-come-all-ye-sons-of-god-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3220-come-all-ye-sons-of-god-men-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3220-come-all-ye-sons-of-god-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-all-ye-sons-of-god-men?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3220-come-all-ye-sons-of-god-men-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "11277738315979782382-eng",
          songNumber: "322",
          detailColumn: "322"
        },
        {
          name: "Rise Up, O Men of God (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3230-rise-up-o-men-of-god-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3230-rise-up-o-men-of-god-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3230-rise-up-o-men-of-god-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rise-up-o-men-of-god-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3230-rise-up-o-men-of-god-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "12081941026384724729-eng",
          songNumber: "323",
          detailColumn: "323"
        },
        {
          name: "Rise Up, O Men of God (Men)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3240-rise-up-o-men-of-god-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3240-rise-up-o-men-of-god-men-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3240-rise-up-o-men-of-god-men-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/rise-up-o-men-of-god-men?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3240-rise-up-o-men-of-god-men-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17088189377329823749-eng",
          songNumber: "324",
          detailColumn: "324"
        },
        {
          name: "See the Mighty Priesthood Gathered (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3250-see-the-mighty-priesthood-gathered-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3250-see-the-mighty-priesthood-gathered-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3250-see-the-mighty-priesthood-gathered-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/see-the-mighty-priesthood-gathered-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3250-see-the-mighty-priesthood-gathered-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "51084365850624672130-eng",
          songNumber: "325",
          detailColumn: "325"
        },
        {
          name: "Come, Come, Ye Saints (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3260-come-come-ye-saints-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3260-come-come-ye-saints-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3260-come-come-ye-saints-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-come-ye-saints-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3260-come-come-ye-saints-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "51966467571368874770-eng",
          songNumber: "326",
          detailColumn: "326"
        },
        {
          name: "Go, Ye Messengers of Heaven (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3270-go-ye-messengers-of-heaven-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3270-go-ye-messengers-of-heaven-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3270-go-ye-messengers-of-heaven-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/go-ye-messengers-of-heaven-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3270-go-ye-messengers-of-heaven-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "36597776139385937490-eng",
          songNumber: "327",
          detailColumn: "327"
        },
        {
          name: "An Angel from on High",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3280-an-angel-from-on-high-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3280-an-angel-from-on-high-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3280-an-angel-from-on-high-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/an-angel-from-on-high-328?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3280-an-angel-from-on-high-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "61468107092767738240-eng",
          songNumber: "328",
          detailColumn: "328"
        },
        {
          name: "Thy Servants Are Prepared (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3290-thy-servants-are-prepared-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3290-thy-servants-are-prepared-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3290-thy-servants-are-prepared-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/thy-servants-are-prepared-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3290-thy-servants-are-prepared-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "16482928956745344093-eng",
          songNumber: "329",
          detailColumn: "329"
        },
        {
          name: "See, the Mighty Angel Flying (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3300-see-the-mighty-angel-flying-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3300-see-the-mighty-angel-flying-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3300-see-the-mighty-angel-flying-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/see-the-mighty-angel-flying-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3300-see-the-mighty-angel-flying-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "71478546855536171100-eng",
          songNumber: "330",
          detailColumn: "330"
        },
        {
          name: "Oh Say, What Is Truth? (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3310-oh-say-what-is-truth-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3310-oh-say-what-is-truth-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3310-oh-say-what-is-truth-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/oh-say-what-is-truth-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3310-oh-say-what-is-truth-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "60100914128388808310-eng",
          songNumber: "331",
          detailColumn: "331"
        },
        {
          name: "Come, O Thou King of Kings (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3320-come-o-thou-king-of-kings-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3320-come-o-thou-king-of-kings-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3320-come-o-thou-king-of-kings-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/come-o-thou-king-of-kings-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3320-come-o-thou-king-of-kings-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15677154770074629405-eng",
          songNumber: "332",
          detailColumn: "332"
        },
        {
          name: "High on the Mountain Top (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3330-high-on-the-mountain-top-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3330-high-on-the-mountain-top-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3330-high-on-the-mountain-top-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/high-on-the-mountain-top-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3330-high-on-the-mountain-top-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "28622970827798864080-eng",
          songNumber: "333",
          detailColumn: "333"
        },
        {
          name: "I Need Thee Every Hour (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3340-i-need-thee-every-hour-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3340-i-need-thee-every-hour-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3340-i-need-thee-every-hour-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/i-need-thee-every-hour-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3340-i-need-thee-every-hour-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58421704783407484570-eng",
          songNumber: "334",
          detailColumn: "334"
        },
        {
          name: "Brightly Beams Our Father's Mercy (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3350-brightly-beams-our-fathers-mercy-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3350-brightly-beams-our-fathers-mercy-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3350-brightly-beams-our-fathers-mercy-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/brightly-beams-our-fathers-mercy-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3350-brightly-beams-our-fathers-mercy-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "19816910110972306930-eng",
          songNumber: "335",
          detailColumn: "335"
        },
        {
          name: "School Thy Feelings (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3360-school-thy-feelings-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3360-school-thy-feelings-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3360-school-thy-feelings-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/school-thy-feelings-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3360-school-thy-feelings-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "17627647257534926018-eng",
          songNumber: "336",
          detailColumn: "336"
        },
        {
          name: "O Home Beloved (Men's Choir)",
          artist: "Hymnal",
          book: "Hymnal, Music for Men",
          bookFilter: "hymnal-music-for-men",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3370-o-home-beloved-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3370-o-home-beloved-mens-choir-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3370-o-home-beloved-mens-choir-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/o-home-beloved-mens-choir?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3370-o-home-beloved-mens-choir-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "15646343544051631405-eng",
          songNumber: "337",
          detailColumn: "337"
        },
        {
          name: "America the Beautiful",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3380-america-the-beautiful-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3380-america-the-beautiful-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3380-america-the-beautiful-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/america-the-beautiful?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3380-america-the-beautiful-eng.pdf?download=true",
          video1:
            "http://broadcast2.lds.org/music/hymns/2001-01-3380-america-the-beautiful-vocal-and-instrumental-2500k-ase.mp4?download=true",
          video2:
            "http://broadcast2.lds.org/music/hymns/2001-01-3380-america-the-beautiful-vocal-and-instrumental-300k-ase.wmv?download=true",
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "72602948516470122700-eng",
          songNumber: "338",
          detailColumn: "338"
        },
        {
          name: "My Country, 'Tis of Thee",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3390-my-country-tis-of-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3390-my-country-tis-of-thee-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3390-my-country-tis-of-thee-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/my-country-tis-of-thee?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3390-my-country-tis-of-thee-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "21514838987017653730-eng",
          songNumber: "339",
          detailColumn: "339"
        },
        {
          name: "The Star-Spangled Banner",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3400-the-star-spangled-banner-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3400-the-star-spangled-banner-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3400-the-star-spangled-banner-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/the-star-spangled-banner?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3400-the-star-spangled-banner-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "47576289824560109270-eng",
          songNumber: "340",
          detailColumn: "340"
        },
        {
          name: "God Save the King",
          artist: "Hymnal",
          book: "Hymnal",
          bookFilter: "hymnal",
          collectionFilter: "",
          url:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3410-god-save-the-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          alturl:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3410-god-save-the-king-instrumental-192k-eng.mp3?download=true",
          mp3:
            "http://media2.ldscdn.org/assets/music/hymns/2001-01-3410-god-save-the-king-vocal-and-instrumental-192k-eng.mp3?download=true",
          playerlink:
            "https://www.lds.org/music/library/hymns/god-save-the-king?lang=eng",
          pdf:
            "http://media.ldscdn.org/pdf/music/hymns/2001-01-3410-god-save-the-king-eng.pdf?download=true",
          video1: null,
          video2: null,
          showAsterisk: false,
          hasDownload: true,
          midi: null,
          songid: "58903505700219758610-eng",
          songNumber: "341",
          detailColumn: "341"
        }
      ]
    }
  };
}
