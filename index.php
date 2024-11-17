<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        form {
            position: relative;
            top: 1rem;
        }

        .power {
            position: relative;
            bottom: 1rem;
        }

        .btn {
            margin-left: 1rem;
        }
    </style>
</head>
<body>
    <form action="./calc.php" method="POST">
        <input type="text" value="3" name="base" size="3" />
        <input type="text" value="2" name="power" size="2" class="power" />
        <input type="submit" value="Licz potęgę" class="btn" />
    </form>
</body>
</html>