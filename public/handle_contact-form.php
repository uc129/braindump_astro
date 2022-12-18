<?php
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

$recipient = "hello@braindumpstudios.com";
$subject = "Contact Form | braindump Studios";

$headers = "From: $name <$email>\r\n";

mail($recipient, $subject, $message, $headers);
