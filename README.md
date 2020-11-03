# Custom Facebook and Google Analytics Dashboard

Custom Facebook and Google Analytics Dashboard based on Facebook Graph API and Google Analytics Reporting API v4 with OAuth2, charts and tables.

This dashboard allows you to:
- view data of your Facebook page using Facebook Graph API
- view data of your website using Google Analytics Reporting API v4

## Technologies used

- [React.js](https://reactjs.org/)
- [Facebook Graph api](https://developers.facebook.com/docs/graph-api)
- [Google Analytics API](https://developers.google.com/analytics/devguides/reporting/core/v4)

## Run the app locally

1. Clone this repo
2. Add your CLIENT_ID into .env file:
    REACT_APP_CLIENT_ID='YOUR_CLIENT_ID'
3. Add your Facebook App ID into appId inside src/Dashboard/Basic/index.js:
    appId={FACEBOOK_APP_ID}
4. Add your access token into accesstoken inside src/Dashboard/Basic/index.js:
    accesstoken = {PAGE_ACCESS_TOKEN}
5. Run ```npm install```
6. Run ```npm start```

