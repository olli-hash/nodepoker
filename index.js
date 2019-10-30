const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const path = require('path');
const exphdb = require('express-handlebars');

app.engine('handlebars', exphdb());
app.set('view engine', 'handlebars');
//app.set('views', path.join(__dirname, 'views'))
app.set('views', './views')
app.use(express.static("STATIC-SERVING/cards"))

app.get('/render', function (req, res) {
    res.render('poker', { evaled_hand: 'FLUSH', c1: "KH", c2: "QH", c3: "TH", c4: "4H", c5: "2H" }, function (err, html) {
        res.send(html)
    })
})

app.listen(port, function() {
    console.log(`http://localhost:${port}/render`)
})