function forLoop(array){
  var newArray = array;
  for (let i = 0; i<25; i++){
    if (i==1){
      newArray = [...newArray,  `I am ${i} strange loop.`];
    }
    else{
      newArray = [...newArray,  `I am ${i} strange loops.`];
    }
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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  }
  while(array.length>1 || maybeTrue());
  return array;
}
