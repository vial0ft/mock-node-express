const express = require('express'); 
const gens = require('./gen/gen')
const app = express();              
const port = process.env.PORT || 5000;                  


app.get('/', (req, res) => {
            
    res.send({
        str: gens.genString(5)(),
        int: gens.genInteger(5, 10)(),
        float : gens.getFloat(-10, 0, 3)(),
        arr: gens.genArray(10, gens.genString(10))()
    })      
                                                        
});

app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});