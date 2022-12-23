// Review slider

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}

// Mobile drawer

var toggle = false;

function mbdrawer() {
    toggle = !toggle;
    var mobiledrawer = document.getElementById('lp-mb-nav-drawer');

    if(toggle == true) {
        mobiledrawer.style.left = '0';
        mobiledrawer.style.opacity = 1;
        document.body.style.overflowY = 'hidden';
    } else {
        mobiledrawer.style.left = '100%';
        mobiledrawer.style.opacity = 0;
        document.body.style.overflowY = 'visible';
    }
}

// Page scroll indicator

const dots = document.querySelectorAll(".lp-scroll-indicators a");

function removeActiveClass() {
     dots.forEach((dot) => {
        dot.classList.remove("active1");
     })
}

function addActiveClass(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            let currentdot = document.querySelector(`.lp-scroll-indicators a[href='#${entry.target.id}']`);
            removeActiveClass();
            currentdot.classList.add("active1");
        }
    })
}

const options = {
    threshold: 0.5,
};
const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll('.pageind');

sections.forEach((section) => {
    observer.observe(section);
})

// Heart swap

var toggle1 = false;
var toggle2 = false;
var toggle3 = false;
var toggle4 = false;

var lightheart = document.getElementsByClassName("lthrt");
var solidheart = document.getElementsByClassName("sldhrt");
var likeCount = document.getElementsByClassName("lp-game-like-count");

solidheart[0].style.display = "none";
solidheart[1].style.display = "none";
solidheart[2].style.display = "none";
solidheart[3].style.display = "none";

likeCount[0].style.display = "none";
likeCount[1].style.display = "none";
likeCount[2].style.display = "none";
likeCount[3].style.display = "none";

function likeSwap1() {
    toggle1 = !toggle1;
    
    
    if(toggle1 == true) {
        solidheart[0].style.display = "block";
        lightheart[0].style.display = "none";
        likeCount[0].style.display = "block";
    } else {
        solidheart[0].style.display = "none";
        lightheart[0].style.display = "block";
        likeCount[0].style.display = "none";
     }
}

function likeSwap2() {
    toggle2 = !toggle2;
    
    
    if(toggle2 == true) {
        solidheart[1].style.display = "block";
        lightheart[1].style.display = "none";
        likeCount[1].style.display = "block";
    } else {
        solidheart[1].style.display = "none";
        lightheart[1].style.display = "block";
        likeCount[1].style.display = "none";
     }
}

function likeSwap3() {
    toggle3 = !toggle3;
    
    
    if(toggle3 == true) {
        solidheart[2].style.display = "block";
        lightheart[2].style.display = "none";
        likeCount[2].style.display = "block";
    } else {
        solidheart[2].style.display = "none";
        lightheart[2].style.display = "block";
        likeCount[2].style.display = "none";
     }
}

function likeSwap4() {
    toggle4 = !toggle4;
    
    
    if(toggle4 == true) {
        solidheart[3].style.display = "block";
        lightheart[3].style.display = "none";
        likeCount[3].style.display = "block";
    } else {
        solidheart[3].style.display = "none";
        lightheart[3].style.display = "block";
        likeCount[3].style.display = "none";
     }
}

