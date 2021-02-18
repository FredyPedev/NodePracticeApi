const {createContainer,asClass,asValue,asFunction} = require("awilix");
//Config

//TamerModule

const {ClientController , Client , ClientRepository , ClientService , ClientRoutes }=require('../app/clientModule');
//DigimonModule
const {PetController, Pet , PetRepository , PetService , PetRoutes} = require ('../app/petModule');

const Routes = require("./mainRoute");

const config = require("../config/index");
const App = require(".");


const container = createContainer();

container
.register({
    app : asClass(App).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).
register({
    clientRoutes: asFunction (ClientRoutes).singleton(),
    clientController: asClass (ClientController.bind(ClientController)).singleton(),
    clientRepository: asClass (ClientRepository).singleton(),
    clientService: asClass (ClientService).singleton(),
    clientModel: asValue (Client)
}).
register({
    petController: asClass (PetController.bind(PetController)).singleton(),
    petRepository: asClass (PetRepository).singleton(),
    petService: asClass (PetService).singleton(),
    petModel: asValue (Pet),
    petRoutes: asFunction (PetRoutes).singleton()

});
module.exports = container;