// Screenshot game image viewer starts from here 

var imagesContainer = document.querySelectorAll('.lp-game-img img');
var imageModal = document.querySelector('.lp-game-screen-modal');
var fullimg = document.querySelector('.lp-game-full-img img');

imageModal.style.display = "none";

imagesContainer.forEach(img => {
    img.addEventListener('click', function() {
            fullimg.src = img.src;
            imageModal.style.display = "block";
            document.body.style.overflowY = "hidden";
    }) });

const closeButton = document.getElementById('lp-game-btn');

closeButton.addEventListener('click', function() {
            imageModal.style.display = "none";
            document.body.style.overflowY = "visible";
})

const closeButton1 = document.getElementById('lp-game-mb-btn');

closeButton1.addEventListener('click', function() {
            imageModal.style.display = "none";
            document.body.style.overflowY = "visible";
})

var fullScrnClosBtn = document.getElementById("lp-game-btn1");
fullScrnClosBtn.style.display = "none";

// Screenshot game image viewer ends here 

// Game modal full screen

var minIcon = document.getElementById("min");
var maxIcon = document.getElementById("max");
var shareIcon = document.querySelector(".lp-game-scrn-mdl-top-sec1 .fa-share");
var likeIcon = document.querySelector(".lp-game-scrn-mdl-top-sec1 .fa-heart");
var descSec = document.querySelector(".lp-game-full-img-sec2");
var imageSec = document.querySelector(".lp-game-full-img-sec1");
var toggle = false;
minIcon.style.display = "none";

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    } 

    toggle = !toggle;

    if(toggle == true) {
        minIcon.style.display = "block";
        maxIcon.style.display = "none";
        shareIcon.style.display = "none";
        likeIcon.style.display = "none";
        descSec.style.display = "none";
        closeButton.style.display = "none";
        fullScrnClosBtn.style.display = "block";
        imageSec.classList.add("lp-game-full-img-sec1-full-scrn");
    } else {
        minIcon.style.display = "none";
        maxIcon.style.display = "block";
        shareIcon.style.display = "block";
        likeIcon.style.display = "block";
        descSec.style.display = "block";
        closeButton.style.display = "block";
        fullScrnClosBtn.style.display = "none";
        imageSec.classList.remove("lp-game-full-img-sec1-full-scrn");
    }
      
  }


  fullScrnClosBtn.addEventListener("click", function() {
    imageModal.style.display = "none";
    document.body.style.overflowY = "visible";
    minIcon.style.display = "none";
    maxIcon.style.display = "block";
    shareIcon.style.display = "block";
    likeIcon.style.display = "block";
    descSec.style.display = "block";
    imageSec.classList.remove("lp-game-full-img-sec1-full-scrn");
    toggle = false;
 
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    
  })