const express = require('express');
const app = express();
const path = require('path');
const port = 8080 ;
const l = console.log.bind(console);

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// app.set('views', './views')

app.use(express.static("STATIC-SERVING/cards"))



app.get('/render', function(req, res) {
    
    res.render('poker', { evaled_hand : 'FLUSH', c1 : "KH", c2 : "QH", c3 : "TH", c4 : "4H", c5 : "2H" }, function (err, html) {
        
        res.send(html)
    })
    
});





app.listen(port, () => {
    
    l(`  http://localhost:${port}/render    `)
    
})


