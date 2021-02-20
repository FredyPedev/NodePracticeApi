
let _clientRepository = null;

class AuthService{
    

    constructor({clientRepository}){
        console.log('auth services is fine')
        _clientRepository = clientRepository;

    }

    async signUp(user){

        const { username} = user;
        const userExist = await _clientRepository.findByUsername(username);
        if (userExist){
           return true;
        }else{
            return  await _clientRepository.create(user);
        }
    }

    async singIn(user){

        const {username , password} = user;
        const userExist = await _clientRepository.findByUsername(username);
        if(!userExist){
            return console.log("User no exist")
        } 
        const ValidPassword = userExist.comparePaswords(password);
        if (!ValidPassword){
            return console.log("Password is wron v:");
        }

    }



}

module.exports = AuthService;