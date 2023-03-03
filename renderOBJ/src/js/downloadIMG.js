import { fs } from "./fs";
import request from "./request";
// import img from "./public/NaikeIdent.png";

let uri, path;
// Get from html request (GET)
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
