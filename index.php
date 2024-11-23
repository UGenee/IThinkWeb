<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
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
    <title>Home | IThink</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="article.css">
    <link rel="icon" type="image/x-icon" href="Icon.ico">
    <link rel="stylesheet" href="template.css">
</head>
<body>
    <?php include 'nav.php'; ?>

    <div class="space-LOL"></div>

    <div class="container">
        <div class="intro-text">
            <p class="introduction">Start learning</br>about IT</br></p>
            <p class="sub-intro">Unlock your hidden talent by learning about IT-related courses!</p>
        </div>
        <div class="intro-btn">
            <button class="BtnStart" onclick="start()">Start Now</button>
        </div>
    </div>

    <div class="content">
        <div class="card-container">
            <div class="cards">
                <div class="card">
                    <img src="SoftEng.png" alt="Software Development">
                    <h2>Software Development</h2>
                    <p>Software Development involves designing and building applications to solve real-world problems.</p>
                    <a href="Software-eng.php">Learn More</a>
                </div>
                <div class="card">
                    <img src="DataSci.png" alt="Data Science">
                    <h2>Data Science</h2>
                    <p>Data Science involves the use of statistics to extract meaningful insights from data to use for business.</p>
                    <a href="Data-Science.php">Learn More</a>
                </div>
                <div class="card">
                    <img src="CompEng.png" alt="Computer Engineering">
                    <h2>Computer Engineering</h2>
                    <p>Computer Engineering merges computer science and electrical engineering to create hardware and software.</p>
                    <a href="ComEng.php">Learn More</a>
                </div>
            </div>
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

    <div class="heading-container">
        <div class="title">
            <h1 class="head-title">WHAT YOU'LL LEARN</h1>
        </div>
        <div class="description">
            <p class="paragraph">Discover the exciting world of IT through comprehensive courses that cover everything from programming to computer engineering.</p>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        &copy; 2024 IThink. All Rights Reserved.
    </footer>

    <script src="script.js"></script>
    <script src="nav.js"></script>
    <script src="review.js"></script>
</body>
</html>
