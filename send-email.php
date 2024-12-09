<?php
<<<<<<< HEAD
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];
=======
require 'C:\xampp\htdocs\IThinkWeb\vendor\autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $fullName = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    if (empty($fullName) || empty($email) || empty($message)) {
        echo "<script>alert('All fields are required!'); window.history.back();</script>";
        exit;
}
>>>>>>> 3a9c965ae9ff147f7282259297e17127dfe598e9

    $mail = new PHPMailer(true);

    try {
<<<<<<< HEAD
        $mail->isSMTP();
        $mail->Host = 'smtp.elasticemail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('EMAIL_USER');
        $mail->Password = getenv('EMAIL_PASS');
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom(getenv('EMAIL_USER'), 'Your Name');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Error sending email: " . $mail->ErrorInfo;
    }
=======
        // Server settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com"; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = "ignfebbyy@gmail.com"; // Your email
        $mail->Password = "qogs siar ajdu atmh"; // Your email password (or App Password for Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $fullName);
        $mail->addAddress("ignfebbyy@gmail.com", "IThink Contact"); // Your email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Contact Form Message from $fullName";
        $mail->Body = "<h3>Contact Form Submission</h3>
                       <p><strong>Name:</strong> $fullName</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Message:</strong><br>$message</p>";

        // Send the email
        $mail->send();
        echo "<script>alert('Message sent successfully!'); window.location.href = 'contact.php';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Failed to send email. Error: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid request method.'); window.history.back();</script>";
>>>>>>> 3a9c965ae9ff147f7282259297e17127dfe598e9
}
?>
