const { storage } = require('../lib/firebase');
const { ref, getDownloadURL } = require('firebase/storage');
require('dotenv').config();

const getImage = async (fileName) => {
    try {   
        const file = ref(storage, `${process.env.FIREBASE_ENDPOINT + fileName}`);
        const url = await getDownloadURL(file);

        await Promise.all([url]);   
        return url;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

module.exports = { getImage };