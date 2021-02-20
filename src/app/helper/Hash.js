const {hashSync, genSaltSync} = require("bcryptjs");


module.exports = function (Tohash){
    const salt = genSaltSync(10);
    const hashedthing = hashSync(Tohash, salt);
    return hashedthing;
}