const duckButton = document.getElementById("duck-button");
const duckLink = document.getElementById("duck-link");
const duckCount = document.getElementById("duck-count");
let count = 0;

duckLink.addEventListener("click", function(event) {
  event.preventDefault();
  count++;
  duckCount.innerText = count;
  
  const duck = document.createElement("img");
  duck.src = "https://picsum.photos/200/200?random=" + Math.floor(Math.random() * 1000);
  duck.classList.add("duck");
  duck.style.top = Math.random() * (window.innerHeight - 100) + "px";
  duck.style.left = Math.random() * (window.innerWidth - 100) + "px";
  document.body.appendChild(duck);
});


