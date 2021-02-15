<!DOCTYPE html>
<html>
    <head>
        <title>Topcode-Information Technology Made Simple.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/loader.js"></script>
        <script src="js/menuToggle.js"></script>
        <link href="css/mainStyle.css" rel="stylesheet"/>
        <link href="css/responsiveStyle.css" rel="stylesheet"/>
        <link href="css/animations.css" rel="stylesheet"/>
        <script src="https://use.fontawesome.com/69a78efeab.js"></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HEKDHZ5YD1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HEKDHZ5YD1');
        </script>
    </head>
    <body>
        <?php include_once("templates/menu.php"); ?>
        <div id="titleContainer">
            <h1 class="title" id="tcTitle">Topcode</h1>
            <h2 class="subtitle">Information Technology Made Simple</h2>


        </div>
        <div id="homeServicesContainer">
            <div class="serviceButtonContainer">
                <a  href="softwareDevelopment.php">
                    <button class="serviceButton">
                        Ανάπτυξη λογισμικού
                    </button>
                </a>
            </div>

            <div  class="serviceButtonContainer">
                <a  href="enterpriseDataManagement.php">
                    <button class="serviceButton">
                        Διαχείριση εταιρικών δεδομένων
                    </button>
                </a>
            </div>

            <div class="serviceButtonContainer">
                <a  href="bussinessReengineering.php">
                    <button class="serviceButton">
                        Ανασχεδιασμός επιχειρηματικών διαδικασιών
                    </button>
                </a>

            </div>
        </div>


        <div class="loader"></div>

    </body>
</html>


