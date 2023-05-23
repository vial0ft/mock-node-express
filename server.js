const express = require('express');
const {build} = require('./src/routes/routeBuilder')
const {
    getAllRoutesInfo,
    getRouteInfo,
    deleteRoute
} = require('./src/routes/routesUtils')
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req, res) => {
    console.log(app._router.stack)
    res.send("ok")
});

app.post('/mock', (req, res) => {
    console.log(req.boby)
    let [path, method, handler] = build(req.body)
    app[method](path, handler)
    res.send(getRouteInfo(app._router.stack, path, method))
})

app.delete('/mock', (req, res) => {
    const { path, method } = req.body
    const [deleted, newStack] = deleteRoute(app._router.stack, path, method)
    app._router.stack = newStack
    res.send(deleted)
})

app.get('/mock', (req, res) =>
    res.send(getAllRoutesInfo(app._router.stack))
)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
