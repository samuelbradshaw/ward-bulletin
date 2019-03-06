async function getMediaData(collection) {
  const fetch = require("node-fetch");
  const url =
    "https://media-lib-api.lds.org/medialib/v1/media?language=eng" +
    (collection ? `&collectionId=${collection}` : "");
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
  return result.url;
}

function saveFolder(title, id, items) {
  const fs = require("fs");
  console.log(title, id);
  fs.writeFileSync(
    `src/assets/media-library/${id}.json`,
    JSON.stringify(items)
  );
  //   console.log(JSON.stringify(items));
}

async function processCollection(collection, title, id) {
  // save data
  let items = collection.content.map(item => {
    if (item.classType === "COLLECTION") {
      let thumb = findImageSize(item.thumbnails, 200);
      return {
        type: "folder",
        id: item.id,
        title: item.title,
        thumb
      };
    } else if (item.classType === "ASSET") {
      let thumb = findImageSize(item.thumbnails, 200);
      let mobile = findImageSize(item.thumbnails, 768);
      let print = item.downloadUrl;
      return { type: "image", title: item.title, thumb, mobile, print };
    }
  });
  saveFolder(title, id, items);

  // now get any sub collections
  let collections = collection.content.map(async item => {
    if (item.classType === "COLLECTION") {
      let subCollection = await getMediaData(item.id);
      await processCollection(subCollection, item.title, item.id);
    }
  });
  return await Promise.all(collections);
}

async function getRootCollection() {
  let data = await getMediaData();
  let content = data.content;
  let images = content.find(item => item.title === "Images") || content[0];
  let root = await getMediaData(images.id);
  await processCollection(root, images.title, "images:eng");
}

async function getMedia() {
  let root = await getRootCollection();
}

getMedia();
