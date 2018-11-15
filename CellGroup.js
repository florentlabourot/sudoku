/**
* CellGroup is a group of cell like a column, a row or a rectangle
**/
Cell=require("./Cell.js");

function CellGroup (size, type){
	this.size = size;
	this.type = type
	this.cells = [];
}


CellGroup.prototype.print = function(){
	console.log("size:" + this.size + ", cells size : " + this.cells.length);
}

CellGroup.prototype.add = function(cell){
	if (this.cells.length < this.size){
		this.cells.push(cell);
	}
	else {
		console.log ("error size :" +  this.cells.length + "," + this.size);
	}
}

CellGroup.prototype.isValueIn = function (val){
	var ret = false;
	for (var i = 0; i < this.cells.length; ++i){
		var cell = this.cells[i];
		if (cell){
			if (cell.value == val){
				ret = true;
				break;
			}
		}
	}
	return ret;
}

module.exports = CellGroup;
