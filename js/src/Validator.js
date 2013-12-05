/*
	Checks that all the values are correct.
*/
function Validator() {
	this.dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
};

Validator.prototype.isTextareaEmpty = function(text){
	if(text === ""){
		return true;	
	}
	return false;
};

Validator.prototype.isANumber = function(text){
	var isANumber = true;
	for(var i = 0; i < text.length; i++){
		var character = text.charAt(i);
		if(isNaN(character)){
			return false;
		}
	}
	return isANumber;
};

Validator.prototype.isAnEmail = function(email){
	// Regular expresion for email
	var regExEmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	if(regExEmail.test(email)){
		return true;
	}
	return false;
};

Validator.prototype.isAValidDNI = function(dni){
	var dniLetter = dni.charAt(dni.length - 1);
	var dniNumbers = dni.substring(0, 8);

	if(this.dniLetters[Number(dniNumbers) % 23] === dniLetter.toUpperCase()){
		return true;
	}
	return false;
};

Validator.prototype.isAValidPhone = function(telephone){
	// Regular expresion for spanish phone numbers (fix numbers and mobile)
	var regExPhone = new RegExp("^9|6[0-9]{8}$");

	if(regExPhone.test(telephone)){
		return true;
	}
	return false;
};
