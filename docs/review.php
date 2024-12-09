<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reviews | IThink</title>
  <link rel="stylesheet" href="review.css">
</head>
<body>
  <?php
  include 'nav.php'
  ?>

  <div class="space-LOL"></div>

  <div class="container">
    <form id="reviewForm" action="/process-form" method="POST" onsubmit="submitForm(event)">
      <label for="name">Name:</label>
      <input type="text" id="id" name="id" required>

      <label for="message">Message:</label>
      <input type="text" id="message" name="message" required>

      <input type="submit" value="Submit">
    </form>
    <div id="responseMessage"></div>
  </div>

  <div class="testimony-container">
    <h1>Reviews</h1>
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="text">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
      <button class="carousel-control prev" onclick="prevSlide()">&#10094;</button>
      <button class="carousel-control next" onclick="nextSlide()">&#10095;</button>
    </div>
  </div>

    <!-- Footer -->
    <footer class="footer">
      &copy; 2024 IThink. All Rights Reserved.
    </footer>

  <script src="nav.js"></script>
  <script src="review.js"></script>

  <?php
include 'db.php';

try {
    $stmt = $pdo->query("SELECT * FROM reviews");
    $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($reviews);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Internal Server Error"]);
}
?>

    </body>
    </html>
  