const packageInfo = require('../package.json')
const express = require("express");
const config = require('config')
const app = express();
const routes = require('./routes')
const port = process.env.PORT || config.get('port')
  
app.use('/', routes)

app.listen(port, () => {
 console.log(`Application ${packageInfo.name} started at port ${port}`);
});