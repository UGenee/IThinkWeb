const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const mysql = require("./db");

const app = express();
const port = 3008;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "index")));

// Function to read the navbar and combine it with the page content
const getPageWithNavbar = (page) => {
  const navbarPath = path.join(__dirname, "index", "nav.html");
  const pagePath = path.join(__dirname, "index", page);

  return new Promise((resolve, reject) => {
    fs.readFile(navbarPath, "utf8", (err, navbar) => {
      if (err) {
        return reject(err);
      }
      fs.readFile(pagePath, "utf8", (err, content) => {
        if (err) {
          return reject(err);
        }
        resolve(navbar + content);
      });
    });
  });
};

// Route for serving the review page
app.get("/", (req, res) => {
  getPageWithNavbar("home.html")
    .then((combinedContent) => {
      res.send(combinedContent);
    })
    .catch((err) => {
      console.error("Error loading page:", err);
      res.status(500).send("Internal Server Error");
    });
});

// Route to handle form submission
app.post("/process-form", (req, res) => {
  const { id, message } = req.body;
  const sql = "INSERT INTO reviews (review_name, review_message) VALUES (?, ?)";
  mysql.query(sql, [id, message], (err) => {
    if (err) {
      console.error("Error inserting review:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json("Review submitted successfully!");
    }
  });
});

// Route to fetch all reviews (for the carousel)
app.get("/reviews", (req, res) => {
  const sql = "SELECT * FROM reviews";
  mysql.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching reviews:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results); // Send the results as JSON to the frontend
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
