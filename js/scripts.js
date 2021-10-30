//Business Logic

const userInput = 1;
let beepBoop = []
for (i=1; i<=userInput; i++) {
  beepBoop.push(i);
}
console.log(beepBoop)


function beMyNeighbor(arr,n, str) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === n) {
      arr[i] = str;
    }
  }
}

var a = beepBoop; 

console.log('before', a);
beMyNeighbor(a, 1, 'beep');
console.log('after', a);

//UI Logics


