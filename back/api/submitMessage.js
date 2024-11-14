const Message = require('../models/Message');
const {mongooseConnect} = require('../lib/mongoose');
const formatDate = require('../lib/formatDate');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'POST'){            
        const {name, email, tel, text} = req.body;
              
        const read = false;
        const date = formatDate()

        const messageDoc = await Message.create({
            name,
            email,
            tel,
            text,
            read,
            date
        });
        res.json(messageDoc);
        }

}

module.exports = handle;