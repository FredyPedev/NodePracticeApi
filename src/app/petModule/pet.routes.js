const {Router} = require ("express");

module.exports = function({petController}){
    const router = Router();

    router.get("/" , (req, res)=>{
        res.send("Hello to pet route");
    })
    router.get("/getall", petController.getAll);
    router.post("/create", petController.create);
    router.get("/getAll/:petId", petController.getById);
    router.patch("/update/:petId", petController.update);
    router.delete("/delete/:petId", petController.delete);
    return router;
}