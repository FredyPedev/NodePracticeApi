let _authService

class AuthController {

    constructor({authService}){
        console.log('auth controller is fine')

        _authService = authService;

    }

    async singUp(req , res){
        const {body} = req;
        try {
         const  ProccessOrDenied = await _authService.signUp(body);
         if(ProccessOrDenied == true){
             res.send("user exist");
         }else{
             res.send(ProccessOrDenied);
         }
            
        } catch (error) {
            console.log(error)
            
        }
     
      
 
    }

    async singIn (re, res){


    }





}

module.exports = AuthController;