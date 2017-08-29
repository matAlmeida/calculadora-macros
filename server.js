const express = require('express');
const app = express();

app.all('/js/*', (req, res, next) => {
    res.status(403).send({
        message: 'Acesso Negado'
    });
});

app.all('/style/*', (req, res, next) => {
    res.status(403).send({
        message: 'Acesso Negado'
    });
});

app.use(express.static('src'));

app.listen(8080, () => {
    console.log('Example app listening on port 3k!');
});
