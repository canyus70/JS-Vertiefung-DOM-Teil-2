let counter = 0;

const button = document.getElementsByTagName("button")[0];
const umwickelnDiv = document.querySelector(".umwickeln");


button.addEventListener("click", () => {
    const neuesDiv = document.createElement("div");
    neuesDiv.textContent = counter;
    neuesDiv.classList.add("rechteck");
    umwickelnDiv.appendChild(neuesDiv);
    if (counter % 10 === 0) {
        neuesDiv.classList.add("weiss");
    }
    counter++;

});