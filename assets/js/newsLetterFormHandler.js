//Subscribe to news letter Form
const form1 = document.querySelector(".news-form");
var statusTxt1 = document.querySelector(".our-team2-letter-card p");
// statusTxt = form.querySelector(".contactUsForm span");
form1.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt1.style.color = "#0D6EFD";
  statusTxt1.style.display = "block";
  statusTxt1.innerText = "Sending your message...";
//   form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/assets/php/message1.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response1 = xhr.response;
      if(response1.indexOf("required") != -1 || response1.indexOf("valid") != -1 || response1.indexOf("failed") != -1){
        statusTxt1.style.color = "white";
      }else{
        form1.reset();
        setTimeout(()=>{
          statusTxt1.style.display = "none";
        }, 3000);
      }
      statusTxt1.innerText = response1;
    //   form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form1);
  xhr.send(formData);
}