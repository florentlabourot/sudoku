/**
* Utils
*/

function Utils (){
	
}

Utils.prototype.shuffleArray = function (size, offset){
	var a = [];
	if (! offset){
		offset = 0;
	}
	for (var i = 0; i < size; ++i){
			a[i] = i + offset;
	}
	var tmp;
	var current;
	var top = a.length;
	while(--top){
		current = Math.floor(Math.random() * (top + 1));
		tmp = a[current];
		a[current] = a[top];
		a[top] = tmp;
	}
	return a;
}






module.exports = Utils;