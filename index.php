<!doctype html>
<html>

<head>
	<meta charset="utf-8"/>
	<title>Partenariats INSA Toulouse</title>
	<link rel="stylesheet" media="all" type="text/css" href="./css/stylesheet.css">
	<link rel="shortcut icon" type="image/x-icon" href="pictures/logo.jpg" />
</head>

<body>
	<?php include('static/header.php'); ?>
	<div id="corps">
		<?php include('static/onglets.php'); ?>
		<main>
		<?php
			$nomPage = 'main/home.php';
			if(isset($_GET['page'])) {
				if(file_exists(addslashes('main/'.$_GET['page'].'.php')))
					$nomPage = addslashes('main/'.$_GET['page'].'.php');
					else
					$nomPage = 'includes/fatalError.php';
			}
			include($nomPage);
		?>
		</main>
	</div>
	<?php include('static/footer.php'); ?>
</body>

</html>