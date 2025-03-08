  const https = require('https');

const options = {
    hostname: 'api.github.com',
    path: '/users/octocat',
    method: 'GET'
};

https.get(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    res.on('data', (data) => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.log(`Error: ${err.message}`);
});