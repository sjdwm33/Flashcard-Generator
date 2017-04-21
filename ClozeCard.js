function ClozeCard(full, deletion, partial){
	this.full = full;
	this.deletion = deletion;
	this.partial = full.replace(deletion, "...");
};


module.exports = ClozeCard;