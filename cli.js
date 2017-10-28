	const clozeCard = require('clozeCard.js');
	const basicCard = require('BasicCard.js');
	let cardType = process.argv[2];

if (cardType === 'basic'){
		let cardFront = process.argv[3];
		let cardBack = process.argv[4];
		let card1 = new basicCard(cardFront, cardBack);
		console.log('Your card has been created!\n'+'Card Front: '+card1.front+'\n'+'Card Back: '+card1.back);
		console.log(card1);
}
else if (cardType === 'cloze'){ 
		let text = process.argv[3];
		let cloze = process.argv[4];
		let cloze1 = new clozeCard(text, cloze);
		console.log('Your card has been created!\n'+'Card Text: '+cloze1.partial()+'\n'+'Card Cloze: '+cloze1.cloze);
		console.log(cloze1);
}
else{
		console.log("We don't make those kinds of cards");
}