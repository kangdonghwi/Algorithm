// 문자열을 붙어있는 옆에 거 까지 쪼갬
function sol(string) {
  let result = [];
  for (let i = 1; i < string.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(string.slice(j, j + string.length - i + 1));
    }
  }
  console.log(result);
  return result;
}
let str1 = "1723";
let arr1 = sol(str1);
//["1723", "172", "723", "17", "72", "23", "1", "7", "2", "3"]

//문자열 하나하나 다 쪼개기
function solution(chars) {
  let permute = [];

  const f = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      permute.push(prefix + chars[i]);

      if (permute.indexOf(chars[i] + prefix) === -1) {
        permute.push(chars[i] + prefix);
      }

      f(prefix + chars[i], chars.slice(i + 1));
    }
  };

  f("", chars);
  console.log(permute);
  let result = permute.filter((x) => x.length === len);
  result.sort((a, b) => {
    return b - a;
  });

  return result[0];
}

const num = "1723";
const len = 2;
console.log(solution(num));
//["1", "17", "71", "172", "217", "1723", "3172", "173", "317", "12", "21", "123", "312", "13", "31", "7", "72", "27", "723", "372", "73", "37", "2", "23", "32", "3"]
