const { storage } = require('../lib/firebase');
const { ref, deleteObject } = require('firebase/storage');

const deleteImage = async(fileName) => {
  try {
    const storageRef = ref(storage, fileName);

    await deleteObject(storageRef);

    console.log(`Image ${fileName} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

module.exports = {deleteImage};