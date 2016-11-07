
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
		var operation = indexController.operation;
		
		if (operation == "decimal2binary") {
			$("#binary-block").insertBefore($("#binary-block").prev("#decimal-block"));
			indexController.operation = "binary2decimal";
			alert(operation);
		} else if (operation == "binary2decimal") {
			$("#decimal-block").insertBefore($("#decimal-block").prev("#binary-block"));
			indexController.operation = "decimal2binary";
			alert(operation);
		}	
		
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
		var operation = indexController.operation;
		var decimal = parseInt($("#decimal").val());
		var binary = parseInt($("#binary").val());
		alert(operation);
		if(operation=="decimal2binary"){
			converter.decimal2binary($("#decimal").val());
			console.log(decimal);
		}
		else{
			converter.binary2decimal(binary);
		}
	},	
};

$(document).ready(function() {
	$("#convert").click(function(){
		indexController.convert();
		return false;
	});

	$("#swap").click(function(){
		indexController.swapInputs();
		return false;
	});
});
