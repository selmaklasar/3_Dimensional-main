const material=require('../libs/database/material')


const materialUpload = async (req, res) => {
  try {
    if (!req.file) {
      console.log("No file uploaded");
      return res.status(400).send('No files were uploaded.');
    }

    const file = req.file;
    const type = req.body.type;

    const image = new material({
      data: file.buffer,
      contentType: file.mimetype,
      name: file.originalname,
      type: type
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


const imageRetrival = async (req, res) => {
  try {
    const image = await material.find({ type: req.params.type });

    if (!image || image.length === 0) {
      return res.status(404).send("Image file not found");
    }

    const imageDatas = image.map(image => ({
      contentType: image.contentType || 'image/jpeg',
      data: image.data.toString('base64')
    }));

    res.status(200).json(imageDatas); // Ensure status is set before sending JSON
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};



{/*   

const imageRetrival = async (req, res) => {
// redisClient.js
const cacheKey = `images:${req.params.type}`;

try {
  // Check if data is in the cache
  let data;
  try {
    data = await redisClient.get(cacheKey);
  } catch (err) {
    console.error('Redis error:', err);
    return res.status(500).send('Internal server error');
  }

  if (data) {
    // If cache hit, return the data from the cache
    return res.status(200).json(JSON.parse(data));
  } else {
    // If cache miss, fetch data from the database
    const image = await material.find({ type: req.params.type });

    if (!image || image.length === 0) {
      return res.status(404).send('Image file not found');
    }

    const imageDatas = image.map(img => ({
      contentType: img.contentType || 'image/jpeg',
      data: img.data.toString('base64')
    }));

    // Save the fetched data in the cache
    try {
      await redisClient.setEx(cacheKey, 3600, JSON.stringify(imageDatas));
    } catch (err) {
      console.error('Redis error:', err);
    }

    // Return the data
    res.status(200).json(imageDatas);
  }
} catch (error) {
  console.error('Internal server error:', error);
  res.status(500).send('Internal server error');
}
};

*/}





  module.exports = {
    materialUpload,
    imageRetrival

  };