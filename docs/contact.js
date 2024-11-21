function loadNav() {
  // Fetch the HTML content of the navigation bar
  fetch("nav.php")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-container").innerHTML = data;

      // Dynamically load the CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "nav.css"; // Path to your CSS file
      document.head.appendChild(link);

      // Initialize search functionality (assuming it's defined somewhere)
      initializeSearch();

      // Toggle the navigation menu when the dropdown button is clicked
      document
        .querySelector(".dropdown-button")
        .addEventListener("click", function () {
          const nav = document.querySelector(".nav");
          nav.classList.toggle("show");
        });
    })
    .catch((error) => console.error("Error loading navigation:", error));
}

window.onload = loadNav;

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `
    Full Name: ${fullName.value}
    Email: ${email.value}
    Message: ${mess.value}
    `;

  const emailData = {
    to: "ignfebbyy@gmail.com",
    subject: "This is the subject",
    body: bodyMessage,
  };

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((message) => {
      alert(message);

      fullName.value = "";
      email.value = "";
      mess.value = "";
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please check the console for more details.");
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
