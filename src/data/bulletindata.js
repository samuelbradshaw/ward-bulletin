// BulletinData
// Test data
const testData = {
  unitid: 12345,
  unit: "Penasquitos 3rd Ward",
  desc: "",
  leaderchar: ".",
  sectionOrder: ["program", "announcements", "leaders", "missionaries"],
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
    ],
    leaders: [
      { center: "Ward Leaders", centerStyle: "bold" },
      { left: "Bishop Dave Stratham", right: "bishop_stratham@mymail.com" },
      { left: "1st Counselor Larry Jones", right: "ljonesm@mymail.com" },
      { left: "2nd Counselor Mike Davis", right: "mike_davis@mymail.com" }
    ]
  }
};

const locations = [
  { id: "ds", name: "Del Sur Ward" },
  { id: "lh", name: "Lake Hodges Ward" },
  { id: "mm2", name: "Mira Mesa 2nd Ward" },
  { id: "mm3", name: "Mira Mesa 3rd Ward" },
  { id: "pq1", name: "Penasquitos 1st Ward" },
  { id: "pq2", name: "Penasquitos 2nd Ward" },
  { id: "pq3", name: "Penasquitos 3rd Ward" },
  { id: "rb", name: "Rancho Bernardo Ward" },
  { id: "sr1", name: "Scripps Ranch 1st Ward" },
  { id: "sr2", name: "Scripps Ranch 2nd Ward" }
];

export default class BulletinData {
  static async getBulletinData(unit) {
    return new Promise(resolve => setTimeout(resolve, 700, testData));
  }

  static async getBulletinsAtLocation(long, lat) {
    return new Promise(resolve =>
      setTimeout(resolve, 700, [locations[4], locations[5], locations[9]])
    );
  }

  static async searchBulletins(searchTerm) {
    let wards = [];
    searchTerm = searchTerm.toLowerCase();
    for (let ward of locations) {
      if (ward.name.toLowerCase().startsWith(searchTerm)) {
        wards.push(ward);
      }
    }
    return wards;
  }
}
