

const form = document.querySelector("form");
const breedSelect = document.querySelector("#breedSelect");


fetch("https://dog.ceo/api/breeds/list/all")
    .then(handleResponse)
    .then(populateSelect)

breedSelect.addEventListener("change", event => {
    console.log(breedSelect.value)
})



form.addEventListener("submit", event => {
    event.preventDefault();
    const breed = form.querySelector("input").value.trim().toLowerCase();

    const url = "https://dog.ceo/api/breed/${breed}/images/random/5";
    console.log(breed);

    fetch(url)
        .then(handleResponse)
        .then(displayImage)
        .catch(displayError)
})

function populateSelect(data){
    console.log(data);

    for(const key in message){
        const option = document.createElement("option");
        option.innerText = key;
        option.value = key;
        breedSelect.append(option);
    }
}

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

function displayImages(data){
console.log(data);
const wrapper = document.querySelector("#imgWrapper");
wrapper.innerHTML= "";
    message.forEach(imgURL => {
        const img = document.createElement("img");
        img.src = imgURL;
        wrapper.append(img);
    })
// const img = document.createElement("img");
// img.src = data.message;
// document.body.append(img);

}