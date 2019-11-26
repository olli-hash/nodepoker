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


    //           ...........................................................................      game simulator

function game_simulator_class(table_size, starting_stack, player_list){
    
                                         //  "starting_stack"  als Standard für neue Player
    
    this.quality_max = 10
    this.second_index_max = 3         
    // ===   from -3 to +3
    
    this.table_size = table_size || 5
    this.starting_stack = starting_stack || 10000
    
    
    this.player_list = []
    for (var i = 0; i < table_size; i++){
        this.player_list.push(new player_class(this.starting_stack))
    }
    
    this.have_winner = false
    
    this.start_game_round = function(){
        give_cards1()
        betting1()
        if (! this.have_winner)   {
            give_cards2()
            betting()
            if (! this.have_winner)   {
                give_cards3()
                betting()
                if (! this.have_winner)   {
                    give_cards4()
                    betting()
                }
            }
        }
    }
    
    function betting1(){
        // "ask player", one after the other; set Blinds; start with "UTG"
    }
    
    function betting(){
        
    }
    
    function give_cards1(){
        
    }
    
    function give_cards2(){
        
    }
    
    function give_cards3(){
        
    }
    
    function give_cards4(){
        
    }
    
    
    
    
    
    this.draw_quality = function draw_quality(){
        
        
        var x = Math.floor(Math.random() * )
        
        
    }
    this.make_next_move = function(){
        
        
        
        
    }
}


function player_class(stack){
    
    this.stack = stack
    this.games = []
    
    this.hand = []
    
    
    this.history = []
    
//     this.card_good_luck = []
//     this.card_bad_luck = []
    
    this.game_observation = []
    this.mood = function() {     return 1        }
    this.mood2 = function() {     return { a : 3, b : 10 , ab_max : 10   }    }
    
                                                    // outer_situation : {                     }
    this.decide = function(outer_situation){
        
        
        
        
    }
    
    this.behaviour = new behaviour_class()
    
    
}









function situation_preflop1_class() {
    this.phase = "preflop"
    
    this.tournament_context = new tournament_context_class()
    
    this.core = new core_parameters_class(10000,200,600,[800])
    
    var table_size = 5
    
    this.position = new position_parameters_class(table_size,0)
    
    this.opponents = new opponents_class(table_size - 1)
    
    this.players_before = new pressure_before_class(this.position.players_before)
    
    this.players_behind = new pressure_behind_class(this.position.players_behind)
}

function tournament_context_class(){
    this.currency_display = "€"
    this.real_money_game = false
    this.real_money_buyin = 0
    this.tournament_mode = "ring game"
}

function core_parameters_class(stack,BB,to_call,pots) {
    this.stack = stack
    this.BB = BB
    this.stack_as_BB = this.stack / this.BB
    this.to_call = to_call
    this.to_call_as_BB = this.to_call / this.BB
    this.to_call_as_stack = this.to_call / this.stack
    this.pots_involved = pots
    if (this.pots_involved.length > 1) { this.one_player_allin = true }
    else { this.one_player_allin = false }
    
}

function position_parameters_class(n,pos){
    this.table_size = n
    this.position = pos                   // startet bei 0… === Anzahl Spieler vor unserem Spieler
    this.players_before = this.position
    this.players_behind = this.table_size - this.position - 1
}

function opponents_class(n){
    return []
}

function pressure_before_class(n) {     // n === Anzahl Spieler vor unserem Spieler
    
    switch (n) {
        
        case 5 :
            this.raises = 1
            this.lasting_calls = 1
            this.competing_players_now = 2     // Spieler, die nach derzeitigem Stand "im Spiel" sind
            break
        
        case 0 :
            this.raises = 0
            this.lasting_calls = 0
            this.competing_players_now = 0
            break
            
        default :
            this.raises = 0
            this.lasting_calls = n
            this.competing_players_now = n
    }
    
    this.pressure_index = this.competing_players_now    // fake
}

function pressure_behind_class(n){
    
    
    this.pressure_index = 2      // fake
    
    
}




var situation = new situation_preflop1_class()

app.get("/pokerhand", function(req,res){
    
    console.log(situation)
    
    var a_hand = { left: "KC", right: "TC", situation: situation }
    
    res.render("pokerhand", a_hand)
    
})




app.listen(port, function() {
    console.log('http://localhost:' + port)
    console.log(`http://localhost:${port}/pokerhand         `)
})

