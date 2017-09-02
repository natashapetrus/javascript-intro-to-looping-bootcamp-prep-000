function forLoop(array){
  var newArray = array;
  for (let i = 0; i<25; i++){
    newArray = [...newArray,  `I am ${i} strange loop.`];
  }
  return newArray;
}

function whileLoop(n){
  let countdown = 100;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array){

}
