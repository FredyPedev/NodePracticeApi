const {Router} = require ("express");

module.exports = function({clientController}){
    const router = Router();

    router.get("/" , (req, res)=>{
        res.send("Hello to client route");
    })
    router.get("/getAll", clientController.getAll);
    router.post("/create", clientController.create);
    router.get("/getById/:clientId", clientController.getById);
    router.get("/:saludo", clientController.sayhello);
    router.patch("/update/:clientId", clientController.update);
    router.delete("/delete/:clientId", clientController.delete);
    return router;


}