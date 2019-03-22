const fetch = require("node-fetch");
const cheerio = require("cheerio");

let CollectionCache = {};

getMedia();

async function getMedia() {
  console.log("Starting...");
  let coll = getRootCollection();
  await processCollection(coll);
  console.log("Finished!");
}

async function processCollection(coll) {
  console.log("Collection:", `${coll.name} / ${coll.id}`);
  saveCollection(coll);
  let promises = coll.items.forEach(async item => {
    if (item.id) {
      if (item.id in getOmitCollections()) {
        console.log("Omit:", item.id);
        return;
      }
      if (item.id in CollectionCache) {
        // already have this one
        // console.log("Already did this one:", item.id);
        return;
      }
    }
    let url = item.url;
    let items = [];
    while (url) {
      // do sub collection
      CollectionCache[item.id] = true;
      let response = await fetch(url);
      let text = await response.text();
      let origin = new URL(url).origin; // may need this for relative paths
      let { pageItems, nextPage } = scrapeCollection(text, origin);
      items = items.concat(pageItems);
      url = nextPage;
    }
    if (items.length) {
      subColl = { name: item.name, id: item.id, items };
      await processCollection(subColl);
    } else if (item.url) {
      console.log("No items in this collection:", JSON.stringify(item.url));
    }
  });
  // await Promise.all(promises);
}

function saveCollection(coll) {
  const fs = require("fs");
  // console.log(title, id);
  fs.writeFileSync(`media-library/${coll.id}.json`, JSON.stringify(coll));
  //   console.log(JSON.stringify(items));
}

function scrapeCollection(text, origin) {
  let items = [];
  $ = cheerio.load(text);
  let primary = $("#primary");
  let collItems = $(".photo-stacks", primary).children();
  if (collItems.length) {
    // collection
    collItems.each(function(index, el) {
      let item = $(el);
      let url = item.find("a").attr("href");
      if (url) {
        // console.log("URL:", url);
        let name = item.text().trim();
        let image = item.find("img").attr("src");
        if (image.startsWith("/")) {
          image = origin + image;
        }
        let match = /(?:categories|category)\/(.*)\?lang\=eng/.exec(url);
        if (!match) {
          match = /images\/(.*)\?lang\=eng/.exec(url);
        }
        if (!match) {
          throw "Can't find id";
        }
        id = match[1];

        if (id in getOmitCollections()) {
          // console.log("Omit:", item.id);
          return;
        }
        if (id in CollectionCache) {
          // already have this one
          // console.log("Already did this one:", item.id);
          return;
        }

        items.push({ name, image, id, url });
      }
    });
  } else {
    let imageItems = $(".image-gallery", primary).children();
    if (imageItems.length) {
      // images
      imageItems.each(function(index, el) {
        let item = $(el);
        let thumbnail = item.find("[data-mobile]").attr("data-mobile");
        items.push({ thumbnail });
      });
    }
  }
  let nextPage = $("a.next").attr("href");
  return { pageItems: items, nextPage };
}

function getOmitCollections() {
  return {
    "coloring-pages-christmas": true,
    "articles-of-faith": true,
    "temples-list-view": true,
    "teachings-of-presidents-of-the-church": true,
    "coloring-pages": true,
    "primary-symbols": true,
    "activity-pages": true,
    "primary-cutouts": true,
    "articles-of-faith-1": true,
    "articles-of-faith-2": true,
    "articles-of-faith-3": true,
    "articles-of-faith-4": true,
    "articles-of-faith-5": true,
    "articles-of-faith-6": true,
    "articles-of-faith-7": true,
    "articles-of-faith-8": true,
    "articles-of-faith-9": true,
    "articles-of-faith-10": true,
    "articles-of-faith-11": true,
    "articles-of-faith-12": true,
    "articles-of-faith-13": true
  };
}

function getRootCollection() {
  return {
    name: "Images",
    id: "images",
    items: [
      {
        type: "collection",
        name: "Gospel Art",
        image:
          "https://media.ldscdn.org/images/media-library/collections/gospel-art-category-138x91.jpg",
        id: "gospel-art",
        url:
          "https://www.lds.org/media-library/images/categories/gospel-art?lang=eng"
      },
      {
        type: "collection",
        name: "Jesus Christ",
        image:
          "https://media.ldscdn.org/images/media-library/collections/bible-images-the-life-of-jesus-christ-category-138x91.jpg",
        id: "jesus-christ",
        url:
          "https://www.lds.org/media-library/images/categories/jesus-christ?lang=eng"
      },
      {
        type: "collection",
        name: "Christmas",
        image:
          "https://www.lds.org/bc/content/ldsorg/media-library/category-images/family-setting-up-nativity-1337450-celebrations-of-christmas-category.jpg",
        id: "christmas",
        url:
          "https://www.lds.org/media-library/images/categories/christmas?lang=eng"
      },
      {
        type: "collection",
        name: "Church Leaders",
        image:
          "https://www.lds.org/bc/content/ldsorg/media-library/category-images/quorum-twelve-2018-group-portrait-2074836-category-thumbnail.jpg",
        id: "church-leaders",
        url:
          "https://www.lds.org/media-library/images/categories/church-leaders?lang=eng"
      },
      {
        type: "collection",
        name: "The Scriptures",
        image:
          "https://media.ldscdn.org/images/media-library/collections/gospel-art-book-of-mormon-category-138x91.jpg",
        id: "the-scriptures",
        url:
          "https://www.lds.org/media-library/images/categories/the-scriptures?lang=eng"
      },
      {
        type: "collection",
        name: "Temples",
        image:
          "https://media.ldscdn.org/images/media-library/collections/temples-san-diego-california-category-138x91.jpg",
        id: "temples",
        url:
          "https://www.lds.org/media-library/images/categories/temples?lang=eng"
      },
      {
        type: "collection",
        name: "Doctrines and Principles",
        image:
          "https://media.ldscdn.org/images/media-library/collections/easter-category-138x91.jpg",
        id: "doctrines-and-principles",
        url:
          "https://www.lds.org/media-library/images/categories/doctrines-and-principles?lang=eng"
      },
      {
        type: "collection",
        name: "Primary",
        image:
          "https://media.ldscdn.org/images/media-library/collections/primary-illustrations-category-new-138x91.jpg",
        id: "primary",
        url:
          "https://www.lds.org/media-library/images/categories/primary?lang=eng"
      },
      {
        type: "collection",
        name: "Relief Society",
        image:
          "https://www.lds.org/bc/content/Collection%20Gallery%20Images/RS%20Resources%20Cover.jpg",
        id: "relief-society",
        url:
          "https://www.lds.org/media-library/images/categories/relief-society?lang=eng"
      },
      {
        type: "collection",
        name: "Inspirational Picture Quotes",
        image:
          "https://media.ldscdn.org/images/media-library/collections/by-speaker-category-138x91.jpg",
        id: "inspirational-picture-quotes",
        url:
          "https://www.lds.org/media-library/images/categories/inspirational-picture-quotes?lang=eng"
      },
      {
        type: "collection",
        name: "People",
        image:
          "https://media.ldscdn.org/images/media-library/collections/everyday-people-category-138x91.jpg",
        id: "people",
        url:
          "https://www.lds.org/media-library/images/categories/jesus-christ?lang=eng"
      },
      {
        type: "collection",
        name: "Places",
        image:
          "https://media.ldscdn.org/images/media-library/collections/structures-category-new-138x91.jpg",
        id: "places",
        url:
          "https://www.lds.org/media-library/images/categories/places?lang=eng"
      },
      {
        type: "collection",
        name: "Events",
        image:
          "https://media.ldscdn.org/images/media-library/collections/life-events-category-new-138x91.jpg",
        id: "events",
        url:
          "https://www.lds.org/media-library/images/categories/events?lang=eng"
      },
      {
        type: "collection",
        name: "Social Media",
        image:
          "https://media.ldscdn.org/images/media-library/collections/desktop-and-mobile-wallpaper-category-138x91.jpg",
        id: "social-media",
        url:
          "https://www.lds.org/media-library/images/categories/social-media?lang=eng"
      },
      {
        type: "collection",
        name: "Seminary and Institute",
        image:
          "https://www.lds.org/bc/content/ldsorg/media-library/category-images/doctrinal-mastery-wheel-graphic-1990910-category.jpg",
        id: "seminary-and-institute",
        url:
          "https://www.lds.org/media-library/images/categories/seminary-and-institute?lang=eng"
      },
      {
        type: "collection",
        name: "Things",
        image:
          "https://media.ldscdn.org/images/media-library/collections/abstract-patterns-category-138x91.jpg",
        id: "things",
        url:
          "https://www.lds.org/media-library/images/categories/things?lang=eng"
      }
    ]
  };
}
