const express = require('express');

const app = express();

app.all('/js/*', (req, res) => {
  res.status(403).send({
    message: 'Acesso Negado'
  });
});

app.all('/style/*', (req, res) => {
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

app.listen(2222, () => {
  console.log('Serving in port 2222');
});
