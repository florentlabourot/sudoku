/*
* Cell
* a cell is an entity on the sudoku map
*/

function Cell(x, y){
	this.x = x;
	this.y = y;
	this.value = 0;
	this.rect = -1;
}

Cell.prototype.setValue = function (val){
	this.value = val;
}

Cell.prototype.setRect = function (rect){
	this.rect = rect;
}

Cell.prototype.print = function(){
	console.log("x: " + this.x + ", y: " + this.y + ", r:" + this.rect + ", val :" + this.value);
}

module.exports = Cell;