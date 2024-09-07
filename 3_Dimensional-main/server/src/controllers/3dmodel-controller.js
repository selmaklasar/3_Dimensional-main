const GLTFModel = require('../libs/database/models');
const { Readable } = require('stream');

const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

require('dotenv').config();




const gltfUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  
  console.log('File uploaded successfully to S3');
  res.status(200).send(`File ${req.file.originalname} uploaded and saved to S3`);
};


{/*
const gltfRetrival = async (req, res) => {
  try {
    const { filename } = req.params;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: filename,  
    };

    const data = await s3.send(new GetObjectCommand(params));

    res.setHeader('Content-Type', 'model/gltf+json');

    const stream = data.Body.pipe(res);

    stream.pipe(res);


    stream.on('error', (error) => {
      console.error('Stream error:', error);
      res.status(500).send('Internal server error');
    });

  } catch (error) {
    console.error('Error retrieving the file:', error);
    res.status(500).send('Error retrieving the file');
  }
};

*/}





{/*   
const gltfUpload=async(req, res)=> {
  try {
    const file = req.file;
    const model_name=req.model_name
    console.log("File uploaded");

    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    const newGLTF = new GLTFModel({
      filename: file.originalname,
      data: file.buffer,
      model_name:model_name
    });
    await newGLTF.save();

    res.send(`File ${file.originalname} uploaded and saved to MongoDB`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

  */}



const gltfRetrival = async (req, res) => {
  try {
    const model_name = req.params.model_name;
    const gltf = await GLTFModel.findOne({ model_name });

    if (!gltf) {
      return res.status(404).send("GLTF file not found");
    }

    res.setHeader('content-type', 'model/gltf+json');
    const stream = new Readable();
    stream.push(gltf.data);
    stream.push(null); 

    stream.pipe(res);
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send('Internal server error');
  }
};

{/*   

const gltfRetrival = async (req, res) => {
  try {
    const filename = req.params.filename;

    // Check Redis cache
    const cachedData = await redisClient.get(filename);

    if (cachedData) {
      console.log('Cache hit');
      res.setHeader('content-type', 'model/gltf+json');
      const stream = new Readable();
      stream.push(cachedData);
      stream.push(null);
      return stream.pipe(res);
    }

    // If not in cache, fetch from database
    const gltf = await GLTFModel.findOne({ filename });

    if (!gltf) {
      return res.status(404).send("GLTF file not found");
    }

    // Cache the GLTF data
    await redisClient.set(filename, gltf.data);

    // Serve the GLTF data
    res.setHeader('content-type', 'model/gltf+json');
    const stream = new Readable();
    stream.push(gltf.data);
    stream.push(null);
    stream.pipe(res);
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send('Internal server error');
  }
};



*/}



module.exports = {
  gltfUpload,
  gltfRetrival
};
