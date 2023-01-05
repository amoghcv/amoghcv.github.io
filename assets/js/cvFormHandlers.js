let cvSubmitForm = () =>{
    let firstName = document.getElementById("First-Name");
    let lastName = document.getElementById("Last-Name");
    let Email = document.getElementById("Email");
    let phone = document.getElementById("Phone");
    let position = document.getElementById("Position");
    let cvurl = document.getElementById("cvUrl");
    let lnurl = document.getElementById("LinkedIn-URL");
    let Message = document.getElementById("Message");
    let submitMessage1 = document.getElementById("form-message1");
    let formData2 = new FormData();
    formData2.append('First-Name',firstName.value);
    formData2.append('Last-Name',lastName.value);
    formData2.append('Email',Email.value);
    formData2.append('Phone',phone.value);
    formData2.append('Position',position.value);
    formData2.append('cvURL',cvurl.value);
    formData2.append('lnURL',lnurl.value);
    formData2.append('Message',Message.value);
    if(firstName.value != "" && lastName.value != "" && Email.value != "" && position.value != "" && cvurl.value != ""){

        submitMessage1.style.color = "green";
        submitMessage1.innerHTML = `${firstName.value} the request is successfully submitted`;
        setTimeout(()=>{
            submitMessage1.innerHTML = "";
        },5000);

        fetch("https://formspree.io/f/xnqyagre",{
            method:'POST',
            body:formData2
        }).then(response=>{
            return response.json();
        });

        firstName.value = "";
        lastName.value = "";
        Email.value = "";
        phone.value = "";
        position.value = "";
        cvurl.value = "";
        lnurl.value = "";
        Message.value = "";
    }
    else{
        submitMessage1.style.color = "orange";
        submitMessage1.innerHTML = "Please fill all the inputs";
        setTimeout(()=>{
            submitMessage1.innerHTML = "";
        },5000);
    }
}