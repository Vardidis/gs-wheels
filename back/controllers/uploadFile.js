const {storage} = require('../lib/firebase');
const { ref, uploadBytes } = require("firebase/storage");

const uploadImage = async (req, res) => {
    try { 
      const file = req.file;

      if (!file) {
        return res.status(400).send("No file uploaded.");
      }

      const storageRef = ref(storage, `${file.originalname}`);
      const metadata = {
        contentType: file.mimetype
      }

      await uploadBytes(storageRef, file.buffer, metadata);

      res.status(200).send("File uploaded successfully!");
      
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).send("Error uploading file: " + error.message);
    }
};

module.exports = uploadImage;