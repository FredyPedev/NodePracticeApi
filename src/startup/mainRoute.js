const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
 const compression = require("compression");
 const {PageNoFoundMiddleware} = require("../app/Middlewares");

// require("express-async-errors");
//const {NotFoundMiddleware,ErrorMiddleware} = require("../middleware");


module.exports = function({
    clientRoutes,
    petRoutes,
    authRoutes
}){
    
  
    const apiRoutes = express.Router();

    apiRoutes
    
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.json());


    
    apiRoutes.use("/client", clientRoutes );
    apiRoutes.use("/auth", authRoutes );
    apiRoutes.use("/pet", petRoutes );

    apiRoutes.get('/' ,(req, res) => {
        res.send('Hello World');
    });
    apiRoutes.use(PageNoFoundMiddleware);

    //router.use(NotFoundMiddleware);
   // router.use(ErrorMiddleware);

    return apiRoutes;
};

