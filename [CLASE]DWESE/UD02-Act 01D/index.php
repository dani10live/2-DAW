<?php


function btn1_click()
{
    $introducir = false;
    $numero = $_POST["num"];
    $letra = $_POST["let"];
    if(!empty($numero) and !empty($letra))  {
    $introducir = Okey($numero, $letra);
    }
    if
}

function Okey($n, $L)

{

    $todas = "TRWAGMYFPDXBNJZSQVHLCKE";

    $ok = false;

    if ($todas[intval($n, 0) % 23] == strtoupper($L)) $ok = true;

    return ok;

}

?>
<html>
<head>
    <title>Ej1</title>
</head>
<body>
<form action="#" method="post" id="form">
    <label>Número: </label>
    <input name='num' type="text"/>
    <label name='let'>Letra: </label>
    <input type="text" size="1"/>
    <br/>
    <br/>
    <input type="Button" value="Comprobar" onclick="<?php $result = btn1_click(); ?>"/><br/>
    <br/>
    <label name="resultado"><?php echo $result; ?></label>

</form>
</body>
</html>