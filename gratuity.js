var billAmount = Math.random() * 100 + 1;

function gratuity(bill){
  var grat = bill * 0.2;
  return grat;
}

function totalWithGrat(billAmount){
  var total = billAmount + gratuity(billAmount);
  return total;
}
//console.log(billAmount);
var totalBill = totalWithGrat(billAmount);

console.log('Your total including gratuity is: $' + totalBill.toFixed(2));
