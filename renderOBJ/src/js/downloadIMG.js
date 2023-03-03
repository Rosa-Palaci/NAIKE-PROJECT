import fs from 'fs'
import request from 'request'
// import img from "./public/NaikeIdent.png";

let uri;
// Get from html request (GET)
uri = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-L81ah983GpfLRQUuYQnxnOfI/user-WpkMuAY6c1Qh9vWSMgTCIznI/img-LPeYjxYXtEQZzYcVQxgx5UVo.png?st=2023-03-03T21%3A25%3A57Z&se=2023-03-03T23%3A25%3A57Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-03T00%3A13%3A10Z&ske=2023-03-04T00%3A13%3A10Z&sks=b&skv=2021-08-06&sig=UsqJn9yGWuTfo1rqSOswgm6rCdBH7IcbW4BA2vIYvZU%3D' 
const path = './src/assets/result.png';
// Manage import images
const download = (filename, callback) => {
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(path, () => console.log("done"));