const path = require('path');
const fs = require('fs');

const assets = path.join(__dirname, 'public/images');
const messages = path.join(__dirname, 'messages.json');

const getMessages = () =>{
    fs.readFile(messages, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        let msgData = JSON.parse(data);
        return msgData;
    });
};

const getUploads = () => {
    fs.readdir(assets, (err, files) => {
        if(err){
            res.status(500);
        }
        let allFiles = []
        files.forEach(file => {
            allFiles.push(file);
        });

        return {"files": allFiles};
    });
}