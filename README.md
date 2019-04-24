<https://wardbulletin.app>

# Ward Bulletin App

### Overview

Ward Bulletin App is a PWA (progressive web app) for displaying and editing church bulletins/programs. It is optimized for sacrament meetings and announcements for members of The Church of Jesus Christ of Latter-day Saints, but can be used as a program for any meeting.

### Contributions

Contributions to the app are welcome if you would like to make a pull request. Queries can be sent to: <wardbulletinapp@gmail.com>

### Developer Details

The app is built on Preact (a lightweight version of React) and W3.css for styling. Both libraries are very lightweight, so the app loads quickly.

The backend is based on Firebase:

- Firebase Hosting - serving the website
- Cloud Functions - add account, save bulletin, load/save templates, get recent bulletins
- Storage - bulletin data
- Authentication - login in for editors
