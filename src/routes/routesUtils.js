function getAllRoutesInfo(layers) {
    return layers
            .filter(l => l.route?.path && l.route?.methods)
            .map(mapRouteInfo)
}

function getRouteInfo(layers, path, method) {
    return layers
            .filter(l => l.route?.path == path && l.route?.methods[method])
            .map(mapRouteInfo)
}


function deleteRoute(layers, path, method) {
    return [
            {path, method}, 
            layers.filter(l => !(l.route?.path == path && l.route?.methods[method]))
        ]
}

function mapRouteInfo(layer) {
    return {
        path: layer.route.path,
        method: Object.entries(layer.route.methods).filter(m => m[1])[0][0],
        keys: layer.keys
    }
}



module.exports = {
    getAllRoutesInfo,
    getRouteInfo,
    deleteRoute
}