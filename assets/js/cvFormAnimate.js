// CV Form drawer animation starts from here 
   
      
var cvFormButton = document.getElementById('cv-btn');
cvFormButton.addEventListener("click", formDrawer);

    document.getElementById('cvFormDrawerClose').addEventListener("click", formDrawer);
    
    var cvFormDrawer = document.getElementById('lb-cv-form-trans');
    
    cvFormDrawer.style.opacity = 0;

    var toggletoggle = false;

    function formDrawer() {

      toggletoggle = !toggletoggle;
      
      if(toggletoggle == true) {
        cvFormDrawer.style.transform = "translateX(0%)";
        cvFormDrawer.style.opacity = 1;
        cvFormDrawer.style.transition = "all 0.6s ease";
      } else {
        cvFormDrawer.style.transform = "translateX(100%)";
        cvFormDrawer.style.opacity = 0;
        cvFormDrawer.style.transition = "all 0.6s ease";
      }
    }



// CV Form drawer animation ends here 