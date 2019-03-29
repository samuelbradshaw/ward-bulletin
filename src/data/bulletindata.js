// BulletinData

/* Bulletin db format

  bulletin
    settings
    sections
  templates

*/

const LOC_RADIUS = 1; // in kms

const initialBulletinData = {
  settings: {
    leaderchar: " .",
    name: "",
    printColumns: 2,
    centerMargin: 0.75,
    edgeMargin: 0.25,
    autoDate: "Sunday"
  },
  sections: [
    {
      title: "Cover",
      data: [
        { size: 28, style: "bold", title: "This Ward", type: "title" },
        { type: "gap", gap: "5" },
        {
          align: "",
          type: "image",
          url:
            "https://media.ldscdn.org/images/media-library/gospel-art/new-testament/christ-teaching-the-people-39554-mobile.jpg",
          width: 80
        },
        { type: "gap", gap: "8" },
        {
          size: 25,
          style: "italic",
          title: "March 24, 2019",
          type: "date"
        }
      ],
      type: "cover"
    },
    {
      title: "Program",
      type: "program",
      data: [
        { type: "title", title: "Sacrament Meeting", style: "bold" },
        { type: "date", style: "italic", title: "March 24, 2019" },
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
    },
    {
      title: "Calendar",
      data: [
        { type: "title", style: "bold", title: "Calendar" },
        { type: "title", align: "left", style: "bold", title: "June" },
        {
          day: "23",
          time: "7:00pm",
          event: "Youth Fireside",
          type: "event",
          date: "",
          weekday: "Sun"
        },
        {
          day: "25",
          time: "7:00pm",
          event: "Combined Youth Activity",
          type: "event",
          date: "",
          weekday: "Tue"
        },
        {
          time: "",
          event: "Relief Society Meeting",
          day: "",
          type: "event",
          date: ""
        },
        {
          date: "",
          time: "",
          event: "Self Reliance Group",
          day: "",
          type: "event"
        }
      ],
      type: "calendar"
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

function functionsURL() {
  let host = location.hostname;
  let dev = host === "localhost" || host === "127.0.0.1";
  return dev
    ? "http://localhost.charlesproxy.com:5000/ward-bulletin-9b31d/us-central1" // development
    : "https://us-central1-ward-bulletin-9b31d.cloudfunctions.net"; // production
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
    const url = `https://storage.googleapis.com/ward-bulletin-9b31d.appspot.com/${unit}/bulletin.json`;
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      let error = {
        status: response.status,
        message:
          response.status === 403
            ? `Bulletin not found (${unit})`
            : "Unknown error: " + response.status
      };
      throw error;
    });
  },

  // save bulletin
  saveBulletin: function(unit, data, token, historyname) {
    let url = `${functionsURL()}/setBulletin?id=${unit}&historyname=${historyname}`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    });
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
    let url = `https://ward-bulletin-9b31d.firebaseio.com/units.json?orderBy="searchname"&startAt="${search}"&endAt="${search}z"&limitToFirst=${limit}`;
    return fetch(url).then(response => {
      // console.log("Response", response.json());
      return response.json().then(data => wardList(data, "searchname"));
    });
  },

  addUnit: function(id, name, address, user) {
    let regex = /[ \.]/gi;
    let searchname = name.toLowerCase().replace(regex, "");
    let url = `${functionsURL()}/addUnit`;
    let data = { id, name, address, searchname, user };
    let body = JSON.stringify(data);

    return fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      if (!response.ok) {
        return response.text().then(errorText => {
          throw Error(errorText);
        });
      }
      return response;
    });
  }
};

export default BulletinData;
