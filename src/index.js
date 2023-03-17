const express = require('express');

const app = express();

const routes = require('./app/routes');

app.use(routes);

app.listen(3000, () => {
    console.log('serving started 🔥');
});
