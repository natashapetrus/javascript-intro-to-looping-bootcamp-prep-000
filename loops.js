function forLoop(array){
  var newArray;
  for (let i = 0; i<25, i++){
    newArray = [...array,  `I am ${i} strange loop${i == 0 ? '' : 's'}.`];
  }
  return newArray;
}
