<?php
    $erre= rand(1,255);
    $ge= rand(1,255);
    $be= rand(1,255);

    $color = "$erre,$ge,$be";

?>


<html>
<head>

</head>
<body style="background-color:rgb(<?=$color?>)">
    <?php
        echo  "<p>el color es $color</p>"
    ?>

</body>
</html>