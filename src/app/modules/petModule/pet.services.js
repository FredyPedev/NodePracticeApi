BaseServices = require("../common/BaseService");

let _petRepository = null;

class PetService extends BaseServices{

    constructor({petRepository}) {
        super(petRepository);
        _petRepository = petRepository;
    };




}


module.exports = PetService ;