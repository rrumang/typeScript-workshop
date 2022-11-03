var score = 0;
let score2 = 200;
const score3 = 300;
function outer() {
    if (true) {
        var num = 0;
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    console.log(num);
}
//# sourceMappingURL=variable.js.map