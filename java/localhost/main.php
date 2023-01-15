<?php

$connection = mysqli_connect("localhost","root","","usersdatabase");

if($connection == false){
    echo 'Ошибка подключения';
    exit();
} else {
    echo 'Подключение успешно';
}


if(isset($_POST["login"])){
    $login = $_POST["login"];    
}

if(isset($_POST["gender"])){
    $gender = $_POST["gender"];
}

if(isset($_POST["age"])){
    $age = $_POST["age"];
}

if(isset($_POST["password"])){
    $password = $_POST["password"];
    $encrypted_password = password_hash($password, PASSWORD_DEFAULT);
}

$sql = mysqli_query($connection, "INSERT INTO `t_user` (`login`, `gender`, `age`, `password`) 
    VALUES ('$login', '$gender', '$age', '$encrypted_password')") or die("error occured: " . mysqli_error($connection));
?>

<html>

    <head>
        <meta charset="utf-8" />
        <title>Main Page</title>
    </head>

    <body>        
        <?php
            echo "<p>Здравствуйте, " .$login. ". Спасибо за регистрацию!</p>";
        ?>
    </body>

</html>

