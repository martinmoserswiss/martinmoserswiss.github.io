<?php
session_start();

$pageTitle = "";
$subTitle = "";
$message = "";

$title = "";
$artist = "";
$description = "";
$negotiationPrice = "";

$prename = "";
$name = "";
$address = "";
$zipCity = "";
$email = "";
$human = "";

$email_to = "verein.amateur@gmail.com";
$email_subject = "Bestellungs-Anfrage auf amateurkunst.ch";

$valid = false;

if(!isset($_POST['title']) or !isset($_POST['artist']) or !isset($_POST['description']) or !isset($_POST['negotiationPrice']) or !isset($_POST['prename']) or !isset($_POST['name']) or !isset($_POST['address']) or !isset($_POST['zipCity']) or !isset($_POST['email']) or !isset($_POST['human'])) {
    $pageTitle = "Ungültige Formularwerte 😕";
    $subTitle = "";
    $message = "Sorry, könntest du bitte das ganze Kontakt-Formular ausfüllen? Danke";
} else {
    $title = $_POST['title']; // required
    $artist = $_POST['artist']; // required
    $description = $_POST['description']; // required
    $negotiationPrice = $_POST['negotiationPrice']; // required

    $prename = $_POST['prename']; // required
    $name = $_POST['name']; // required
    $address = $_POST['address']; // required
    $zipCity = $_POST['zipCity']; // required
    $email = $_POST['email']; // required
    $human = $_POST['human']; // required

    if(!empty($title) and !empty($artist) and !empty($description)
    and !empty($negotiationPrice) and !empty($prename) and !empty($name)
    and !empty($address) and !empty($zipCity) and !empty($email) and !empty($human)) {
        $email_message = "Neue Bestellungs-Anfrage\n\n";

        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }

        $email_message .= "Vorname: ".clean_string($prename)."\n";
        $email_message .= "Name: ".clean_string($name)."\n";
        $email_message .= "Adresse: ".clean_string($address)."\n";
        $email_message .= "PLZ & Ort: ".clean_string($zipCity)."\n";
        $email_message .= "Email: ".clean_string($email)."\n\n\n";
        $email_message .= "Objekt\n";
        $email_message .= "Produkt-Titel: ".clean_string($title)."\n";
        $email_message .= "Künstler: ".clean_string($artist)."\n";
        $email_message .= "Beschreibung: ".clean_string($description)."\n";
        $email_message .= "Verhandlungspreis: ".clean_string($negotiationPrice)."\n";

        // create email headers
        $headers = 'From: '.$email."\r\n".
        'Reply-To: '.$mail."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $email_subject, $email_message, $headers);

        $pageTitle = "Danke! 🎉";
        $subTitle = "Die Anfrage wurde erfolgreich überreicht.";
        $message = "Wir werden uns umgehend bei Dir melden.";

    } else {
        $pageTitle = "Ungültige Anfrage 😕";
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
		<title>AMATEUR - Bestellungsstatus</title>
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
                <h2><?php echo "$pageTitle"; ?></h2>
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