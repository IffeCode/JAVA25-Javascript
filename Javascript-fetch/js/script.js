const url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
    .then(handleResponse)
    .then( displayImage)
    .catch(displayError)

function handleResponse(res){
    console.log(res);
    if(res.ok) return res.json();
    else{
        throw new Error("Something went wrong!")
    }
    
}

function displayError(error){
    const h1 = document.createElement("h1");
    h1.innerText = error.message;
    document.body.append(h1);
}

function displayImage(data){
console.log(data);
const img = document.createElement("img");
img.src = data.message;
document.body.append(img);

}

