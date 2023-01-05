let submitForm = () =>{
    let firstName = document.getElementById("First-Name");
    let lastName = document.getElementById("Last-Name");
    let Email = document.getElementById("Email");
    let Message = document.getElementById("Message");
    let submitMessage = document.getElementById("form-message");
    let formData = new FormData();
    formData.append('First-Name',firstName.value);
    formData.append('Last-Name',lastName.value);
    formData.append('Email',Email.value);
    formData.append('Message',Message.value);
    if(firstName.value != "" && lastName.value != "" && Email.value != ""){

        submitMessage.style.color = "green";
        submitMessage.innerHTML = `${firstName.value} the request is successfully submitted`;
        setTimeout(()=>{
            submitMessage.innerHTML = "";
        },5000);

        fetch("https://formspree.io/f/xknawqek",{
            method:'POST',
            body:formData
        }).then(response=>{
            return response.json();
        });

        firstName.value = "";
        lastName.value = "";
        Email.value = "";
        Message.value = "";
    }
    else{
        submitMessage.style.color = "orange";
        submitMessage.innerHTML = "Please fill all the inputs";
        setTimeout(()=>{
            submitMessage.innerHTML = "";
        },5000);
    }
}


function submitNewsLetter(e) {
   let newsLetterEmail = document.getElementById("newsemail");
   let submitMessage1 = document.getElementById("news-letter-message");
   let formData1 = new FormData();
   formData1.append('Email-Id', newsLetterEmail.value);

   if(newsLetterEmail.value != ""){
    submitMessage1.style.color = "green";
        submitMessage1.innerHTML = "The request is successfully submitted";
        setTimeout(()=>{
            submitMessage1.innerHTML = "";
        },5000);

        fetch("https://formspree.io/f/mpzezwld",{
            method:'POST',
            body:formData1
        }).then(res=>{
            return res.json();
        });

        newsLetterEmail.value = "";
   } else {
    submitMessage1.style.color = "orange";
    submitMessage1.innerHTML = "Please fill all the inputs";
    setTimeout(()=>{
        submitMessage1.innerHTML = "";
    },5000);
   }
}