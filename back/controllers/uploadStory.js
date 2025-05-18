const { mongooseConnect } = require('../lib/mongoose');
const Story = require('../models/Story');

const uploadStory = async(form) => {
    try { 
        await mongooseConnect();
        const response = await Story.create({
            icon: form.icon,
            name: form.name,
            title: form.title,
            text: form.text
        })
        if(response){
            return {success: true};
        }
        return {success: false};                 
    } catch (error) {      
        console.error("Error uploading file:", error.message);
        return {success: false};
    }
};

module.exports = {uploadStory};