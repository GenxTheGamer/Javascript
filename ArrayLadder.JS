var ladderArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

var getData = ladderArray[2][1]; //Gets 8
console.log(getData);

getData = ladderArray[3][0][2]; //Gets 12
console.log(getData);

getData = ladderArray[3][2]; //Gets 14
console.log(getData);