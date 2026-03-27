function firstFunction(){
    console.log("first");
}
function secondFunciton(){
    console.log("second");
}

function higherOrder(callback){
    console.log("higher order");
    callback();
}

console.log( firstFunction );

higherOrder( secondFunciton );

//Arrowfunction

//function double(x){
//    return x+x;
//}

//const double = x=>{
  //  return x+x;
//}
const double = x=> x+x;

higherOrder( ()=>console.log("arrow"));