const { storage } = require('../lib/firebase');
const { listAll, ref, getDownloadURL } = require('firebase/storage');
require('dotenv').config();

const fetchAllImages = async() => {
    try{
        const directoryRef = ref(storage, process.env.FIREBASE_ENDPOINT);

        const result = await listAll(directoryRef);
        
        const imageUrls = await Promise.all(
            result.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                const originalName = itemRef.name;

                return {
                    url,
                    originalName
                };
            })
        );
    
        return imageUrls;
    }catch(error){
        console.error('Error fetching images:', error);
        throw error;
    }    
};

module.exports = { fetchAllImages };