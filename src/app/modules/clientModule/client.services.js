const BaseService = require("../common/BaseService");

let _clientRepository = null;

class ClientService extends BaseService{

    constructor({clientRepository}) {
        super(clientRepository);
        _clientRepository = clientRepository;
        console.log("client Services Is okey OKEY");
    }
   
    async findByUsername (usname){
        if (!usname) {
          const error = new Error();
          error.status = 400;
          error.message = "username must be sent";
          throw error;
        }
    
        const currentEntity = await _clientRepository.findByUsername(usname);
    
        if (!currentEntity) {
          const error = new Error();
          error.status = 404;
          error.message = "entity does not found";
          throw error;
        }
    
        return currentEntity;
      }


}


module.exports = ClientService ;