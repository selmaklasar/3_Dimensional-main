const purchase=require('../libs/database/userPurchase')


const userPurchaseUpload = async (req, res) => {
  try {
    if (!req.file) {
      console.log("No file uploaded");
      return res.status(400).send('No files were uploaded.');
    }

    const file = req.file;
    const type = req.body.type;

    const image = new purchase({
      data: file.buffer,
      contentType: file.mimetype,
      name: file.originalname,
     
    });

    try {
      await image.save();
      console.log("Database stored");
      res.send('File uploaded successfully.');
    } catch (dbError) {
      console.error("Database save error:", dbError); // Log the database error
      res.status(500).send('Database save error.');
    }

  } catch (error) {
    console.error("Unexpected error:", error); // Log any unexpected errors
    res.status(500).send('Internal server error.');
  }
};


const userPurchaseGet = async (req, res) => {
    try {
        const allmodel = await purchase.find();
    
        if (!allmodel || image.length === 0) {
          return res.status(404).send("Image file not found");
        }
    
        const modelDatas = allmodel.map(allmodel => ({
          contentType: allmodel.contentType || 'json/gltf',
          data: allmodel.data.toString('base64')
        }));
    
        res.status(200).json(modelDatas); // Ensure status is set before sending JSON
      } catch (error) {
        res.status(500).send('Internal server error');
      }
  };
  module.exports = {
    userPurchaseUpload ,
    userPurchaseGet

  };