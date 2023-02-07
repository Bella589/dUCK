// let clickCount = 0;

// function createDuck() {
//   clickCount++;
//   document.getElementById("click-count").innerHTML = "Number of clicks: " + clickCount;
  
//   let duckContainer = document.getElementById("duck-container");
//   let duck = document.createElement("img");
//   duck.src = "/assets/duck.png";
//   duck.style.top = event.clientY + "px";
//   duck.style.left = event.clientX + "px";
//   duckContainer.appendChild(duck);
  
//   setTimeout(function() {
//     duck.style.top = (window.innerHeight + duck.offsetHeight) + "px";
//     duck.style.opacity = "0";
//   }, 50);
// }



function createDuck() {
  let duckContainer = document.getElementById("duck-container");
  let duck = document.createElement("img");
  duck.src = "/assets/duck.png";
  duck.style.position = "fixed";
  duck.style.top = event.clientY + "px";
  duck.style.left = event.clientX + "px";
  duck.style.width = "100px";
  duck.style.height = "100px";
  duck.style.transition = "top 1s linear, opacity 1s linear";
  duckContainer.appendChild(duck);
  
  setTimeout(function() {
    duck.style.top = (window.innerHeight + duck.offsetHeight) + "px";
    duck.style.opacity = "0";
  }, 50);
}
function createDuck() {
  let duckContainer = document.getElementById("duck-container");
  let duck = document.createElement("img");
  duck.src = "/assets/duck.png";
  duck.style.top = event.clientY + "px";
  duck.style.left = event.clientX + "px";
  duckContainer.appendChild(duck);
  
  setTimeout(function() {
    duck.style.top = (window.innerHeight + duck.offsetHeight) + "px";
    duck.style.opacity = "0";
  }, 50);
}
