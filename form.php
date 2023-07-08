<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "website request";
    $message = $_POST['message'];
    
    // Honeypot field
    $honeypot = $_POST['honeypot'];
    if (!empty($honeypot)) {
        // If honeypot field is not empty, it means a bot filled it out, so ignore the submission
        return;
    }

    $recipient = $_POST['recipient'];
    $to = $recipient;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thankyou.html");
    } else {
        echo "There was a problem sending the message.";
    }
}
?>
