const Product = require('../models/Product');
const mongooseConnect = require('../lib/mongoose');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if(method === 'POST'){       
        const {id, product} = req.body;
        const tag = product.category;
        const subtitle = product.subtitle;
        const thumbnail = product.mainImg;
        const sub = product.subs;
        const desc = product.desc;
        const chars = product.dets;    
        const secTag = 'test';
        const title = product.title;

        const productDoc = await Product.updateOne(
            {id: id},
            {
                tag,
                subtitle,
                thumbnail,
                sub,
                desc,
                chars,
                secTag,
                title
            },
            {upsert: true} 
        );
        res.json(productDoc);
    }
}

module.exports = handle;