const Product = require('../models/Product');
const mongooseConnect = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if(method === 'DELETE'){       
        const {id} = req.query; 

        const productDoc = await Product.deleteOne({
            id: id            
        });
        res.json(productDoc);
    }
}

module.exports = handle;