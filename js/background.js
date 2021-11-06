const randomNumber = Math.floor(Math.random() * 7);

const image = document.createElement("img");
const imgCover = document.createElement("div");

image.src = `images/${randomNumber}.jpg`;

document.body.appendChild(imgCover);
imgCover.appendChild(image);

imgCover.classList.add("background");
