const PORT = process.env.PORT || 3000;
const express= require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const allBooks = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended:  false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    console.log("in get");
    res.render('index', {
        pageTitle: "Add Book"

    });

});
app.post('/output', (req, res, next) => {
    console.log('in post');
    //const title = req.body.bookTitle;
    //const sum = req.body.summary;
    //allBooks.push(title);
    //allBooks.push(sum);
    allBooks.push(req.body);
    console.log(allBooks);
    res.render('catalog', {
        pageTitle: "Books catalog", 
        //title: title,
        //sum: sum,
        allBooks: allBooks,

    });


});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
