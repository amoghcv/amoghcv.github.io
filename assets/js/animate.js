        //  nav animation starts from here 

      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-10%";
        }
        prevScrollpos = currentScrollPos;
      };

      // nav animation ends here 
    
      // reveal animation starts from here 

      // load animation starts here 

      window.addEventListener("load", revealLoad);

      function revealLoad() {
        var reveals = document.getElementsByClassName("reveal-bottom-ld");
        var reveals1 = document.getElementsByClassName("reveal-right-ld");
        var reveals2 = document.getElementsByClassName("reveal-left-ld");
        var revealtext = document.getElementsByClassName("reveal-text-ld");

        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = -100;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("actives");
          } else {
            reveals[i].classList.remove("actives");
          }
        }

        for (var i = 0; i < reveals1.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals1[i].getBoundingClientRect().top;
          var revealpoint = 50;

          if (revealtop < windowheight - revealpoint) {
            reveals1[i].classList.add("actives");
          } else {
            reveals1[i].classList.remove("actives");
          }
        }

        for (var i = 0; i < reveals2.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals2[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals2[i].classList.add("actives");
          } else {
            reveals2[i].classList.remove("actives");
          }
        }


        for (var i = 0; i < revealtext.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = revealtext[i].getBoundingClientRect().top;
            var revealpoint = -120;
  
            if (revealtop < windowheight - revealpoint) {
              revealtext[i].classList.add("actives");
            } else {
              revealtext[i].classList.remove("actives");
            }
          }
        }

      // load animation ends here 

      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.getElementsByClassName("reveal-bottom");
        var reveals1 = document.getElementsByClassName("reveal-right");
        var reveals2 = document.getElementsByClassName("reveal-left");
        var revealtext = document.getElementsByClassName("reveal-text");

        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = -100;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("actives");
          } else {
            reveals[i].classList.remove("actives");
          }
        }

        for (var i = 0; i < reveals1.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals1[i].getBoundingClientRect().top;
          var revealpoint = 50;

          if (revealtop < windowheight - revealpoint) {
            reveals1[i].classList.add("actives");
          } else {
            reveals1[i].classList.remove("actives");
          }
        }

        for (var i = 0; i < reveals2.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals2[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals2[i].classList.add("actives");
          } else {
            reveals2[i].classList.remove("actives");
          }
        }


        for (var i = 0; i < revealtext.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = revealtext[i].getBoundingClientRect().top;
            var revealpoint = -120;
  
            if (revealtop < windowheight - revealpoint) {
              revealtext[i].classList.add("actives");
            } else {
              revealtext[i].classList.remove("actives");
            }
          }
        }
        
        // reveal animation ends here 


      //  mob nav icon and mob drawer starts from here

    document.getElementById("xmark").style.display = "none";

    document.getElementById("nav-btn").addEventListener("click", swap);


    function swap() {
        var closesign = document.getElementById("xmark");
        var barsign = document.getElementById("bars");
        var mbnavcnts = document.getElementsByClassName("mob-nav");
        var navbtn = document.getElementById("nav-btn");

        if(closesign.style.display === "none") {
            closesign.style.display = "block";
            barsign.style.display = "none";
            mbnavcnts[0].style.transform = "translateY(0)";
            navbtn.style.backgroundColor = "#DA392B";
            closesign.style.color = "white";
            document.body.style.overflowY = 'hidden';
        } else {
            closesign.style.display = "none";
            barsign.style.display = "block";
            mbnavcnts[0].style.transform = "translateY(-100%)";
            navbtn.style.backgroundColor = "white";
            document.body.style.overflowY = 'visible';
          }

    }

    //  mob nav icon and mob drawer ends here


    // mob nav dropdown starts from here 
    
    document.getElementById("mob-nav-up").style.display = "none";

    document.getElementsByClassName("mob-nav-dropdwn-contents")[0].style.display = "none";

    document.getElementById("mob-nav-cnt-drw").addEventListener("click", open);


    function open() {
        var mobUp = document.getElementById("mob-nav-up");
        var mobDown = document.getElementById("mob-nav-down");
        var mbnavdrpcnt = document.getElementsByClassName("mob-nav-dropdwn-contents")[0];
        var mbNavdrp = document.getElementById("mob-nav-cnt-drw");

        if(mobUp.style.display === "none") {
            mobUp.style.display = "block";
            mobDown.style.display = "none";
            mbnavdrpcnt.style.display = "flex";
        } else {
          mobUp.style.display = "none";
          mobDown.style.display = "block";
          mbnavdrpcnt.style.display = "none";
        }
    }

    // mob nav dropdown ends here 


    // Scroll on fade starts from here

    var section = document.getElementById('log-ourgames');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 0.4;
	
	if (scrollTop > distanceToTop) {
		opacity = 0.4 + (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(section);
}

window.addEventListener('scroll', scrollHandler);

// Scroll on fade ends here


// Screenshot game image viewer starts from here 

const imgs = document.querySelectorAll('.lb-gm-imgs img');
const fullimgcontainer = document.querySelector('.lb-gm-full-img');
const fullimg = document.querySelector('.lb-gm-full-img img');
const modal = document.querySelector('.lb-gm-modal');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    modal.classList.add('lb-gm-showfullimg');
    fullimgcontainer.classList.add('lb-gm-fullimgtransition');
    document.body.style.overflowY = 'hidden';
    fullimg.src = img.src;
  })
})

const button = document.getElementById('lb-gm-btn');

button.addEventListener('click', function() {
  modal.classList.remove('lb-gm-showfullimg');
    fullimgcontainer.classList.remove('lb-gm-fullimgtransition');
    document.body.style.overflowY = 'visible';
})

// Screenshot game image viewer ends here 