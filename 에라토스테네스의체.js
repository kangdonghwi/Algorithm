//소수찾기의 일반적인 해 하지만 숫자가 커지면 시간이 오래걸림
function numberOfPrime(n) {
  let result = 0;
  let cnt = 0;

  for (let a = 2; a <= n; a++) {
    cnt = 0;
    for (let b = 2; b <= a; b++) {
      if (a % b == 0) cnt++;
    }
    if (cnt == 2) result++;
  }
  return result;
}
console.log(numberOfPrime(10));

//소수찾기에 사용하는 에라토스테네스의 체.js
function solution(n) {
  const arr = [];

  for (let i = 0; i < n + 1; i++) {
    arr.push(true);
  }
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  
  arr.splice(0, 2, false, false);

  const result = [];
  for(let i=2; i<n; i++){
    if(arr[i] == true){
      result.push(i);
    }
  }

  return result;
}
console.log(solution(1000))
