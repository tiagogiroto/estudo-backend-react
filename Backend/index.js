const cors = require('cors');
const express = require('express');

const app = express();
const port = 8081;

app.use(express.json());
app.use(cors());


const api = [
    {
        "nome":"joao"
    },
    {
        "nome":"gustavo"
    },
    {
        "nome":"raul"
    },
    {
        nome:"tiago"
    }
];



app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/api',(req, res)=>{
    
    try {
            res.json(api);

        } catch (err) {
            res.status(500).json({ error: err.message });
    }
})

app.listen(port, () => {
  console.log(`API funcionando na porta ${port}!`);
});