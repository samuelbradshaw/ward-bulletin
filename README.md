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
cd functions
firebase serve --only functions

# deploy website to Firebase (after build)
firebase deploy

# deploy functions (from "functions" folder)
firebase deploy --only functions

# run tests with jest and preact-render-spy
npm run test
```

# copy Green Ward to Demo Ward

for dev:
curl "http://localhost.charlesproxy.com:5000/ward-bulletin-9b31d/us-central1/greenToDemo"
for production:
curl "https://us-central1-ward-bulletin-9b31d.cloudfunctions.net/greenToDemo"

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Fonts

Generate myfont file at http://fontello.com/. See directions at https://github.com/fontello/fontello/wiki/How-to-save-and-load-projects for loading and saving project
