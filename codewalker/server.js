var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", //"/api/v3", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    }
});

var express = require('express')
var app = express()

app.get('/', function (req, res) {

    github.user.getFollowingFromUser({
        // optional:
        // headers: {
        //     "cookie": "blahblah"
        // },
        user: "eladrk"
    }, function(err, res) {

        var json = JSON.stringify(res);

        res.send(json)

        //console.log(JSON.stringify(res));

    });


})

app.listen(3000)

