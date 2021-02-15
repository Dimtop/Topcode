<!DOCTYPE html>
<html>
<head>
    <title>Topcode-Contact</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/loader.js"></script>
    <script src="js/menuToggle.js"></script>
    <script src="js/contactFormSubmission.js" type="module"></script>
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
    <h1 class="title">Επικοινωνία</h1>
</div>
<div class="oneColContainer" id="contactContainer">
   <form  id="contactForm">
       <p class="labelText">Ονοματεπώνυμο</p>
        <input type="text" name="name" id="name" />

       <p class="labelText">Email</p>
       <input type="email" name="email" id="email" />

       <p class="labelText">Τηλέφωνο</p>
       <input type="text" name="phone" id="phone" />

       <p class="labelText">Μήνυμα</p>
       <textarea name="message" id="message" rows="4"></textarea>

       <input type="submit" value="Αποστολή" class="mainButton"/>
   </form>

</div>

</body>
</html>


