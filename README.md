# mock-node-express
dummy mock server with node and express. It can generate some data.


# docker
You can run it as docker container with: 

build
```
docker build --tag mock-server .
```
and run
```
docker run -d -e PORT=8080 -p 5000:8080  mock-server
```

# Gens

You can use existed generators or code your own. Gens in `gen/gen.js` are **functions** so it might be create once and recall as many times as you want.

