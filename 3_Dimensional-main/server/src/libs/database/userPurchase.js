const mongoose=require('mongoose')


const purchaseSchema = new mongoose.Schema({
    filename: String,
    data: { type: Buffer, required: true },

  });

const UserPurchase = mongoose.model('Userpurchase',purchaseSchema);  

module.exports=UserPurchase