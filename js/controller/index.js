
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
		} else if (operation == "binary2decimal") {
			$("#decimal-block").insertBefore($("#decimal-block").prev("#binary-block"));
			indexController.operation = "decimal2binary";
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
		if(operation=="decimal2binary"){
			 var div = '<label for="binary">Binary</label><br/><input type="text" class="form-control" value="'+converter.decimal2binary($("#decimal").val())+'" id="binary" placeholder="Binary">';
			 $("#binary-block").html(div);
			}
		else{
			var div2 = '<label for="decimal">Decimal</label><br/><input type="text" class="form-control" value="'+converter.binary2decimal(binary)+'" id="decimal" placeholder="Decimal">';
		}	$("#decimal-block").html(div2);
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
