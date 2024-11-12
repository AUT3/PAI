<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function sprawdzNazwisko($nazwisko) {
            $koncowka_polskie = substr($nazwisko, -3, 2);
            $koncowka_plec = substr($nazwisko, -1);

            $typ = "";
            switch ($koncowka_polskie) {
                case 'sk':
                case 'dzk':
                case 'ck':
                case 'zk':
                    $typ = "polskie ";
                    break;
                default:
                    $typ = "zagraniczne ";
            }

            switch ($koncowka_plec) {
                case 'a':
                    $typ .= "kobiece";
                    break;
                case 'i':
                    $typ .= "męskie";
            }

            return "$nazwisko - $typ";
        }

        echo sprawdzNazwisko("Zasławska")."<br />";
        echo sprawdzNazwisko("Adamczyk")."<br />";
        echo sprawdzNazwisko("Woliński")."<br />";
    ?>
</body>
</html>