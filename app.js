const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const { formatDate } = require('./helpers/dateFormat');
app.engine('handlebars', exphbs({
   helpers: { formatDate: formatDate },
   defaultLayout: 'main'
  }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/fa', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));

app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));


app.get('/', (req, res) => {
  res.render('index');
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});