const Message = require('../models/Message');
const {mongooseConnect} = require('../lib/mongoose');
const formatDate = require('../lib/formatDate');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'PUT'){            
        const {id} = req.body;        
    
        const messageDoc = await Message.updateOne(
            {_id: id},
            {read: true}
        );
        res.json(messageDoc);
        }

}

module.exports = handle;