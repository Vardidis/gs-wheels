const Product = require('../models/Product');
const mongooseConnect = require('../lib/mongoose');
const {getImage} = require('./fetchOneImage');

async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){    
        try{
            let products = await Product.find({});    
 
            await Promise.all(
                products.map(async(product, index) => {
                    await getImage(product.thumbnail)
                    .then((imgPath) => {
                        products[index].thumbnail = imgPath;
                        
                    });
                                        
                    await Promise.all(
                        product.sub.map(async(img, indx) => {
                            await getImage(img)
                            .then((imgPath) => {
                                products[index].sub[indx] = imgPath;
                            });                    
                        })
                    );
                })
            );
                                         
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