
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









// ++++++++++++++++++++++++++++++++++++++++++++++++
											exports.express_number_class = express_number_class
// ++++++++++++++++++++++++++++++++++++++++++++++++


function express_number_class (a,b) {
	
	this.base = b
	this.counter = a
	this.value = a / b
}

express_number_class.prototype.change = function (a,b) {
	
	//express_number_class.prototype.constructor(a,b)    ??
	
	express_number_class.prototype.constructor.call(this,a,b)
	
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



function cardstack_class() {
	

	
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



