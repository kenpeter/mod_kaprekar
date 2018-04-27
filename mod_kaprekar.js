var bigNum = require("big-number");

function getNum(arr, startIndex, endIndex) {
	if(endIndex == 0) {
		return 0;
	}

	var numStr = arr.slice(startIndex, endIndex).join('');
	return parseInt(numStr, 10);
}

function kaprekarNumbers(p, q) {
	var lowNum = p;
	var highNum = q;

	var
		theNumDigit, 
		theNum, arr, len, sqr, 
		sqrArr, sqrLen, leftLen, rightLen,
		leftNum, rightNum
	;

	var buf = [];
	for(var i=lowNum; i<=highNum; i++) {
		theNumDigit = i;
		theNum = i + '';
		
		arr = theNum.split('');
		len = arr.length;	
		sqr = bigNum(theNumDigit).multiply(theNumDigit) + '';
		
		sqrArr = sqr.split('');
		sqrLen = sqrArr.length;
		
		rightLen = len;
		leftLen = sqrLen - rightLen;
		leftNum = getNum(sqrArr, 0, leftLen);
		rightNum = getNum(sqrArr, leftLen, sqrLen);

		if(leftNum + rightNum !== theNumDigit) {
			
		} else {
			buf.push(theNumDigit);
		}
	}

	if(buf.length == 0) {
		return ['INVALID RANGE'];
	}

	return buf;	
}

/*
var p = 1;
var q = 100;
*/

var p = 400;
var q = 700;

var out = kaprekarNumbers(p, q);
console.log(out);
