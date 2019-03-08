async function getMediaData(title, collection) {
  const url =
    "https://media-lib-api.lds.org/medialib/v1/media?language=eng" +
    (collection ? `&collectionId=${collection}` : "");
  let json = await fetchMediaData(url);
  let data = json.content;

  while (json.numberOfElements === json.size) {
    // get another page
    json = await fetchMediaData(`${url}&start=${json.number + json.size}`);
    data = data.concat(json.content);
  }

  // write raw data
  const fs = require("fs");
  fs.writeFileSync(
    `dev/media-data/${title} ${collection}.json`,
    JSON.stringify(data)
  );

  return data;
}

async function fetchMediaData(url) {
  const fetch = require("node-fetch");
  let response = await fetch(url, {
    headers: {
      Authorization:
        "Basic aW9zMTo1MDI1YTdjZS01NDM5LTQ2NjgtOTRmOC1lMDE2ZTI2NDk4NWY="
    }
  });
  let json = await response.json();
  return json;
}

function findImageSize(thumbnails, size) {
  let minDiff = 99999;
  let result = null;
  thumbnails.forEach(image => {
    if (image.url) {
      let diff = Math.abs(image.width - size);
      if (diff < minDiff) {
        minDiff = diff;
        result = image;
      }
    }
  });
  return result;
}

function saveFolder(title, id, items) {
  const fs = require("fs");
  // console.log(title, id);
  fs.writeFileSync(
    `src/assets/media-library/${id}.json`,
    JSON.stringify(items)
  );
  //   console.log(JSON.stringify(items));
}

function size(w, h) {
  return `${w}x${h}`.padEnd(10);
}

async function processCollection(collection, title, id) {
  // save data
  let items = collection.map(item => {
    if (item.classType === "COLLECTION") {
      let thumb = findImageSize(item.thumbnails, 200);
      if (thumb.width && thumb.height) {
        console.log(
          size(thumb.width, thumb.height),
          size(" ", " "),
          `Collection: ${title} / ${item.title}`
        );
      }

      return {
        type: "folder",
        id: item.id,
        title: item.title,
        thumb: thumb.url
      };
    } else if (item.classType === "ASSET") {
      let thumb = findImageSize(item.thumbnails, 200);
      let mobile = findImageSize(item.thumbnails, 768);
      let print = item.downloadUrl;
      console.log(
        size(thumb.width, thumb.height),
        size(mobile.width, mobile.height),
        `${title} / ${item.title}`
      );
      return {
        type: "image",
        title: item.title,
        thumb: thumb.url,
        mobile: mobile.url,
        print
      };
    }
  });
  saveFolder(title, id, items);

  // now get any sub collections
  let collections = collection.map(async item => {
    if (item.classType === "COLLECTION") {
      let subCollection = await getMediaData(item.title, item.id);
      await processCollection(subCollection, item.title, item.id);
    }
  });
  return await Promise.all(collections);
}

async function getRootCollection() {
  let content = await getMediaData("Images");
  let images = content.find(item => item.title === "Images") || content[0];
  let root = await getMediaData(images.title, images.id);
  await processCollection(root, images.title, "images:eng");
}

async function getMedia() {
  let root = await getRootCollection();
}

getMedia();
