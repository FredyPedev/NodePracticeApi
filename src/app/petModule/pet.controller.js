let _petService = null;

class DigimonController{
    constructor({petService}){

        _petService = petService;

    }

    async getAll(req, res) {
        const pets = await _petService.getAll();
        return res.send(pets);
      }

      async create(req, res) {
        const { body } = req
        console.log(body);
        const createdpet = await _petService.create(body);
        return res.status(201).send(createdpet);
      }

      async getById(req, res){
      
        const { petId } = req.params;
        const pet = await _petService.get(petId);
        return res.send(pet);
          
        }

        async update(req, res) {
          const { body } = req;
          const { petId } = req.params;
          const updatedPet= await _petService.update(petId, body);
          return res.send(updatedPet);
        }
      
        async delete(req, res) {
          const { petId } = req.params;
          const deletedPet= await _petService.delete(petId);
          return res.send(deletedPet);
        }

      




}


module.exports = DigimonController; 