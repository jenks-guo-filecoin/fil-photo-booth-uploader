import { Web3Storage, File } from 'web3.storage';
import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';

const app = express()
const PORT = process.env.PORT || 3000

dotenv.config();

app.get('/', (req, res) => {
    res.send('Yes, it is working...')
})

app.post("/upload-w3s", multer().single(), async (req, res, next) => {
    
    const photo = req.file;
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log(req.body);
    console.log(username);
    console.log(password);


    if (username == process.env.SPARKBOOTH_USER && password == process.env.SPARKBOOTH_PASSWORD ) {

        const file = new File(new Uint8Array(photo.buffer), photo.originalname);

        try {
            var client = new Web3Storage({ token: process.env.W3S_API_TOKEN })

            const cid = await client.put([file]);

            console.log("cid:  " + cid);
    
            res.json({
                "status": true,
                "error": "",
                "url": "https://" + cid + ".ipfs.nftstorage.link/" + photo.originalname
            });

        } catch (e) {

            res.json({
                "status": false,
                "error": "Error, upload to Web3.Storage is not successful. Use email please.",
                "url": ""
            }); 

        }
    } else {

        res.json({
            "status": false,
            "error": "Error, wrong username and/or password.",
            "url": ""
        }); 

    }

});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})