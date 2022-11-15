enum starbuksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
}

function getDiscount(v: starbuksGrade) {
    switch(v) {
        case starbuksGrade.WELCOME : return 0;
        case starbuksGrade.GREEN : return 5;
        case starbuksGrade.GOLD: return 10;
    }
}

console.log(getDiscount(starbuksGrade.GREEN));
console.log(starbuksGrade.GREEN === "GREEN");
console.log(starbuksGrade.GREEN);
console.log(starbuksGrade["GREEN"]);