<link rel="stylesheet" href="template.css" />

<div class="nav">
  <div class="wrap">
    <div class="logo">
      <a href="index.php">
        <img src="LogoVer2.png" />
      </a>
    </div>
    <div class="links-container">
      <button class="dropdown-button">☰</button>
      <div class="links">
        <a href="/index.php" data-table="Home">Home</a>
        <a href="about.php" data-table="About">About</a>
        <a href="contact.php" data-table="Contact">Contacts</a>
        <a href="portfolio.php" data-table="Portfolio">Portfolio</a>
        <a href="review.php" data-table="Review">Review</a>
        <a href="course-list.php" data-table="Courses">Courses</a>
      </div>
    </div>
  </div>
  <form id="search-form">
    <input type="text" id="search-input" placeholder="Search..." />
  </form>
</div>

<div id="search-results"></div>

<script src="nav.js"></script>
