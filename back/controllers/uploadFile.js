const {bucket} = require('../lib/firebase');

const uploadImage = async (file, fileName) => {
    try {
      const fileUpload = bucket.file(fileName);
      await fileUpload.save(file);
      console.log(`Image uploaded successfully: ${fileName}`);
      return fileUpload.publicUrl(); // Get the public URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
};

module.exports = uploadImage;