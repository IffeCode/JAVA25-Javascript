const pEl = document.createElement('p');
console.log(pEl);

document.body.append(pEl);
pEl.innerText = "Nu kommer jag pausa lite.";

//const list = document.querySelector()

const textContent = ["ett", "två", "tre"];
const ulEl = document.createElement("ul");
document.body.append(ulEl);

for(const text of textContent){
    const li = document.createElement('li');
    li.innerText = text;

    ulEl.append(li);
}

for(let i = 0; i<100; i++){
    const h1 = document.createElement('h1');

    const hue = i*5;

    h1.innerText = `the current hue value is ${hue}`;
    h1.style.backgroundColor = `hsl(${hue}, 80%, 80%)`;

    document.body.append(h1);
}
