// sinple express server
const express = require('express');

const companyRouter = require('./routers/company.router');

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(companyRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
