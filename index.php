<!doctype html>
<html lang="de">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Cookify</title>

        <style>
        html, body {
            height: 100%;
            background-color: #333;
        }

        .h-100 {
            height: 100%;
        }
        </style>
    </head>
    <body>
        <div class="d-flex text-center w-100 h-100 p-3 mx-auto flex-column bg-dark">
            <main role="main" class="m-auto w-25 text-light">
                <h1>Cookify</h1>
                <p>GDPR Cookie Consent Banner</p>
            </main>
        </div>

        <script src="cookify.js"></script>
        <script>
            document.addEventListener("DOMContentLoaded", function(event) {
                cookify.init({
                    "name": "cookify",
                    "expire": 30,
                    "bootstrap": true,
                    "settings": {
                        "necessary": {
                            "name": "Notwendig",
                            "desc": "Erforderliche Cookies um die Website Nutzen zu können. Zum Beispiel sind diese Cookies für das Ausfüllen von Formularen oder das Festlegen von Datenschutzeinstellungen notwendig.",
                        },
                        "analytics": {
                            "name": "Analytisch",
                            "desc": "Beschreibung von Analytisch",
                        },
                    },
                });
            });
        </script>
        
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script type="text/plain" cookify="analytics" src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script type="text/plain" cookify="analytics" src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script type="text/plain" cookify="analytics" src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
</html>