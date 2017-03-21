<?php
session_start();

$imagePath = "";
$title = "";
$artist = "";
$description = "";
$negotiationPrice = "";

$valid = false;

if(!isset($_POST['imagePath']) or !isset($_POST['title']) or !isset($_POST['artist']) or !isset($_POST['description']) or !isset($_POST['negotiationPrice'])) {
    $imagePath = "Ungültige Übermittlung 😕";
} else {
    $imagePath = $_POST['imagePath']; // required
    $title = $_POST['title']; // required
    $artist = $_POST['artist']; // required
    $description = $_POST['description']; // required
    $negotiationPrice = $_POST['negotiationPrice']; // required

    if(!empty($imagePath) and !empty($title) and !empty($artist) and !empty($description) and !empty($negotiationPrice)) {
        $pageTitle = "Anfrage abschliessen";
        $valid = true;
    } else {
      $pageTitle = "Ungültige Übermittlung 😕";
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
                <h2><?php echo "$pageTitle"; ?></h2>
                <div class="box alt">
                  <?php if ($valid) { ?>
                    <div class="row uniform">
                      <div class="6u 12u(small) 12u$(xsmall)">
                        <span class="image fit"><img src="<?php echo "$imagePath"; ?>" alt="" /></span>
                      </div>
                      <div class="4u 12u(small) 12u$(xsmall)">
                        <span><b><?php echo "$title"; ?></b><br/><?php echo "$artist"; ?><br/><?php echo "$description"; ?><br/>CHF <?php echo "$negotiationPrice"; ?>.-</span>
                      </div>
                    </div>
                    <br/>
                    <div>
                      <span>Bitte fülle das untenstehende Formular aus um die Bestellungsanfrage abzuschliessen.</span>
                    </div>
                  <?php } else {?>
                    <div>
                      <span>Bei der Verarbeitung der Bestellungsanfrage ist ein Fehler aufgetretten.</span><br/>
                      <span>Bitte verwende alternativ das Kontakt-Formular um deine Bestellungsanfrage abzusenden.</span><br/><br/>
                      <span>Vielen Dank und Sorry für die Umstände. ✌️</span>
                    </div>
                  <?php } ?>
                </div>
              </div>
						</header>

            <?php if ($valid) { ?>
							<div class="wrapper">
								<div class="inner">
                  <h2 class="major">Formular</h2>
                  <p></p>
									<section class="features">
                    <form name="register210117" method="post" action="registerOrder.php">
                      <div class="row uniform">
                        <input name="title" type="hidden" value="<?php echo $title; ?>"/>
                        <input name="artist" type="hidden" value="<?php echo $artist; ?>"/>
                        <input name="description" type="hidden" value="<?php echo $description; ?>"/>
                        <input name="negotiationPrice" type="hidden" value="<?php echo $negotiationPrice; ?>"/>
                        <div class="6u 12u$(xsmall)">
                          <label for="demo-name">Vorname</label>
                          <input type="text" name="prename" id="prename" value="" />
                        </div>
                        <div class="6u 12u$(xsmall)">
                          <label for="demo-name">Name</label>
                          <input type="text" name="name" value="" />
                        </div>
                        <div class="6u 12u$(xsmall)">
                          <label for="demo-name">Adresse</label>
                          <input type="text" name="address" value="" />
                        </div>
                        <div class="6u 12u$(xsmall)">
                          <label for="demo-name">PLZ & Ort</label>
                          <input type="text" name="zipCity" value="" />
                        </div>
                        <div class="6u 12u$(xsmall)">
                          <label for="demo-email">Email</label>
                          <input type="email" name="email" id="email" value="" />
                        </div>
                        <div class="12u$">
                          <input type="checkbox" id="human" name="human" unchecked>
                          <label for="human">Ich bin kein Roboter</label>
                        </div>
                        <div class="12u$">
                          <ul class="actions">
                            <li><input type="submit" value="Anfrage abschiessen" class="special" /></li>
                          </ul>
                        </div>
                      </div>
                    </form>
									</section>
								</div>
							</div>
            <?php }?>

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
