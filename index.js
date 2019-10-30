const port = process.env.PORT || 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('node_modules/cardsJS/cards'))

app.get('/', function (req, res) {
    var hand = { 
        evaled_hand: 'FLUSH',
        c1: "KH",
        c2: "QH",
        c3: "TH",
        c4: "4H",
        c5: "2H"
    }
    res.render('poker', hand, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})

app.listen(port, function() {
    console.log('app listen on port: ' + port)
})