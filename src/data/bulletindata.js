// BulletinData
// Test data
const testData = {
  unitid: 12345,
  unit: "Penasquitos 3rd Ward",
  desc: "",
  leaderchar: ".",
  sections: {
    program: [
      { center: "Sacrament Meeting", centerStyle: "bold" },
      { center: "July 21", centerStyle: "italic" },
      { left: "Presiding", right: "Bishop Dave Stratham", gap: 1 },
      { left: "Music Director", right: "Debbie Hanes" },
      { left: "Organist", right: "Tom Webster" },
      {
        left: "Opening Hymn",
        right: "#67",
        center: "Glory to God on High",
        centerStyle: "italic",
        gap: 1
      },
      { left: "Opening Prayer", right: "Tyrone Williams" },
      {
        left: "Sacrament Hymn",
        right: "#181",
        center: "Jesus of Nazareth, Savior and King",
        centerStyle: "italic",
        gap: 1
      },
      { center: "The Sacrament", centerStyle: "bold", gap: 1 },
      { left: "Youth Speaker", right: "Anita Martinez", gap: 1 },
      { left: "Youth Speaker", right: "Jeff Taylor" },
      {
        left: "Musical Number",
        right: "Ward Choir",
        center: "Glory to God on High",
        centerStyle: "italic",
        gap: 1
      },
      { left: "Speaker", right: "Jason Garner", gap: 1 },
      { left: "Speaker", right: "Jessica Marshfield" },
      {
        left: "Closing Hymn",
        right: "#86",
        center: "How Great Thou Art",
        gap: 1
      },
      { left: "Closing Prayer", right: "Saul Davidson" }
    ],
    announcements: [
      { center: "Announcements", centerStyle: "bold" },
      {
        heading: "Christmas Program",
        text: "The Christmas program is on December 9 at 7:00 pm."
      },
      {
        heading: "Christmas Activity",
        text: "Breakfast as the church at 9:00 am."
      }
    ]
  }
};

export default class BulletinData {
  static async getBulletinData(unit) {
    return new Promise(resolve => setTimeout(resolve, 1000, testData));
  }
}
