//조합문제

function combination(chars) {
  let combi = [];

  const f = (prefix, chars) => {
    for (let i=0; i<chars.length; i++) {
      combi.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }

  f('', chars);

  //조합의 수에 맞는 것만 추출!
  const result = combi.filter(x => x.length === n);
  console.log(result);

  return result.length;
}

const arr = 'ㄱ,ㄴ,ㄷ,ㄹ'.split(',');
const n = 3;

console.log(combination(arr));