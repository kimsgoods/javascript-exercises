const palindromes = function (string) {
    var re = /[^A-Za-z0–9_]/g;
    var lowRegStr = string.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
    
};

// Do not edit below this line
module.exports = palindromes;
