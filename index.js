'use strict';




exports.handler = (event, context, callback) => {

  // var serviceNew = require('./serviceFun');
  callback(null, serviceNew.publicMethod1());
};

