const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
//({dest: __dirname + ‘/uploads/images’}) ==>allows us to take in files and store it in 
//our server in the defined path. Here /uploads/images is choosen as destination.

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('listening to Port:'+ PORT);
});

