//회문

function find(s) {
  for (let i = s.length; ; i++) {
    let flag = true;
    console.log(i)
    for (let j = 0; j < s.length; j++) {
      console.log(`s.charAt(j) : ${s.charAt(j)}      s.charAt(i-j-1): ${s.charAt(i - j - 1)}`);
      if (i - j - 1 < s.length && s.charAt(j) !== s.charAt(i - j - 1)) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
}

let s = "abccc";

console.log(find(s));
