<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Paris Bouge</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poiret+One">
    <link rel="stylesheet" href="static/css/main.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#/">Paris Events</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="main-menu">
                <ul class="navbar-nav w-100">
                    <li class="nav-item">
                        <a class="nav-link" href="#/">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/search">Recherche</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/about">À Propos</a>
                    </li>
                    <li class="nav-item ml-auto">
                        <a class="nav-link" href="#/login">Connexion</a>
                    </li>
                </ul>
            </div><!-- .navbar-collapse -->
        </div><!-- .container -->
    </nav><!-- .navbar -->

    <main class="container"></main>
    
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js"></script> -->
    <script src="node_modules/vanilla-router/dist/vanilla-router.js"></script>

    <script type="module" src="app/main.js"></script>
</body>
</html>