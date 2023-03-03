<<<<<<< HEAD
import { fs } from "./fs";
import request from "./request";
=======
const fs = require('fs'), request = require('request')
>>>>>>> 9c12f869f5be92b53e4f131b51d22e4467c2ea27
// import img from "./public/NaikeIdent.png";

let uri;
// Get from html request (GET)
<<<<<<< HEAD
uri = "https://www.google.com/images/srpr/logo3w.png";
path = "./src/assets/result.png";

async function apiHandler(text) {
  // Query and image generated.

  // Response from the Api.
  response = await fetch("http://20.234.7.9/generate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: text,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      uri = response.message;
=======
uri = 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80'; 
const path = './src/assets/result.png';
// Manage import images
const download = (uri, filename, callback) =>{
    request.head(uri, (err, res, body) =>{
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
>>>>>>> 9c12f869f5be92b53e4f131b51d22e4467c2ea27
    })
    .then((response) => console.log(response));
}

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
