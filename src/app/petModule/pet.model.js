const mongoose = require("mongoose");
const {Schema} = mongoose;

const PetSchema = new Schema({
    name:{type: String , required: true},
    species:{type: String , required: true},
    owner:{type: Schema.Types.ObjectId , ref: "Client"}
});

PetSchema.methods.toJSON = function () {

    let pet = this.toObject();
    delete pet._id;
    delete pet.__v;
    return pet;
}



module.exports = mongoose.model('Pet' ,PetSchema);