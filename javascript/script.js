const slides = [
  {
    image: "./images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//global variables
const dots = document.querySelector(".dots")
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img")
const tag = document.querySelector("#banner p")

let index = 0;

//display slides dot

function displayDots(){
   for (let i = 0; i< slides.length; i++){
    const dot = document.createElement("div")
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index ){
      dot.classList.add("dot_selected")
    }
   }
}
displayDots();

//go to next image

  arrowRight.addEventListener("click",()=>{
    const dotIndicator = document.querySelectorAll(".dots .dot ");
    dotIndicator[index].classList.remove("dot_selected")
    index++
    if(index > slides.length - 1){
      index = 0;
    }
    dotIndicator[index].classList.add("dot_selected")
    img.src = slides[index].image
    tag.innerHTML = slides[index].tagLine

    
  })


//go to previous image

arrowLeft.addEventListener("click",()=>{
  const dotIndicator = document.querySelectorAll(".dots .dot ");
  dotIndicator[index].classList.remove("dot_selected")
  index--
  if(index < 0  ){
    index = slides.length - 1;
  }
  dotIndicator[index].classList.add("dot_selected")
  img.src = slides[index].image
  tag.innerHTML = slides[index].tagLine
  
})




