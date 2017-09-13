var Crypto = (function() {

	// currently only works with the following characters:
	var CHAR_CODES = [
	
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
	
	];

	var encrypt = function(plaintext, key) {
	
		var stringDifference = difference(plaintext, key);
	
		var cipher = applyDifferenceForward(key, stringDifference);
		
		return cipher;	
		
	
	};
	
	var difference = function(text, key) {
	
		var difference = [];
	
		for (var i = 0; i < text.length; i++) {
		
			var plainChar = text[i];
			var keyChar = key[i];
			
			var plainCode = CHAR_CODES.indexOf(plainChar);
			var keyCode = CHAR_CODES.indexOf(keyChar);
			
			if (keyCode >= plainCode)
				difference.push(keyCode - plainCode);
			else
				difference.push(26 + (keyCode - plainCode));
		
		}
		
		return difference;
	
	};
	
	var applyDifferenceForward = function(key, differenceVector) {
			
		var ret = [];
		
		for (var i = 0; i < key.length; i++) {
		
			var keyChar = key[i];
			var keyCode = CHAR_CODES.indexOf(keyChar);
			
			var forward = CHAR_CODES[(keyCode + differenceVector[i]) % 26];
			
			ret.push(forward);
		
		}
	
		return ret.join('');
	
	};
	
	var applyDifferenceBackward = function(key, differenceVector) {
	
		var ret = [];
		
		for (var i = 0; i < key.length; i++) {
		
			var keyChar = key[i];
			var keyCode = CHAR_CODES.indexOf(keyChar);
			
			if (keyCode - differenceVector[i] < 0)
				ret.push(CHAR_CODES[26 + (keyCode - differenceVector[i])]);
			else
				ret.push(CHAR_CODES[keyCode - differenceVector[i]]);
		
		}
	
		return ret.join('');
	
	};
	
	
	var decrypt = function(cipher, key) {
	
		var stringDifference = difference(key, cipher);
		
		var plaintext = applyDifferenceBackward(key, stringDifference);
		
		return plaintext;
	
	};
	
	return {
	
		encrypt: encrypt,
		decrypt: decrypt
	
	};

})();
