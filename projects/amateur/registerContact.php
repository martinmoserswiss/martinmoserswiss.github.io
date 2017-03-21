<?php
session_start();

$title = "";
$subTitle = "";
$message = "";

$email_to = "verein.amateur@gmail.com";
$email_subject = "Kontakt-Anfrage auf amateurkunst.ch";

$valid = false;

if(!isset($_POST['name']) or !isset($_POST['email']) or !isset($_POST['message']) or !isset($_POST['human'])) {
    $title = "Ungültige Formularwerte :(";
    $subTitle = "";
    $message = "Sorry, könntest du bitte das ganze Kontakt-Formular ausfüllen? Danke";
} else {
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required
    $human = $_POST['human']; // required

    if(!empty($name) and !empty($email) and !empty($message) and !empty($human)) {
        $email_message = "Neue Kontakt-Anfrage\n\n";

        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }

        $email_message .= "Name: ".clean_string($name)."\n";
        $email_message .= "Email: ".clean_string($email)."\n";
        $email_message .= "Nachricht: ".clean_string($message)."\n\n\n";

        // create email headers
        $headers = 'From: '.$email."\r\n".
        'Reply-To: '.$mail."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $email_subject, $email_message, $headers);

        $title = "Danke!";
        $subTitle = "Die Anfrage wurde erfolgreich überreicht.";
        $message = "Wir werden uns umgehend bei dir melden.";

    } else {
        $title = "Ungültige Anfrage :(";
        $subTitle = "";
        $message = "Deine übertragenen Formularwerte haben einen Fehler verursacht.";
    }
}
?>

<!DOCTYPE HTML>
<!--
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>AMATEUR - Anmeldestatus</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<body>

		<!-- Page Wrapper -->
			<div id="page-wrapper">

				<!-- Header -->
					<header id="header">
						<h1><a href="index.html"><img src="images/Logo_AMATEUR_weiss_header.png"</a></h1>
						<nav>
							<a href="#menu"></a>
						</nav>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<div class="inner">
							<div class="logo"><img src="images/Logo_AMATEUR_weiss.png"</div>
							<ul class="links">
								<li><a href="index.html">Home</a></li>
								<li><a href="vision.html">Vision</a></li>
                <li><a href="team.html">Team</a></li>
								<li><a href="gallery.html">Galerie / Shop</a></li>
								<li><a href="projects.html">Projekte</a></li>
								<li><a href="contact.html">Kontakt</a></li>
							</ul>
							<a href="#" class="close">Close</a>
						</div>
					</nav>

				<!-- Wrapper -->
					<section id="wrapper">
						<header>
							<div class="inner">
                <h2><?php echo "$title"; ?></h2>
								<span><?php echo "$subTitle"; ?> <?php echo "$message"; ?></span>
							</div>
						</header>
					</section>

					<section id="footer">
						<div class="inner">
              <ul class="copyright">
								<li>&copy; Amateur Verein</li>
								<li><a href="impressum.html">Impressum</a></li>
								<li>
									<a href="https://www.facebook.com/vereinamateur" class="icon fa-facebook" target="_blank"><span class="label">@vereinamateur</span></a>&nbsp;&nbsp;&nbsp;&nbsp;
									<a href="https://www.instagram.com/verein.amateur_probieren" class="icon fa-instagram" target="_blank"><span class="label">@verein.amateur_probieren</span></a>
								</li>
							</ul>
						</div>
					</section>

			</div>

		<!-- Scripts -->
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
