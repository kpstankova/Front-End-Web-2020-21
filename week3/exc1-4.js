let A = [10, 5, 13, 18, 51];
let hasTen;

hasTen = A.some((element) => element < 10);
console.log(`Does array A has 10?: ${hasTen}`);
//---------------------------------------------
let B=[];

B = A.map((element) => element * 2);

hasTen = B.some((element) => element < 10);

console.log(`Does array B has 10?: ${hasTen}`);
