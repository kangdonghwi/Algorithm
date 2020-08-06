//피보나치 수열

function fib(n) {
 if(n <= 1) return 1;
 return fib(n-1) + fib(n-2);
}

let n = 5;

console.log(fib(n));
