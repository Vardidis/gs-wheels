const Story = require('../models/Story');
const {mongooseConnect} = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){    
        try{
            let texts = await Story.find({});    
            
            if(!texts){
                res.status(400).json({ error: 'No stories available' });
            }
                                         
            res.status(200).json(texts);
        }catch(error){
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch stories' });
        }
    }else{
        res.status(405).json({error: 'Method not allowed'})
    }

}

module.exports = handle;