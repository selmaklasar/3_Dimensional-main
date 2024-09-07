const mongoose=require('mongoose')


const gltfSchema = new mongoose.Schema({
    filename: String,
    data: { type: Buffer, required: true },
    model_name: { type: String, index: true  },
  });

const GLTFModel = mongoose.model('GLTFModel', gltfSchema);  

module.exports=GLTFModel