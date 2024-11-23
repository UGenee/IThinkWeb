<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | IThink</title>
    <link rel="stylesheet" href="contact.css">
    <link rel="icon" type="image/x-icon" href="Icon.ico">
    <link rel="stylesheet" href="article.css">
</head>
<body>
<div id="nav-container"></div>

<div class="space-LOL"></div>

<div class="contact-wrapper">
    <div id="contact">
        <h2>Contact Us</h2>
        <form action="send-email.php" method="POST">
            <input type="text" class="input-field" name="name" placeholder="Your Name" autocomplete="off" required>
            <input type="email" class="input-field" name="email" placeholder="Your Email" autocomplete="off" required>
            <textarea class="input-field2" name="message" placeholder="Your Message" required></textarea>
            <button class="submit-button" type="submit">Send Message</button>
        </form>
    </div>
</div>

<!-- Footer -->
<footer class="footer">
    &copy; 2024 IThink. All Rights Reserved.
</footer>

</body>
<script src="nav.js"></script>
<!-- <script src="contact.js"></script> -->
<!-- <script src="https://smtpjs.com/v3/smtp.js"></script> -->
</html>
