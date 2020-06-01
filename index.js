const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

//const poker = require('pokerhand.js')

var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use("/script", express.static('script'))
app.use(express.static('node_modules/cardsJS/cards'))


function express_number_class (a,b) {
	
	this.base = b
	this.counter = a
	
	this.value = a / b
}












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


app.get('/deal_hand', function (req, res) {
    var hand = { 
        situation_name: 'dealed hand',
        left:    ,
		right:   ,
		handfamily: 
    }
    res.render('poker', deal_hand, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})




var situation = {  hi: "hi"   }

app.get("/pokerhand", function(req,res){
    
    console.log(situation)
    
    var a_hand = { left: "KC", right: "TC", situation: situation }
    
    res.render("pokerhand", a_hand)
    
})




app.listen(port, function() {
    console.log('http://localhost:' + port)
    console.log(`http://localhost:${port}/pokerhand         `)
})

