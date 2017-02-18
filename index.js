let dartsScore = [2, 6, 11];

function scoreThrows(array) {
  let score = 0;
  let bonus = true;

  for(let i = 0; i < array.length; i++){
    if(legitNumber(array[i]) === false){
    return false;
    }
    if (array[i] > 10){
      score += 0;
      bonus = false;
    }

    if (array[i] > 5 && array[i]<= 10){
      score += 5;
      bonus = false;
    }

    if (array[i] <= 5) {
      score += 10;
      bonus = true;
    }
  }
  if (bonus === true) {
      score += 100;
  }
  return score;
}

function legitNumber(num){
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(scoreThrows(dartsScore));