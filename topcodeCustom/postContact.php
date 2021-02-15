<?php
include_once("includes/PHPMailer/src/PHPMailer.php");
include_once("includes/PHPMailer/src/Exception.php");
include_once("includes/PHPMailer/src/SMTP.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'topcodegr@gmail.com';                     // SMTP username
    $mail->Password   = 'tc!!2020';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('topcodegr@gmail.com', "Topcode website");
    $mail->addAddress("info@topcode.gr");     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "New message from " .$_POST["name"];
    $mail->Body    = 'Name: ' . $_POST["name"] . "\n" . "Email: " . $_POST["email"] . "\n" . "Phone: " . $_POST["phone"] . "\n" . "Message: " . $_POST["message"];
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>