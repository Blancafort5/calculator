/**
 * "converter" converts into different formats
 *
 * @name: converter
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: Converts into different formats
 * @params {none}
 * @return: none
 */	
var converter = {
	version: "0.0.1",
	version: function () {
		return this.version;
	},
	/**
	 * @name: decimal2binary
	 * @description: Converts from decimal to binary
 	 * @params {decimal}
 	 * @return: the decimal number converted to binary
	 */
	decimal2binary: function (decimal) {
		alert(parseInt(decimal,10).toString(2));
	},
	/**
	 * @name: binary2decimal
	 * @description: Converts from binary to decimal
 	 * @params {binary}
 	 * @return: the binary number converted to decimal
	 */
	binary2decimal: function (binary) {
 		alert(parseInt(binary,2));
	},
}
