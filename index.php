<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td {
            width: 10px;
            height: 10px;
        }
    </style>
</head>
<body>
    <?php
        function mozaika($cols, $rows) {
            $S = 2;
            $out = "<table style=\"border-collapse: collapse;\">";
            for($i = 0; $i < $rows; $i++) {
                $out .= "<tr>";
                for($j = 0; $j < $cols; $j++) {
                    $r = rand(0, 255);
                    $g = rand(0, 255);
                    $b = rand(0, 255);
                    $out .= "<td style=\"background-color: rgb($r, $g, $b);\"></td>";   
                }
                $out .= "</tr>";
            }
            $out .= "</table>";

            echo $out;
        }

        mozaika(25, 25);
    ?>
</body>
</html>