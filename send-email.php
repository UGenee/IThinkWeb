<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    $mail = new PHPMailer(true);

    try {
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
}
?>
