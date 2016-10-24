/**
 * "parser" checks inputs searching for patterns
 *
 * @name: parser
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: checks inputs searching for patterns
 * @params {none}
 * @return: none
 */	
var parser = {
	version: "0.0.1",
	version: function () {
		return this.version;
	},
	/**
	 * @name: isDigit
	 * @description: Checks if number is between 0-9
 	 * @params {number}
 	 * @return: true if number is between 0-9, false otherwise
	 */
	isDigit: function (number) {
 		if(isNaN(number))
 			return false;
 		else return true;
	},
	/**
	 * @name: isBit
	 * @description: Checks if number is 0 or 1
 	 * @params {number}
 	 * @return: true if number is 0 or 1, false otherwise
	 */
	isBit: function (number) {

		for(var i = 0; i<number.length; i++){
			if(number[i] != 0 || number[i] != 1){
				return false;
			}
			else{
				return true;
			}
		}
	},
}