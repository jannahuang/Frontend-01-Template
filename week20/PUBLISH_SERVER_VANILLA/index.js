const http = require('http');
const fs = require('fs');
const unzip = require('unzipper');

const server = http.createServer((req, res) => {
  if (req.url.match(/^\/auth/)) {
    return auth(req, res);
  }
  let writeStream = unzip.Extract({path: '../server/public'});
  req.on('data', trunk => {
    writeStream.write(trunk);
  })
  req.on('end', trunk => {
    writeStream.end(trunk);
  })
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  })
});

function auth(req, res) {
  let code = req.url.match(/code=([^&]+)/)[1];
  let state = "abc123"
  let client_secret = "56773a687890fb1685e81b6e24d8ddd80661468d"
  let client_id = "Iv1.e5d549ae1aa37a18"
  let redirect_uri = encodeURIComponent("http://localhost:8081/auth")
}

const request = https.request(options, (response) => {
  response.on('data', (d) => {
    let result = d.toString().match(/access_token=([^&]+)/)
    let token = result[1];
    res.writeHead(200, {
      'access_token': token,
      'Content-Type': 'text/plain'
    })
    res.end('okay');
  })
})

request.on('error', (e) => {
  console.error(e);
});
request.end();

server.listen(8081);