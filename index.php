<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<title>Deliri Notturni Live Page</title>
		<meta name="description" content="Non solo Guinness, Linux è buono anche per te.">
		<meta name="author" content="Julian Xhokaxhiu">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
		<!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
		<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/jquery.youtubelivefeed-0.2.js"></script>
		<script src="js/scripts.js"></script>
	</head>
	<body>
		<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container">
					<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</a>
					<a class="brand" href="#">Deliri Notturni</a>
					<div class="nav-collapse">
						<ul class="nav">
							<li class="active"><a href="#">Home</a></li>
							<li><a href="http://delirinotturni.tumblr.com/">Tumblr</a></li>
							<li><a href="http://webchat.freenode.net/?channels=DeliriNotturni">IRC</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="alert alert-info fade in" style="display:none">
				<a class="close" data-dismiss="alert" href="#">×</a>
				<strong>Siamo Live!</strong> Ricordatevi che potrete trovare la registrazione di questa puntata direttamente sul <a href="http://www.youtube.com/playlist?list=PL7VRlyo2yZsWMwYqu5896dh3CZpgqBX5X&feature=plcp">canale</a>, una volta concluso :)
			</div>
			<div class="video-container">
				<!-- Here we'll place the youtube video -->
			</div>
			<div class="alert alert-warning alert-comments fade in" style="display:none">
				I commenti vengono aggiornati in automatico ogni 5 secondi. Non c'è bisogno di ricaricare tutta la pagina.
			</div>
			<div class="row">
				<div class="span8 comments">
					<h2>Commenti</h2>
					<ol class="video_comments"></ol>
				</div>
				<div class="span4">
					<h2>Twitter</h2>
					<a class="twitter-timeline" href="https://twitter.com/DeliriNotturni" data-widget-id="256789026332352513">Tweets di @DeliriNotturni</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
				</div>
			</div>
			<footer>
				<p>Realizzato da <a href="http://www.julianxhokaxhiu.com/" title="Julian Xhokaxhiu - Web Designer and Developer">Julian Xhokaxhiu</a>, <?php echo (date('Y') == "2012") ? "2012" : "2012 - ".date('Y') ?> per <a href="http://www.delirinotturni.org/">Deliri Notturni</a>.<br/>Questa pagina è Open Source ed è coperta da licenza <a href="http://www.gnu.org/licenses/gpl.html">GPLv3</a>. Il suo codice sorgente può essere scaricato, modificato e visionato sul repository pubblico di <a href="https://github.com/julianxhokaxhiu/DeliriNotturni-Live-Page">GitHub</a>.</p>
			</footer>
		</div>
	</body>
</html>