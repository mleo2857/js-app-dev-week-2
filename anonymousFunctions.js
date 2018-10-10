
function addNumbers(a, b){
  return a + b;
}

var calculator = {
  add: addNumbers,
}

console.log(calculator.add(2,3));

var arrayOfMystery = [
  ['anonymous', 'array'],
  {name: 'anonymus object'},
  function(){return 'Anonymous Function!'}
];

console.log(arrayOfMystery[0][1]);
