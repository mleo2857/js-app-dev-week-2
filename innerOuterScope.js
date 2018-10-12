function outer(){

  var a = 'string 1';

  var b = {
    name: 'object 1'
  }

  console.log(a);
  console.log(b);

  function inner(a,b){
    console.log(a);
    console.log(b);

    var a = 'string 2';
    var b = {
      name: 'object 2'
    }

    b.name = 'object 3';

    console.log(a);
    console.log(b);
  }

  inner(a,b);

  console.log(a);
  console.log(b);
}

outer();
