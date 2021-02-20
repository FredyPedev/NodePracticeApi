module.exports = 
(req , res , next)=>{

const token = req.headers["authorization"];
if (!token){
    res.send("Token must be send");
}




}







