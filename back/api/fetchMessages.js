const Message = require('../models/Message');
const {mongooseConnect} = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){    
        try{
            const messages = await Message.find({});    
            res.status(200).json(messages);
        }catch(error){
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    }else{
        res.status(405).json({error: 'Method not allowed'})
    }

}

module.exports = handle;