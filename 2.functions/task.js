"use strict"
function getArrayParams(...arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number(((arr.reduce((a, c) => a + c )) / arr.length).toFixed(2));
  return { 
      min,
      max,
      avg,
  }
}
function summElementsWorker(...arr){
  if ( arr.length === 0){
      return 0
  }
  else{
      return arr.reduce((a, c) => a + c)
  }
}
function differenceMaxMinWorker(...arr){
  if ( arr.length === 0){
    return 0
}
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min
}
function differenceEvenOddWorker(...arr){
  if ( arr.length === 0){
      return 0
  }
      let sumEvenElement = 0;
      let sumOddElement = 0;
      for(let i = 0; i < arr.length; i++){
          if( arr[i] % 2 === 0){
              sumEvenElement += arr[i];
          }
          else{
              sumOddElement += arr[i];
          }
      }
      return sumEvenElement - sumOddElement
  }
function averageEvenElementsWorker(...arr){
  if ( arr.length === 0){
      return 0
  }
      let sumEvenElement = 0;
      let countEvenElement = 0;
      for(let i = 0; i < arr.length; i++){
          if(arr[i] % 2 === 0){
              sumEvenElement += arr[i];
              countEvenElement ++;
          }
      }
      return Number((sumEvenElement / countEvenElement).toFixed(2)) 
}
function makeWork(arrOfArr, func){
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
      let newArray = func(...arrOfArr[i]);
          if(maxWorkerResult < newArray){
              maxWorkerResult = newArray;
          }  
      }
      return maxWorkerResult
  }