CREATE TABLE IF NOT EXISTS reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    review_name VARCHAR(50) NOT NULL,
    review_message TEXT NOT NULL
)

INSERT INTO reviews (review_name, review_message) VALUES
    ('John', 'This website is very useful!'),
    ('Jane', 'Very informative.'),
    ('Mary', 'Nice.');


SELECT * FROM reviews;
