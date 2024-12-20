<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | IThink</title>
    <link rel="stylesheet" href="portfolio.css">
    <link rel="icon" type="image/x-icon" href="Icon.ico">
</head>
<body>

    <div id="nav-container"></div>

    <div class="space-LOL"></div>
    
    <div class="heading">
        <center><p>Past Projects</p></center>
    </div>


    <div class="sub-text">
        <p>These are the past projects of some of the developers of this informative website.</p>
    </div>
    <div class="container">
        <div class="project-row taste-row">
            <div class="explanation">
                <h2>Taste-A-Place</h2>
                <p>An interactive website designed to explore and celebrate the diverse culinary traditions of various
                    continents and countries.
                    Users can explore and try different areas of foods and unique ingredients from different cultures
                    and countries by following the steps.
                    The website provides detailed descriptions of the various dishes, combined with colorful pictures of
                    the beauty that lies in international cuisine.
                    Users can filter the searches by region or even the type of cuisine that best suits their
                    requirements, ensuring ease in finding specific dishes or ingredients they wish to know more about.
                </p>
            </div>

            <div class="slideshow-container taste" id="tasteSlideshow">
                <div class="mySlides fade">
                    <img src="Taste1.png" alt="Taste-A-Place">
                </div>
                <div class="mySlides fade">
                    <img src="Taste2.png" alt="Taste-A-Place">
                </div>
                <div class="mySlides fade">
                    <img src="Taste3.png" alt="Taste-A-Place">
                </div>
                <div class="mySlides fade">
                    <img src="Taste4.png" alt="Taste-A-Place">
                </div>

                <button class="prev" onclick="plusSlides('taste', -1)">&lt;</button>
                <button class="next" onclick="plusSlides('taste', 1)">&gt;</button>
            </div>
        </div>

        <div class="project-row">
            <div class="explanation">
                <h2>B.A.O.N</h2>
                <p>An intuitive mobile app where you can track and manage your daily expenses.
                    B.A.O.N helps users manage work expenses, travel expenses, and all purchases.
                    Users can set budgets for different categories, receive notifications when they approach their
                    spending limits, and generate reports that offer insights into their spending habits.
                    The app also includes features such as goal setting, reminders for upcoming bills, and tips for
                    saving money, making it an essential tool for anyone looking to improve their financial health.
                </p>
            </div>

            <div class="slideshow-container budget" id="budgetSlideshow">
                <div class="mySlides fade">
                    <img src="BAON1.png" alt="B.A.O.N">
                </div>
                <div class="mySlides fade">
                    <img src="BAON2.png" alt="B.A.O.N">
                </div>

                <button class="prev" onclick="plusSlides('budget', -1)">&#10094;</button>
                <button class="next" onclick="plusSlides('budget', 1)">&#10095;</button>
            </div>
        </div>
    </div>

        <!-- Footer -->
        <footer class="footer">
            &copy; 2024 IThink. All Rights Reserved.
        </footer>

</body>
<script src="portfolio.js"></script>
<script src="nav.js"></script>
</html>
