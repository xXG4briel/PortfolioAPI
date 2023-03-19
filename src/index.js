const express = require('express');
const cors = require('cors')

const app = express();

const routes = require('./app/routes');

app.use(cors());

app.use(routes);

app.listen(3000, () => {
    console.log('serving started 🔥');
});
