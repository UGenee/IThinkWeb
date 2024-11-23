<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission (POST request)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['id']);
    $message = htmlspecialchars($_POST['message']);

    $sql = "INSERT INTO reviews (review_name, review_message) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $name, $message);

    if ($stmt->execute()) {
        $response = "Review submitted successfully!";
    } else {
        $response = "Error: " . $stmt->error;
    }
    $stmt->close();
}

// Fetch reviews for the carousel
$reviews = [];
$sql = "SELECT review_name, review_message FROM reviews";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reviews | IThink</title>
  <link rel="stylesheet" href="review.css">
</head>
<body>
  <div id="nav-container"></div>

  <div class="space-LOL"></div>

  <div class="container">
    <!-- Review Form -->
    <form id="reviewForm" action="" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="id" name="id" required>

      <label for="message">Message:</label>
      <input type="text" id="message" name="message" required>

      <input type="submit" value="Submit">
    </form>
    <div id="responseMessage">
        <?php if (isset($response)) echo htmlspecialchars($response); ?>
    </div>
  </div>

  <div class="testimony-container">
    <h1>Reviews</h1>
    <div class="carousel">
      <div class="carousel-inner">
        <?php foreach ($reviews as $index => $review): ?>
        <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">
          <div class="text">
            <h2><?php echo htmlspecialchars($review['review_name']); ?></h2>
            <p><?php echo htmlspecialchars($review['review_message']); ?></p>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
      <button class="carousel-control prev">&#10094;</button>
      <button class="carousel-control next">&#10095;</button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    &copy; 2024 IThink. All Rights Reserved.
  </footer>

  <script src="nav.js"></script>
  <script src="review.js"></script>
</body>
</html>
