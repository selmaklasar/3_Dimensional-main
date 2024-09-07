const mongoose=require('mongoose')


const materialSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  name: { type: String, unique: true },
  type: { type: String, index: true  },

});

const material = mongoose.model('material', materialSchema);  

module.exports=material