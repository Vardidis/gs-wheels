const Product = require('../models/Product');
const {mongooseConnect} = require('../lib/mongoose');
const mongoose = require('mongoose');

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

        let productDoc;        
        if(id){
            productDoc = await Product.updateOne(
                {_id: id},
                {   
                    $set: {
                        tag: tag,
                        subtitle: subtitle,
                        thumbnail: thumbnail,
                        sub: sub,
                        desc: desc,
                        chars: chars,
                        secTag: secTag,
                        title: title
                    }                    
                },             
            );            
        }else{
            productDoc = await Product.create({
                _id: new mongoose.Types.ObjectId(),
                tag,
                subtitle,
                thumbnail,
                sub,
                desc,
                chars,
                secTag,
                title
            });
        }
        
        res.json(productDoc);
    }
}

module.exports = handle;