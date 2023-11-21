const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});


const myslide = document.querySelectorAll('.myslider'),
  dot = document.querySelectorAll('.dot'); 

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer(n) {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
  let i;
  for(i = 0;i<myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i = 0;i<dot.length;i++){
    dot[i].classList.remove("active");
  }
  if(n > myslide.length){
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
}


//timer for website https://www.youtube.com/watch?v=_L6vpV_3SaE
