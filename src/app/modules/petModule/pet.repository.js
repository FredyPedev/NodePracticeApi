const BaseRepository = require('../common/BaseRepository');
let _pet = null;

class PetRepository extends BaseRepository{

    constructor({petModel}) {
        super(petModel);
        _pet = petModel;
    }


};

module.exports = PetRepository;