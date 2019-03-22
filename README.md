# bulletin

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build	# or preact build --no-prerender

# test the production build locally
npm run serve

# serve functions locally
firebase serve --only functions

# deploy all: bulletin and media websites and functions
firebase deploy

# deploy website to Firebase (after build)
firebase deploy --only hosting:bulletin

# deploy media library website
firebase deploy --only hosting:media

# deploy functions (from "functions" folder)
firebase deploy --only functions

# generate src/assets/hymns.json file
node tools/generate-hymns.js

# generate media-library files to media-library folder
node tools/generate-media.js

# run tests with jest and preact-render-spy
npm run test
```

# copy Green Ward to Sample Ward

for dev:
curl "http://localhost.charlesproxy.com:5000/ward-bulletin-9b31d/us-central1/greenToDemo"
for production:
curl "https://us-central1-ward-bulletin-9b31d.cloudfunctions.net/greenToDemo"

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Fonts

Generate myfont file at http://fontello.com/. See directions at https://github.com/fontello/fontello/wiki/How-to-save-and-load-projects for loading and saving project
