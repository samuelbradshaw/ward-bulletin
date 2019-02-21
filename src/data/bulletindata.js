// BulletinData

/* Bulletin db format

  bulletin
    settings
    sections
  templates

*/

const baseURL = "https://us-central1-ward-bulletin-9b31d.cloudfunctions.net"; // production
// const baseURL = "http://localhost:5000/ward-bulletin-9b31d/us-central1"; // development
const LOC_RADIUS = 3; // in kms

const initialBulletinData = {
  settings: {
    leaderchar: ".",
    name: ""
  },
  sections: [
    {
      title: "Program",
      type: "program",
      template: "Sacrament",
      data: [
        { type: "title", title: "Sacrament Meeting", style: "bold" },
        { type: "title", title: "January 1, 2019", style: "italic" },
        { type: "gap" },
        {
          type: "name",
          label: "Presiding",
          name: ""
        },
        { type: "name", label: "Music Director", name: "" },
        { type: "name", label: "Organist", name: "" },
        {
          type: "hymn",
          label: "Opening Hymn",
          hymn: "",
          title: ""
        },
        { type: "gap" },
        { type: "name", label: "Opening Prayer", name: "" },
        {
          type: "hymn",
          label: "Sacrament Hymn",
          hymn: "",
          title: ""
        },
        { type: "gap" },
        { type: "title", title: "The Sacrament", style: "bold" },
        {
          type: "name",
          label: "Youth Speaker",
          name: ""
        },
        { type: "gap" },
        { type: "name", label: "Youth Speaker", name: "" },
        {
          type: "music",
          label: "Musical Number",
          name: "Ward Choir",
          title: ""
        },
        { type: "gap" },
        { type: "name", label: "Speaker", name: "" },
        { type: "name", label: "Speaker", name: "" },
        { type: "gap" },
        {
          type: "hymn",
          label: "Closing Hymn",
          hymn: "",
          title: ""
        },
        { type: "name", label: "Closing Prayer", name: "" }
      ]
    },
    {
      title: "Announcements",
      type: "announcements",
      data: [
        { type: "title", title: "Announcements", style: "bold" },
        {
          type: "article",
          heading: "Announcement 1",
          body: "This is an announcement"
        },
        {
          type: "article",
          heading: "Announcement 2",
          body: "This is an announcement"
        }
      ]
    }
  ]
};

const initialTemplateData = {
  Sacrament: [
    { type: "title", title: "Sacrament Meeting", style: "bold" },
    { type: "title", title: "January 1, 2019", style: "italic" },
    { type: "gap" },
    {
      type: "name",
      label: "Presiding",
      name: ""
    },
    { type: "name", label: "Music Director", name: "" },
    { type: "name", label: "Organist", name: "" },
    {
      type: "hymn",
      label: "Opening Hymn",
      hymn: "",
      title: ""
    },
    { type: "gap" },
    { type: "name", label: "Opening Prayer", name: "" },
    {
      type: "hymn",
      label: "Sacrament Hymn",
      hymn: "",
      title: ""
    },
    { type: "gap" },
    { type: "title", title: "The Sacrament", style: "bold" },
    {
      type: "name",
      label: "Youth Speaker",
      name: ""
    },
    { type: "gap" },
    { type: "name", label: "Youth Speaker", name: "" },
    {
      type: "music",
      label: "Musical Number",
      name: "Ward Choir",
      title: ""
    },
    { type: "gap" },
    { type: "name", label: "Speaker", name: "" },
    { type: "name", label: "Speaker", name: "" },
    { type: "gap" },
    {
      type: "hymn",
      label: "Closing Hymn",
      hymn: "",
      title: ""
    },
    { type: "name", label: "Closing Prayer", name: "" }
  ],
  "Fast & Testimony": [
    { type: "title", title: "Fast and Testimony Meeting", style: "bold" },
    { type: "title", title: "January 1, 2019", style: "italic" },
    { type: "gap" },
    {
      type: "name",
      label: "Presiding",
      name: ""
    },
    { type: "name", label: "Music Director", name: "" },
    { type: "name", label: "Organist", name: "" },
    {
      type: "hymn",
      label: "Opening Hymn",
      hymn: "",
      title: ""
    },
    { type: "gap" },
    { type: "name", label: "Opening Prayer", name: "" },
    {
      type: "hymn",
      label: "Sacrament Hymn",
      hymn: "",
      title: ""
    },
    { type: "gap" },
    { type: "title", title: "The Sacrament", style: "bold" },
    { type: "gap" },
    { type: "title", title: "Testimonies" },
    { type: "gap" },
    {
      type: "hymn",
      label: "Closing Hymn",
      hymn: "",
      title: ""
    },
    { type: "name", label: "Closing Prayer", name: "" }
  ]
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
  { id: "sr2", name: "Scripps Ranch 2nd Ward" },
  { id: "greenward", name: "Green Ward" }
];

// convert ward list into {id, name} format
function wardList(data, extra) {
  let wards = [];
  Object.keys(data).map(key => {
    let ward = {
      id: key,
      name: data[key].name
    };
    if (extra) ward[extra] = data[key][extra];
    wards.push(ward);
  });
  return wards;
}

// get firebase database url
function getFirebaseURL() {
  return "https://ward-bulletin-9b31d.firebaseio.com";
}

let BulletinData = {
  // get initial bulletin data for new account
  getInitialData: function() {
    return JSON.parse(JSON.stringify(initialBulletinData)); // deep copy initialData
  },

  getInitialTemplates: function() {
    return JSON.parse(JSON.stringify(initialTemplateData)); // deep copy initialData
  },

  // get bulletin
  getBulletin: function(unit) {
    return fetch(baseURL + "/getBulletin?id=" + unit).then(response =>
      response.json()
    );
  },

  // save bulletin
  saveBulletin: function(unit, data) {
    return fetch(baseURL + "/setBulletin?id=" + unit, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json());
  },

  // find bulletins at location
  getBulletinsAtLocation: function(lat, lng) {
    let geospatial = require("./geospatial");
    return geospatial.getWardsAtLocation([lat, lng], LOC_RADIUS).then(data => {
      let wards = wardList(data, "l");
      let center = [lat, lng];
      // sort by distance
      wards.sort(
        (a, b) =>
          geospatial.distance(center, a.l) - geospatial.distance(center, b.l)
      );
      return wards;
    });
  },

  // search for bulletins by name
  searchBulletins: function(search, limit) {
    let url = `${getFirebaseURL()}/units.json?orderBy="searchname"&startAt="${search}"&endAt="${search}z"&limitToFirst=${limit}`;
    return fetch(url).then(response => {
      // console.log("Response", response.json());
      return response.json().then(data => wardList(data, "searchname"));
    });
  }
};

export default BulletinData;
