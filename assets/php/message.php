
<?php
  $firstName = htmlspecialchars($_POST['First-Name']);
  $lastName = htmlspecialchars($_POST['Last-Name']);
  $email = htmlspecialchars($_POST['Email']);
  $message = htmlspecialchars($_POST['Message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "contactus@longbowgames.net"; //enter that email address where you want to receive all messages
      $subject = "Submission From Contact Form";
      $body = "First-Name: $firstName\n\nLast-Name: $lastName\n\nEmail: $email\n\nMessage:\n$message\n\nRegards,\n$firstName";
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

