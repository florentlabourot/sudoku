Cell = require("./Cell.js");
CellGroup = require("./CellGroup.js");
Map = require("./Map.js");
Utils = require("./Utils.js");

var start = Date.now();
var map = new Map(9);
map.init();
map.populate();
var stop = Date.now();
var diff = stop - start;
console.log ("take :" + diff + "ms");
map.print();
