

function build (requestBody) {
    let {path, method, keys, queryParams, body, responseRules} = requestBody


    return [path, method, (req, res) => {
        res.send([path, method])
    }]
}


module.exports = {
    build
}