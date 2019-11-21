const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use("/script", express.static('script'))
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


function situation_standard1_class(pressure_from_before, pressure_from_behind) {
    
    this.phase = "preflop"
    this.stack = 10000
    this.BB = 200
    this.currency = "€"
    this.real_money = false
    this.rel_stack = this.stack / this.BB
    this.table_size = 5
    this.position = 0                   // === Anzahl Spieler vor unserem Spieler
    this.players_before = this.position
    this.players_behind = this.table_size - this.position - 1
    
    this.pressure_from_before = pressure_from_before
    
    this.pressure_from_behind = pressure_from_behind
    
}

function pressure_before_class(n) {     // n === Anzahl Spieler
    
    switch (n) {
        
        case 5 :
            this.raises = 1
            this.lasting_calls = 1
            this.active_players = 2
            break
            
        default :
            this.raises = 0
            this.lasting_calls = n
            this.active_players = n
    }
    
    
    
}












app.get("/pokerhand", function(req,res){
    
    
    
    
    
    
    console.log(situation)
    
    
    var a_hand = { left: "KC", right: "TC", situation: situation }
    
    res.render("pokerhand", a_hand)
    
})





app.listen(port, function() {
    console.log('http://localhost:' + port)
    console.log(`http://localhost:${port}/pokerhand         `)
})

