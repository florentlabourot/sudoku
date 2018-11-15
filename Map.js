/**
* Map 
*/

Cell = require("./Cell.js");
CellGroup = require("./CellGroup.js");
Utils = require("./Utils.js");

function Map (size){
	this.size = size;
	this.rows = [];
	this.cols = [];
	this.rect = [];
	this.all = [];
	this.factor = Math.sqrt(size);
}

Map.prototype.init  = function(){
	// init rows, cols and rect arrays
	for (var i = 0; i < this.size; ++i){
		this.rows[i] = new CellGroup(this.size, "row");
		this.cols[i] = new CellGroup(this.size, "col");
		this.rect[i] = new CellGroup(this.size, "rect");
	}
	// create each cells, and affect it to its row, col and cell
	var a = 0;
	for (var i = 0; i < this.size; ++i){
		for (var j = 0; j < this.size; ++j){
			var aj = Math.trunc(j/this.factor);
			var ai = Math.trunc(i/this.factor) * this.factor;
			var a  = aj + ai;
			var index = i * this.size + j;
			var cell = new Cell(j, i);
			this.cols[j].add(cell);
			this.rows[i].add(cell);
			this.rect[a].add(cell);
			this.all[index] = cell;
			cell.setRect(a);
		}
	}
}


Map.prototype.populate = function (){
	this.utils = new Utils();
	var nbCell = this.size * this.size;
	this.populateInternal(nbCell - 1);
}


Map.prototype.populateInternal = function (i){
	var id = i;
	var cell = this.all[id];
	var rowId = cell.y;
	var colId = cell.x;
	var rectId = cell.rect;
	possibilities = this.utils.shuffleArray(this.size,1);
	var ok = false;
	for (var j = 0; j < this.size; ++j){
		var val = possibilities[j];
		if ( ! this.rows[rowId].isValueIn (val) &&
		  ! this.cols[colId].isValueIn(val) &&
		  ! this.rect[rectId].isValueIn(val)){
			  cell.setValue(val);
			  ok = true;
			  if (i == 0){
				  return true;
			  }
			  else if (this.populateInternal(i - 1)){
		  		return true;
			  }
			  else {
				  cell.setValue(0);
				  //console.log ("backtrack " + j );
			  }
		}
	}
	return false;
}



Map.prototype.printV = function(){
	console.log("size:" + this.size);
	for (var i = 0; i < this.all.length; ++i){
		var cell =this.all[i];
		cell.print();
	}
}

Map.prototype.print = function(){
	var line = "";
	console.log ("size tab : " + this.all.length);
	for (var i = 0; i < this.all.length; ++i){
		if (i % this.size == 0){
			console.log (line);
			line = "";
		}
		var cell =this.all[i];
		line += cell.value + " ";
	}
	console.log (line);
}


module.exports = Map;