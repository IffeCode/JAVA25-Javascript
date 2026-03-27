const btn = document.querySelector("button");

btn.addEventListener("click", event => {
    console.log("CLICK");
    console.log(event.target);

    const infoEl = document.querySelector("#info");
    infoEl.classList.toggle("hidden");


    if(btn.innerText === "hide") btn.innerText = "show";
    else btn.innerText = "hide";

});

