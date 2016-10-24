/**
 * "index" index view controller
 *
 * @name: controller/index.js
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: index view controller
 * @params {none}
 * @return: none
 * @operations {"decimal2binary", "binary2decimal"}
 */	
 $("#convert").click(function(){
		indexController.convert();
	});

var indexController = {
	version: "0.0.1",
	operation: "decimal2binary",
	version: function () {
		return this.version;
	},
	/**
	 * @name: swapInputs
	 * @description: Changes the div decimal-block with the div binary-block, changes 
	 				 the operation value of the object
 	 * @params {number}
 	 * @return: {none}
	 */
	swapInputs: function () {
		$("#swap").click(function(){
			if (parser.isDigit()) {
				this.operation = "decimal2binary";
				//$("")
			} else if (parser.isBit()) {
				this.operation = "binary2decimal";
			}	
		});
	},
	/**
	 * @name: convert
	 * @description: Calls to converter to calculate the operation. Changes the 
	                 input value from binary/decimal inputs with the result of the 
	                 operation
 	 * @params {number}
 	 * @return: {none}
	 */

	convert: function () {
		alert(indexController.operation);
 		return false;
	},
}
