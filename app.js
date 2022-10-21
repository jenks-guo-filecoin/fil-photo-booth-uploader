var express = require("express");
var app = express();

// use the express-static middleware
app.use(express.static("public"))



app.post("/upload-w3s", (req, res, next) => {
    res.json({
        "status": true,
        "error": "Error, upload to Web3.Storage is not successful. Use email please.",
        "url": "https://bafkreihx5xxfwet5tz57ipzrwp72zcornpgvujotu5nl2otgkphppscfmu.ipfs.nftstorage.link/"
    });
   });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});