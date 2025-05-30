const Product = require('../models/Product');
const {mongooseConnect} = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if(method === 'DELETE'){       
        const {ids} = req.query;         
        const productDoc = await Product.deleteMany({
            _id: {$in: ids}            
        });
        res.json(productDoc);
    }
}

module.exports = handle;