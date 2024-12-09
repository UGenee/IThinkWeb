<?php
$host = 'DB_USER';
$dbname = 'DB_DBNAME';
$username = 'DB_NAME';
$password = 'DB_PASS';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error connecting to database: " . $e->getMessage());
}
?>
