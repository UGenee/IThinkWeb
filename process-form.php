<?php
include 'db.php';

if($_SERVER["REQUEST METHOD"] == "POST"){
    $username = mysql_real_escape_string($_POST['username']);
    $password = mysql_real_escape_string($_POST['password']);

    try {
        // Insert review into the database
        $stmt = $pdo->prepare("INSERT INTO reviews (review_name, review_message) VALUES (?, ?)");
        $stmt->execute([$name, $message]);

        echo json_encode(["message" => "Review submitted successfully!"]);
    } catch (PDOException $e) {
        error_log("Error inserting review: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["error" => "Internal Server Error"]);
    }
}
?>
