const Text = require('../models/Text');

const editText = async(texts) => {
    try {        
        if (!texts) {
            return false;
        }

        for(let doc of texts){           
            if(doc.section === 0){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items
                    }}
                )
            }else if(doc.section === 1){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 11){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,                    
                    }}
                )
            }else if(doc.section === 12){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,
                        items2: doc.items2,
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 2){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,                   
                    }}
                )
            }else if(doc.section === 22){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,
                        items2: doc.items2,
                        items3: doc.items3,
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 3){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,
                        items2: doc.items2,                    
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 4){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,                    
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 5){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,                   
                        placeText: doc.placeText,
                        placeText2: doc.placeText2,
                        placeText3: doc.placeText3
                    }}
                )
            }else if(doc.section === 51){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {
                        items: doc.items,                   
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 52){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {                 
                        placeText: doc.placeText
                    }}
                )
            }else if(doc.section === 53){
                await Text.updateOne(
                    {section: doc.section},
                    {$set: {                  
                        placeText: doc.placeText
                    }}
                )
            }
        }
        return true;
    } catch (error) {
      console.error("Error uploading texts:", error);
      return false
    }
};

module.exports = editText;