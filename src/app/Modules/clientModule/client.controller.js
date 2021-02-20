const HashFun = require('../../helper/Hash');
let _clientService = null;

class ClientController{
    constructor({clientService}){
    
      _clientService = clientService; 
        console.log("client controller is  OKEY");

    }

    async getById(req, res){
      
    const { clientId } = req.params;
    const client = await _clientService.get(clientId);
    return res.send(client);
      
    }
    

    async update(req, res) {
      const { body } = req;
      const hashedpass =  HashFun(body.password)
      body.password = hashedpass;
      const { clientId } = req.params;
      const updatedClient = await _clientService.update(clientId, body);
      return res.send(updatedClient);
    }
  
    async delete(req, res) {
      const { clientId } = req.params;
      const deletedClient= await _clientService.delete(clientId);
      return res.send(`${deletedClient.name} was deleted`);
    }




    
    async getAll(req, res) {
        const clients = await _clientService.getAll();
        return res.send(clients);
      
      }
       
      async create(req, res) {

        const { body } = req;

        try {
         await _clientService.findByUsername(body.username);
          return res.send("This username exist");
        } catch (error) {
          const createdClient = await _clientService.create(body);
          return res.status(201).send(createdClient);
        }
        
      /* 
      Warning this code explota si no encuentra a nadie
      const IhaveThisUsername = await _clientService.findByUsername(body.username);
      console.log(IhaveThisUsername)
        if (!IhaveThisUsername){
          try {
           
          } catch (error) {
            res.send(`${error}`);
          }


        }else{
          res.send("This username exist");
        }

       
       
      
      */
    }
      async sayhello (req , res){
        //thats is for testing
        const {saludo} = req.params;
        res.send( saludo);      
      }

}


module.exports = ClientController; 