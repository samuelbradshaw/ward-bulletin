var prefs = {
  currentDraft: "current-draft",
  recents: "recents",

  get: function(key) {
    let dataString;
    if (typeof window !== "undefined") {
      // avoid pre-rending error
      dataString = localStorage.getItem(key);
    }
    return dataString === undefined ? undefined : JSON.parse(dataString);
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