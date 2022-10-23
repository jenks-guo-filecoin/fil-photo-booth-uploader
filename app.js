var express = require("express");
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello from Node.js!')
})

app.post("/upload-w3s", (req, res, next) => {
    res.json({
        "status": true,
        "error": "Error, upload to Web3.Storage is not successful. Use email please.",
        "url": "https://bafkreihx5xxfwet5tz57ipzrwp72zcornpgvujotu5nl2otgkphppscfmu.ipfs.nftstorage.link/"
    });
   });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})