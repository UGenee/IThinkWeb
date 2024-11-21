<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | IThink</title>
    <link rel="stylesheet" href="/docs/home.css">
        <link rel="stylesheet" href="/docs/article.css">
    <link rel="icon" type="image/x-icon" href="/docs/Icon.ico">
        <link rel="stylesheet" href="/docs/template.css">
</head>
<body>

<div class="nav">
    <div class="wrap">
        <div class="logo">
            <a href="index.php">
                <img src="/docs/LogoVer2.png" />
            </a>
        </div>
        <div class="links-container">
            <button class="dropdown-button">☰</button>
            <div class="links">
                <a href="index.php" data-table="Home">Home</a>
                <a href="/docs/about.php" data-table="About">About</a>
                <a href="/docs/contact.php" data-table="Contact">Contacts</a>
                <a href="/docs/portfolio.php" data-table="Portfolio">Portfolio</a>
                <a href="/docs/review.php" data-table="Review">Review</a>
                <a href="/docs/course-list.php" data-table="Courses">Courses</a>
            </div>
        </div>
    </div>
    <form id="search-form">
        <input type="text" id="search-input" placeholder="Search...">
    </form>
</div>

<div id="search-results"></div>   

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
                    <img src="/docs/SoftEng.png" alt="Software Development">
                    <h2>Software Development</h2>
                    <p>Software Development involves designing and building applications to solve real-world problems.
                    </p>
                    <a href="/docs/Software-eng.php">Learn More</a>
                </div>
                <div class="card">
                    <img src="/docs/DataSci.png" alt="Data Science">
                    <h2>Data Science</h2>
                    <p>Data Science involves the use of statistics to extract meaningful insights from data to use for
                        business.</p>
                    <a href="/docs/Data-Science.php">Learn More</a>
                </div>
                <div class="card">
                    <img src="/docs/CompEng.png" alt="Computer Engineering">
                    <h2>Computer Engineering</h2>
                    <p>Computer Engineering merges computer science and electrical engineering to create hardware and
                        software.</p>
                    <a href="/docs/ComEng.php">Learn More</a>
                </div>
            </div>
        </div>
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

    <div class="heading-container">
        <div class="title">
            <h1 class="head-title">WHAT YOU'LL LEARN</h1>
        </div>
        <div class="description">
            <p class="paragraph">Discover the exciting world of IT through comprehensive courses that cover everything from
                programming to computer engineering.</p>
        </div>
    </div>


        <!-- Footer -->
        <footer class="footer">
            &copy; 2024 IThink. All Rights Reserved.
        </footer>

</body>

    <script src="/docs/script.js"></script>
    <script src="/docs/nav.js"></script>
    <script src="/docs/review.js"></script>
</html>
