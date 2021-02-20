const BaseRepository = require("../common/BaseRepository");
 let _client = null;

class ClientRepository extends BaseRepository{

    constructor({clientModel}) {
        super(clientModel);
        console.log("client Repository is  OKEY");
    }

    async getAll(){
        return await this.model.find().populate('pets');
    }

    async get (id){
        return await this.model.findById(id).populate("pets");
    }

    async findByUsername (usname){
        return await this.model.findOne({username :  usname});
    }
   


};

module.exports = ClientRepository;