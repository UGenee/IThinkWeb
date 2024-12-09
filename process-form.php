<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['id'];
    $message = $_POST['message'];

    try {
        $stmt = $pdo->prepare("INSERT INTO reviews (review_name, review_message) VALUES (:name, :message)");
        $stmt->execute(['name' => $name, 'message' => $message]);
        echo json_encode(["message" => "Review submitted successfully!"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Internal Server Error"]);
    }
}
?>
