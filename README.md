Refresh your app configuration without restarting the application
===================

## How to use
- `npm start`
- open http://localhost:3000/
- You can see default configuration on homepage
- Click the link for setting new configuration and now you can see new cofiguration is added without restarting the application

```js
let memoryCache = require('memoryCache');

let config = {
  "appName": "memoryCache",
  "emailEnabled": true,
  "smsEnabled": false
}

// init the connection in your bootstrap file using following code
memoryCache.init(config).then(() => {
    console.log('Successfully set config');
});

// later you can use getCache method to fetch the stored config
let myConfig = memoryCache.getCache();
// this can be used thoughout your entire application just like how we store in config.json file

// to reset the new config you can again call the init function with new config on particular event e.g. on setConfig route
// to add new config in an existing config we can use setCache method
memoryCache.setCache('appLog', true);

// and later you will get the new config in getCache method
```
