const mongoose = require("mongoose");
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
    delete client.password;
  //  delete client._id;
    delete client.__v;
    return client;
}





module.exports = mongoose.model('Client' ,ClientSchema);    