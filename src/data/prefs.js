let defaults = {
  recents: [],
  "leader-char": " .",
  "theme-background-color": "system-default",
  "theme-accent-color": "blue",
  "hide-labels": false,
  "home-screen-prompt-time": 0,
  "hymn-app": "ward-bulletin",
};

let prefs = {
  cacheBulletin: "cache-bulletin",
  cacheDate: "cache-date",
  cacheId: "cache-id",
  draftBulletin: "draft-bulletin",
  draftId: "draft-id",
  recents: "recents",
  leaderChar: "leader-char",
  themeBackgroundColor: "theme-background-color",
  themeAccentColor: "theme-accent-color",
  hideLabels: "hide-labels",
  homeScreenPromptTime: "home-screen-prompt-time",
  hymnApp: "hymn-app",

  get: function(key) {
    let data, dataString;
    if (typeof window !== "undefined") {
      // avoid pre-rendering error
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
      // avoid pre-rendering error
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  clear: function(key) {
    if (typeof window !== "undefined") {
      // avoid pre-rendering error
      localStorage.removeItem(key);
    }
  }
};

export default prefs;
