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

app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
});

app.use(express.static('src'));


app.listen(8080, () => {
    console.log('Serving in port 8080');
});
