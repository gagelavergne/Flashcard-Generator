function clozeCard (text, cloze) {
	if(!(this instanceof clozeCard)){
		return new clozeCard(text, cloze);
	}
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function(){
		let charNum = text.indexOf(cloze);
		if (charNum != -1){
			let partial = text.replace(cloze, '...');
			return partial;
		}
		else{
			console.log('The cloze does not appeat in the text');
		}
	};
}
module.exports = clozeCard;