<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars($_POST["fullname"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='text-danger'>Invalid email format.</p>";
        exit;
    }

    // Email settings
    $to = "rehanaparbin0210@gmail"; // Replace with your email
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "Name: $fullname\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<p class='text-success'>Thank you, $fullname! Your message has been sent.</p>";
    } else {
        echo "<p class='text-danger'>Message sending failed. Please try again.</p>";
    }
} else {
    echo "<p class='text-danger'>Invalid request.</p>";
}
?>
