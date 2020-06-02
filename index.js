const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

//const poker = require('pokerhand.js')

const pokerjs = require("pokerjs.js")



var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use("/script", express.static('script'))
app.use(express.static('node_modules/cardsJS/cards'))





app.get('/', function (req, res) {
    var five_card_hand = { 
        evaled_hand: 'FLUSH',
        c1: "KH",
        c2: "QH",
        c3: "TH",
        c4: "4H",
        c5: "2H"
    }
    res.render('poker', five_card_hand, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})


app.get('/deal_hand', function (req, res) {
	var left = pokerjs.give_card()
	var right = pokerjs.give_card()
	var handfamily = pokerjs.eval_family(left, right)
    var deal_hand = { 
        situation_name: 'dealed hand',
        left: left  ,
		right: right ,
		handfamily: handfamily ,
		number_of_players: 2
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

