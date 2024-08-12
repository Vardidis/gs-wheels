const path = require('path');
const fs = require('fs');

const getProducts = () => {
    fs.readFile(path.join(__dirname, 'items.json'), 'utf8', async(err, data) => {
        if(err){
            res.status(500).send('Error reading products file');
        }
        const products = JSON.parse(data).products;        

        return products;
    });
};

const submitMessage = (name, email, tel, text) => {
    fs.readFile(messages, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        let msgData = JSON.parse(data);

        const date = getDate();

        msgData.messages.push({
            "name": name,
            "tel": tel,
            "email": email,
            "text": text,
            "date": date,
            "read": false
        });

        fs.writeFile(messages, JSON.stringify(msgData, null, 2), (response, writeErr) => {
            if(writeErr){
                res.status(500);
                console.error('Error writing file:', writeErr);  
                return;              
            }
            res.status(200).json({
                message: 'Data received successfully',
                receivedData: msgData,
              });
              console.log('File successfully updated');
        })
    });
}