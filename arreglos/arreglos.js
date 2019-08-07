const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayMap = array.map(e => e ** 2);
const arrayFilter = array.filter(e => e % 2 == 0);
const arrayFind = array.find(e => e != 0 && e % 2 == 0);
const reduce = array.reduce((anterior, actual, indice) => anterior += actual);


console.log(`ARRAY: ${array}`);
console.log(`ARRAY => MAP ** 2: ${arrayMap}`);
console.log(`ARRAY => FILTER e % 2 == 0: ${arrayFilter}`);
console.log(`ARRAY => FIND e != 0 && e % 2 == 0: ${arrayFind}`);
console.log(`ARRAY => REDUCE anterior += actual: ${reduce}`);