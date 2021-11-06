const dataUrl =
  "https://raw.githubusercontent.com/chanooda/test/main/maxim.json";

const request = new XMLHttpRequest();

request.open("GET", dataUrl);

request.responseType = "json";
request.send();

request.onload = function () {
  var a = request.response;
  printing(a);
};

const quotesText = document.querySelector("#quotes-text");
const quotesAuthor = document.querySelector("#quotes-author");

function printing(data) {
  const objectNumber = data.length - 1;
  const randomNumber = Math.floor(Math.random() * objectNumber);
  const quote = data[randomNumber];
  quotesText.innerText = quote.message;
  quotesAuthor.innerText = `- ${quote.author} -`;
}
