//24만개의 데이터중에 1200을 찾아보자
let arr = [];
for (let i = 1; i <= 240000; i++) {
  arr.push(i);
}

//이분탐색 코드
function binarySearch(target, dataArray) {
  let low = 1;
  let high = dataArray.length - 1;
  let index = 0;
  while (high - low > 1) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    if (guess === target) {
      return guess;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    index++;
    console.log(`${index}. low: ${low}, mid: ${mid}, high: ${high}, data: ${dataArray[mid]}`);
  }
  return undefined;
}

var result = binarySearch(1200, arr);
console.log(result);

//프로그래머스 예산 코드
function solution(budgets, M) {
  let answer = 0;
  let sum = 0;
  let max = 0;
  let index = 0;
  budgets.forEach(function (value) {
    sum += value;
    if (value > max) max = value;
  });

  if (sum <= M) {
    answer = max;
  } else {
    let low = 1;
    let high = M;
    let mid;

    while (high - low > 1) {
      mid = Math.floor((high + low) / 2);
      sum = 0;

      for (let i of budgets) {
        if (i < mid) {
          sum += i;
        } else {
          sum += mid;
        }
      }

      if (sum <= M) {
        low = mid;
      } else {
        high = mid;
      }
      index++;
      console.log(`${index}. low: ${low}, mid: ${mid}, high: ${high}, sum: ${sum}`);
    }
    answer = low;
  }

  return answer;
}
