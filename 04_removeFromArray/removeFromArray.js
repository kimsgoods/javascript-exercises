const removeFromArray = function(arr, ...num) {
    console.log("inital: "+arr); 
    console.log("remove: "+num);
    for(let i=arr.length-1; i>=0; i--){
        for(let j=0; j<num.length; j++){
            if(arr[i]===num[j]){
                arr.splice(i,1);
            }
        }
    
    }
    console.log("final: "+arr);   
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
