
// create symbols and content, logic, functions, objects


/*
	var left = pokerjs.give_card()
	var right = pokerjs.give_card()
	var handfamily = pokerjs.eval_family(left, right)

*/

/*
	Nur, was nach exports geschoben (angehängt) wird, ist für das Mutter-Skript sichtbar und verwendbar.
	
	exports.
	module.exports.
	
	Gibt es modulbezogene, private Variablen, die von den exportierten Objekten genutzt werden können?
	
	
	
	?: Welche Welt will ich anbieten?
	
	- eine Sammlung nützlicher Funktionen, Variablen und Objekte
	- nur Objekte
	
	??: Wie hängen diese exportierten Daten/Funktionen/Objekte zusammen?
	
	
	
	
*/



/*
	create game (single table mode | multi table mode)
	add cardstacks to game
	add users to game/table
	start game

*/




// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.game_class = game_class
// ++++++++++++++++++++++++++++++++++++++++++++++++


function game_class (users) {
	
	this.users = users
	
}

game_class.prototype.add_user (u) {
	
	this.users.push(u)
	
	
	
}





// -------- -------- -------- -------- -------- -------- -------- -------- -------- -------- 


// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.two_digits_number_class = two_digits_number_class
// ++++++++++++++++++++++++++++++++++++++++++++++++


function two_digits_number_class (a,b) {
	
	this.base = b
	this.counter = a
	this.value = a / b
}

two_digits_number_class.prototype.change = function (a,b) {
	
	//two_digits_number_class.prototype.constructor(a,b)    ??
	
	two_digits_number_class.prototype.constructor.call(this,a,b)
	
}


// -------- -------- -------- -------- -------- -------- -------- -------- -------- -------- 


// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.give_card_from_cardstack = give_card_from_cardstack
// ++++++++++++++++++++++++++++++++++++++++++++++++

function give_card_from_cardstack(cardstack) {
	
	
	return [cardstack].give_card()
	
}

// -------- -------- -------- -------- -------- -------- -------- -------- -------- -------- 


// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.give_card = give_card
// ++++++++++++++++++++++++++++++++++++++++++++++++

function give_card() {
	
	
	
	
}



// -------- -------- -------- -------- -------- -------- -------- -------- -------- -------- 



// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.eval_family = eval_family
// ++++++++++++++++++++++++++++++++++++++++++++++++

function eval_family() {
	
	
	
	
}




// -------- -------- -------- -------- -------- -------- -------- -------- -------- -------- 

// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.cardstack_class = cardstack_class
// ++++++++++++++++++++++++++++++++++++++++++++++++

function cardstack_class() {
	
// Für eine Konstruktorfunktion ist das zu initialisierende Objekt lediglich ein Objekt, das auf
// Bearbeitung wartet.

// Eine Unterfunktion wird vergessen, wenn die Konstruktorfunktion stirbt. ???
	
	function give_card() {
		
		
	}

}


cardstack_class.prototype.give_card = function () {
	
	
	
	
	
	
}




module.exports.getUser = () => {
    // Code here
}

module.exports.getUsers = () => {
    // Code here
}

exports.a = 77



