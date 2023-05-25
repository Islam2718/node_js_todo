const express = require('express');

const app = express();

// return object 
// app.use(express.json());

// row data 
app.use(express.row());


app.get('/', (req, res) => { 
    res.send('This is Home Page');
})

app.post('/', (req, res) => { 
    console.log(req.body)
    res.send('This is Home Page post');
})

app.listen(3000, () => { 
    console.log('Listening in port 3000');
})