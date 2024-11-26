const Text = require('../models/Text');
const {mongooseConnect} = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){    
        try{
            let texts = await Text.find({});    
            
            if(!texts){
                res.status(400).json({ error: 'No texts available' });
            }
                                         
            res.status(200).json(texts);
        }catch(error){
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch texts' });
        }
    }else{
        res.status(405).json({error: 'Method not allowed'})
    }

}

module.exports = handle;