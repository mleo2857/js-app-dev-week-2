var billAmount = Math.random() * 100 + 1;

function gratuity(bill){
  grat = bill * 0.2;
  return grat;
}

function totalWithGrat(billAmount){
  total = billAmount + gratuity(billAmount);
  return total;
}
//console.log(billAmount);
totalBill = totalWithGrat(billAmount);

console.log('Your total including gratuity is: $' + totalBill.toFixed(2));
