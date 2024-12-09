const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Gather form data
  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!fullName || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Use SMTP.js to send the email
  Email.send({
    SecureToken: "YOUR_SMTPJS_SECURE_TOKEN", // Replace with your secure token from SMTP.js
    To: "ignfebbyy@gmail.com", // Replace with your email address
    From: email,
    Subject: `Contact Form Message from ${fullName}`,
    Body: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
  }).then((response) => {
    if (response === "OK") {
      alert("Message sent successfully!");
      form.reset(); // Clear the form
    } else {
      alert("Failed to send message. Please try again.");
      console.error("SMTP.js Error: ", response);
    }
  });
});
