import express from 'express';
import data from './data.js';
const app= express();
const port = process.env.PORT || 3000;

app.get('/api/products/:id', (req, res)=>{
    const product = data.products.find((x)=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product is noe found"});
    }
})
app.get('/api/products', (req, res)=>{
    res.send(data.products);
})
app.get('/', (req, res)=>{
    res.send('server is ready');
});

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
});