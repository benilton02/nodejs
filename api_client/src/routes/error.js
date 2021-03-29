module.exports = {
    error: (request, response, next) => {
        const error = new Error("NOT FOUND")
        error.status = 404
        next(error)
    },
    errorResponse:(error, request, response, next) => {
        response.status(error.status || 500)
        return response.send({
            erro:{
                msg: error.message
            }
        })
    }
}