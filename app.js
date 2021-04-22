const PORT = process.env.PORT || 3000;
const express= require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:  false}));

app.get('/', (req, res, next) => {

});
app.post('/output', (req, res, next) => {

});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
