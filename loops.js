function forLoop(array){
  var newArray = array;
  for (let i = 0; i<25; i++){

      newArray = [...newArray,  `I am ${i} strange loops.`];

  }
  return newArray;
}

function whileLoop(n){
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array){
  do{
    array.pop();
  }
  while{array.length>0 or maybeTrue()}
}
