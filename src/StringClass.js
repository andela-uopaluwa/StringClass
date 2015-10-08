//Extending string class
String.prototype.hasVowels = function(){
	// check for occurrence of vowels and return a boolean
	return (/[aeiou]/i).test(this);
}

String.prototype.toUpper = function(){
	// change lowercase characters in string to uppercase
	var regEx = /[a-z]/g;
	return this.replace(regEx, function(arg){
		return String.fromCharCode(arg.charCodeAt() - 32);
	});
}

String.prototype.toLower = function(){
	// change uppercase characters in string to lowercase
	var regEx = /[A-Z]/g;
	return this.replace(regEx, function(arg){
		return String.fromCharCode(arg.charCodeAt() + 32);
	});
}

String.prototype.ucFirst = function(){
	// set first character to uppercase where applicable
	var regEx = /^[a-z]/;
	return this.replace(regEx, function(arg){
		return String.fromCharCode(arg.charCodeAt() - 32);
	});
}

String.prototype.isQuestion = function(){
	//check that string ends with question mark
	return (/\?$/).test(this);
}

String.prototype.words = function(){
	// return an array of words in string
	return this.replace(/[^A-Za-z ]/g,"").split(/ \b/);
}

String.prototype.wordCount = function(){
	// return the number of words in string
	if(this.words){
	return this.words().length;
	} 
	else {
		return this.replace(/[^A-Za-z ]/g,"").split(/ \b/).length;
	}
}

String.prototype.toCurrency = function(){
	//add comma seperator to '000 units
	var sections = this.split(/\./);
	return sections[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '.' + sections[1];
}

String.prototype.fromCurrency = function(){
	// convert string currency to number without ',' seperator
	return parseFloat(this.replace(/[^0-9.]/g,"")) ;
}