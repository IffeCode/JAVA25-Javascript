function firstFunction(){
    console.log("first");
}
function secondFunciton(){
    console.log("second")
}

function higherOrder(callback){
    console.log("higher order");
    callback();
}

console.log( firstFunction )

higherOrder( secondFunciton );