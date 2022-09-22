function authenticate (req,res,next){
    console.log("Middleware 2 executing .....")
    next();
};

module.exports = authenticate 