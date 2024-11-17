<?php

if(!isset($_POST['base']) || $_POST['base'] == null
|| !isset($_POST['power']) || $_POST['power'] == null)
    header('Location: ./index.php');

$base = $_POST['base'];
$power = $_POST['power'];

echo "$base do $power = ".($base**$power);

?>
<br />
<a href="./index.php">Wróć</a>