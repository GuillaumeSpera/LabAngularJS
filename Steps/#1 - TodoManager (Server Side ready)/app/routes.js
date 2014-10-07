// app/routes.js

module.exports = function (app) {

    var express = require('express');

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests

    app.get('*', function (req, res) {
        res.sendFile('./public/views/index.html'); // load our public/index.html file
    });

    app.use(express.static(__dirname + '/public'));

};

