const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "blue", "red"];

button.addEventListener("click", changeBackground);
let sira = 0;

function changeBackground() {
    // rastgele
    // const randomNumber = Math.floor(Math.random() * colors.length);
    // const pickOfColor = colors[randomNumber];
    // body.style.backgroundColor = pickOfColor;

    //sirayla
    if (sira === 7) sira = 0;
    const pickOfColor2 = colors[sira];
    sira++;
    body.style.backgroundColor = pickOfColor2;

}