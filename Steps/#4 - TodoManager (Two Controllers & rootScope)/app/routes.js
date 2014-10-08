// app/routes.js

module.exports = function (app) {
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/views/index.html'); // load our public/index.html file
    });
};

