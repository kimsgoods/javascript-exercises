const fibonacci = function(index) {
    if(index < 0) return "OOPS";
    if(index === 0) return 0;
    let a = 0;
    let b = 1;
    let c = b;

    for(let i = 1; i < index; i++){
        c = a + b;
        a = b;
        b = c;
        
    }
    console.log(c);
    return c;

};

// Do not edit below this line
module.exports = fibonacci;
