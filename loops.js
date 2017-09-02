function forLoop(array){
  for (let i = 0; i<25, i++){
    var newArray = [...array,  `I am ${i} strange loop${i == 0 ? '' : 's'}.`];
  }
  return newArray;
}