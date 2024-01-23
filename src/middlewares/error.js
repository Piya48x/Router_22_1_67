const errorHandler = (err, req, res, next) => {
    if(err.name === "token erorr"){
        err.statusCode = 400;
        err.meeage = "Token erorr"

    }
    res.status(err.statusCode || 500).json({message : err.message || "Ineranl Server Erorr"})
}

module.exports = errorHandler