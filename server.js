var express = require('express'),
  app = require('./app')
  port = process.env.PORT || 8080,

app.listen(port);
console.log('API server started on: ' + port);