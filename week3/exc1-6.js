let A = [10, 5, 13, 18, 51],
result;

result = A.reduce((accumulator, element) => accumulator + element);
console.log(`The sum of all elements is: ${result}`);