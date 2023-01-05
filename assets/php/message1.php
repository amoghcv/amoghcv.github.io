<?php
  $email = htmlspecialchars($_POST['Email']);

  if(!empty($email)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "contactus@longbowgames.net"; //enter that email address where you want to receive all messages
      $subject = "Submission From News Letter";
      $body = "\n\nEmail: $email";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "All fields are required!";
  }
?>