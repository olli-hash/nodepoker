const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const pokerjs = require("./pokerjs.js")

var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'views'))				// views verfügbar machen
app.use("/script", express.static('script'))				// Die Skripte clientseitig bei /script verfügbar machen
app.use(express.static('node_modules/cardsJS/cards'))		// Die Karten clientseitig bei "/" verfügbar machen

// routes & "event-handlers" ...
app.get('/', function (req, res) {
    var five_cards_hand = {
        evaled_hand: 'FLUSH',
        c1: "KH",
        c2: "QH",
        c3: "TH",
        c4: "4H",
        c5: "2H"
    }
    res.render('poker', five_cards_hand, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})

// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------

app.get('/showcards', function (req, res) {

	var whole_deck = (function () {
		var scores = [ "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
		var suits = [ "D", "H", "S", "C" ]
		var cards = []
		var i , j
		for (i = 0 ; i < suits.length ; i++) {
			for (j = 0 ; j < scores.length ; j++) {
				cards.push(scores[j] + suits[i])
			}
		}
		return { cards: cards  }
	})()

    res.render('showcards', whole_deck, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})

// -------- -------- -------- -------- -------- -------- -------- -------- -------- --------

app.get('/deal_hand', function (req, res) {
	var left = pokerjs.give_card()
	var right = pokerjs.give_card()
	var handfamily = pokerjs.eval_family(left, right)
    var deal_hand = {
        game_situation_name: 'dealed hand',
        left: left  ,
		right: right ,
		handfamily: handfamily ,
		number_of_players: 2 ,
		position: 1 ,
		actions: [ "SB", "BB"]
    }
    res.render('deal_hand', deal_hand, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})

app.get('/tell_cardstacksize', function (req, res) {
	var cardstacksize = pokerjs.cardstacksize()
	var context_obj = { size : cardstacksize   }
    res.render('tell_cardstacksize', context_obj, function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})


app.get('/reset_cardstack', function (req, res) {

    res.render('reset_cardstack', null , function (err, html) {
        if (err) console.error(err) // add proper express error handling
        res.send(html)
    })
})


var situation = {  hi: "hi"   }
console.log(`http://localhost:${port}/pokerhand         `)
app.get("/pokerhand", function(req,res){
    // console.log(situation)
    var a_hand = { left: "KC", right: "TC", situation: situation }
    res.render("pokerhand", a_hand)
})

console.log(app.routes)


app.listen(port, function() {
    console.log('http://localhost:' + port)

	console.log(`http://localhost:${port}/showcards        `)
	console.log(`http://localhost:${port}/reset_cardstack         `)
    console.log(`http://localhost:${port}/tell_cardstacksize         `)
    console.log(`http://localhost:${port}/deal_hand         `)
    console.log(`http://localhost:${port}/         `)
})
