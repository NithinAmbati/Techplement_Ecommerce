<?php
// Database connection parameters
$dbHost = 'localhost'; // Database host
$dbUsername = 'your_username'; // Database username
$dbPassword = 'your_password'; // Database password
$dbName = 'f_payments'; // Database name


// Connect to the database
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $fullname = htmlspecialchars(trim($_POST['fullname']));
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $cardnumber = preg_replace('/\D/', '', $_POST['cardnumber']); // Remove non-numeric characters
    $expiry = $_POST['expiry'];
    $cvv = $_POST['cvv'];
    $totalAmount = floatval($_POST['totalAmount']);

    // Insert payment information into the database
    $sql = "INSERT INTO payments (fullname, email, card_number, expiry, cvv, total_amount, payment_date)
            VALUES (?, ?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssd", $fullname, $email, $cardnumber, $expiry, $cvv, $totalAmount);

    if ($stmt->execute()) {
        // Payment successfully processed, redirect to payment success page
        header("Location: payment_success.html");
        exit();
    } else {
        // Error in SQL execution
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

// Close database connection
$conn->close();
?>