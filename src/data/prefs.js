let defaults = {
  recents: [],
  "leader-char": " .",
  "theme-color": "blue",
  "hide-labels": false,
  "home-screen-prompt-time": 0,
  "use-hymns-app": false
};

let prefs = {
  cacheBulletin: "cache-bulletin",
  cacheDate: "cache-date",
  cacheId: "cache-id",
  draftBulletin: "draft-bulletin",
  draftId: "draft-id",
  recents: "recents",
  leaderChar: "leader-char",
  themeColor: "theme-color",
  hideLabels: "hide-labels",
  homeScreenPromptTime: "home-screen-prompt-time",
  useHymnsApp: "use-hymns-app",

  get: function(key) {
    let data, dataString;
    if (typeof window !== "undefined") {
      // avoid pre-rendierng error
      dataString = localStorage.getItem(key);
    }
    if (dataString === undefined || dataString === null) {
      data = defaults[key];
    } else {
      data = JSON.parse(dataString);
    }
    return data;
  },

  set: function(key, value) {
    if (typeof window !== "undefined") {
      // avoid pre-rending error
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  clear: function(key) {
    if (typeof window !== "undefined") {
      // avoid pre-rending error
      localStorage.removeItem(key);
    }
  }
};

export default prefs;
