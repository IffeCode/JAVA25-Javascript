console-console.log('Hello World!');

const lastName = "Hossain";

console.log(lastName);

let age = 100;
age = "Testar bara";

console.log(age);

let isRaining = true;
console.log(isRaining);

console.log(typeof age);

const num = 3;
console.log(typeof num);

const arr = [3, 657, 100, 2];
console.log(arr);

console.log(arr.length);

arr[0]= "En string"; //Får byta ut innehållet i ett element
console.log(arr);

//arr= 100; // Får inte byta ut innehållet i en const variabel


console.log("3" == 3);
console.log("3" === 3);

let val;

if(val){
    console.log("val innehåller bågot") //alt + shift + pil ner för att kopiera något
}
else{
    console.log("val är undefined")
}


for(let i=0; i<10; i++){
    console.log(i);
}

const trees = ['Oak', 'Bristlecone', 'Birch', 'Redwood'];

for(let i=0; i<trees.length; i++){
    console.log(trees[i])
}

for(const tree of trees){
    console.log(tree)
}

let randomNumber = Math.round( Math.random()*10 );

// Används i situationer när man inte vet på förhand hur många gånger man be
while(randomNumber != 3){
    console.log(randomNumber);
    randomNumber = Math.round( Math.random()*10 );
}


console.log('Three!');

// i++;
// i = i+1;