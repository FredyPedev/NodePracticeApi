module.exports = 
(req , res , next) => {

     const url =  req.protocol + '://' + req.get('host') + req.originalUrl;

    res.status(404).send({
    
        status:404,
        message: `${url} Page not found`
    });

}




