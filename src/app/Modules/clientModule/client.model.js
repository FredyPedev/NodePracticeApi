const mongoose = require("mongoose");
const {compareSync , hashSync, genSaltSync} = require("bcryptjs");
const HashFunction = require("../../helper/Hash")
const {Schema} = mongoose;

const ClientSchema = new Schema({

    name:{type: String , required: true},
    lastname:{type: String , required: true},
    username:{type:String , required: true},
    password:{type: String , required: true },
    pets: [{type: Schema.Types.ObjectId, ref :'Pet'}]
    

});

ClientSchema.methods.toJSON = function () {
    let client = this.toObject();
  //  delete client.password;
  //  delete client._id;
    delete client.__v;
    return client;
}

ClientSchema.methods.comparePaswords = (password)=>{
  return compareSync(password, this.password)
}


ClientSchema.pre('save' , async function(next){
  const client = this;
  
  if(!client.isModified("password")){
      return next();
  };
  client.password = HashFunction(client.password);
  next();
}); 







module.exports = mongoose.model('Client' ,ClientSchema);    