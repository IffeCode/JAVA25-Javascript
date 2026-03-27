const form = document.querySelector("form");

form.addEventListener("submit", formResponse);

function formResponse(event){
    event.preventDefault();
    console.log("submit");

    const name = form.querySelector("#nameInput").value;
    const score = form.querySelector("#scoreInput").value;

    console.log(name,score);

    const pEl = document.createElement("p");
    const containerDiv = document.querySelector("#container");

    pEl.innerText = `${name}:${score}`;
    containerDiv.prepend(pEl);

}

