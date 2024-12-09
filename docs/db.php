<?php
<<<<<<< HEAD
$host = 'DB_USER';
$dbname = 'DB_DBNAME';
$username = 'DB_NAME';
$password = 'DB_PASS';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error connecting to database: " . $e->getMessage());
=======
$host = "localhost";
$dbname = "mydb";
$user = "root";
$pass = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    die("Database connection failed!");
>>>>>>> 3a9c965ae9ff147f7282259297e17127dfe598e9
}
?>
