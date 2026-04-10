async function test() {
    
    
    return "bara för att testa!"

}

test().then( par => console.log(par))

console.log("sist i koden!")

async function getDogImage(breed) {

    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    try{

    const response = await fetch(url);

    const info = await response.json();
    console.log(info);

    return info.message;


    }

    catch(error){

        throw new Error("Something went wrong!");

    }


    
}

    
    console.log(response);

    getDogImage("pomeranian").then( getDogImage => {
        console.log(dogImage)
    });

    console.log("Efter getDogImage anropas");