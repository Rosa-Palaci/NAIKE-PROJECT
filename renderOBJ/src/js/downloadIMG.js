const fs = require('fs'), request = require('request')
// import img from "./public/NaikeIdent.png";

let uri;
// Get from html request (GET)
uri = 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80'; 
const path = './src/assets/result.png';
// Manage import images
const download = (filename, callback) => {
  apiHandler(document.getElementById("text-result").innerHTML);
  request.head(uri, (err, res, body) => {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

download(path, () => console.log("done"));
