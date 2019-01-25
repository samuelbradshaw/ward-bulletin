// BulletinData
// Test data
const testData = {
  id: "pq3",
  name: "Penasquitos 3rd Ward",
  desc: "",
  leaderchar: ".",
  sectionOrder: ["program", "announcements", "leaders", "missionaries"],
  sections: {
    program: {
      title: "Program",
      data: [
        { type: "title", title: "Sacrament Meeting", style: "bold" },
        { type: "title", title: "July 21", style: "italic" },
        {
          type: "name",
          label: "Presiding",
          name: "Bishop Dave Stratham"
        },
        { type: "gap" },
        { type: "name", label: "Music Director", name: "Debbie Hanes" },
        { type: "name", label: "Organist", name: "Tom Webster" },
        {
          type: "hymn",
          label: "Opening Hymn",
          hymn: "67",
          title: "Glory to God on High"
        },
        { type: "gap" },
        { type: "name", label: "Opening Prayer", name: "Tyrone Williams" },
        {
          type: "hymn",
          label: "Sacrament Hymn",
          hymn: "181",
          title: "Jesus of Nazareth, Savior and King"
        },
        { type: "gap" },
        { type: "title", title: "The Sacrament", style: "bold" },
        {
          type: "name",
          label: "Youth Speaker",
          name: "Anita Martinez"
        },
        { type: "gap" },
        { type: "name", label: "Youth Speaker", name: "Jeff Taylor" },
        {
          type: "music",
          label: "Musical Number",
          name: "Ward Choir",
          title: "Glory to God on High"
        },
        { type: "gap" },
        { type: "name", label: "Speaker", name: "Jason Garner" },
        { type: "name", label: "Speaker", name: "Jessica Marshfield" },
        {
          type: "hymn",
          label: "Closing Hymn",
          hymn: "86",
          title: "How Great Thou Art"
        },
        { type: "gap" },
        { type: "name", label: "Closing Prayer", name: "Saul Davidson" }
      ]
    },
    announcements: {
      title: "Announcements",
      data: [
        { type: "title", title: "Announcements", style: "bold" },
        {
          type: "article",
          heading: "Christmas Program",
          body: "The Christmas program is on December 9 at 7:00 pm."
        },
        {
          type: "article",
          heading: "Christmas Activity",
          body: "Breakfast as the church at 9:00 am."
        }
      ]
    },
    leaders: {
      title: "Leaders",
      data: [
        { type: "title", title: "Ward Leaders", style: "bold" },
        {
          type: "name",
          label: "Bishop",
          name: "Dave Stratham"
        },
        {
          type: "name",
          label: "1st Counselor",
          name: "Larry Jones"
        },
        {
          type: "name",
          label: "2nd Counselor",
          name: "Mike Davis"
        }
      ]
    }
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

let BulletinData = {
  getBulletinData: function(unit) {
    let location = locations.find(loc => loc.id === unit);
    let data = { ...testData };
    data.id = unit;
    data.name = location.name;
    return new Promise(resolve => setTimeout(resolve, 200, data));
  },

  getBulletinsAtLocation: function(lat, long) {
    return new Promise(resolve =>
      setTimeout(resolve, 200, [locations[4], locations[5], locations[9]])
    );
  },

  searchBulletins: function(searchTerm) {
    let wards = [];
    searchTerm = searchTerm.toLowerCase();
    for (let ward of locations) {
      if (ward.name.toLowerCase().startsWith(searchTerm)) {
        wards.push(ward);
      }
    }
    return new Promise(resolve =>
      setTimeout(resolve, 700, { wards, complete: true })
    );
  }
};

export default BulletinData;
