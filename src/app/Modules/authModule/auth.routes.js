const {Router} = require ("express");

module.exports = function({authController}){
    const router = Router();

    router.get("/" , (req, res)=>{
        res.send("Hello to auth route");
    })
    router.post("/singUp", authController.singUp);
    router.post("/singIn", authController.singIn);
    return router;


}