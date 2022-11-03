var score = 0;      // 함수단위 스코프
let score2 = 200;   // 블락단위 스코프, 재할당 가능
const score3 = 300; // 블락단위 스코프, 재할당 불가

function outer() {
    if(true) {
        var num = 0;
    }
    
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
    console.log(num);
}