<?php
if(count($_REQUEST)>0) {
    $cantidad = $_REQUEST['tdCantidad'];
    $moneda = $_REQUEST['ddlmoneda'];
    $mensaje = "Dolares";
    switch($moneda) {
        case 0: $cantidad = $cantidad * 1.09;$mensaje = "Dolares";  break;
        case 1: $cantidad = $cantidad / 1.09;$mensaje = "Euros";    break;
    }
    echo "$cantidad $mensaje";
}
?>
<!DOCTYPE html>
<html>
<title>
    Mi Formulario PHP
</title>
<body>
<form method="post" actions="">
    <input name="tdCantidad" type="number" min="1" value="1"></input>
    <select name="ddlmoneda">
        <option value="0">Euro</option>
        <option value="1">Dolar</option>
    </select>
    <span>son</span>
    <input name="BtSubmit1" type="submit" value="Aceptar"/>
</form>
</body>
</html>