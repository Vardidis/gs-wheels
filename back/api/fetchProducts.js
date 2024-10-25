const Product = require('../models/Product');
const mongooseConnect = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){    
        try{
            const products = await Product.find({});     
            res.status(200).json(products);
        }catch(error){
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }else{
        res.status(405).json({error: 'Method not allowed'})
    }

}

module.exports = handle;