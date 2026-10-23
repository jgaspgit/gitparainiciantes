const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Ola esse é meu novo repositorio clonado' })
});

app.get('/Ola', (req, res) => {
    res.status(200).send({ message: 'Ola' });
});

app.listen(4001, () => {
    console.log('Api inicializada na porta 4001');
})