var express = require("express");

var app = express();
app.listen(8999, () => {
 console.log("Server running on port 8999");
});

app.post("/upload-w3s", (req, res, next) => {
    res.json({
        "status": true,
        "error": "Error, upload to Web3.Storage is not successful. Use email please.",
        "url": "https://bafkreihx5xxfwet5tz57ipzrwp72zcornpgvujotu5nl2otgkphppscfmu.ipfs.nftstorage.link/"
    });
   });