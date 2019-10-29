<?php
if(isset($_REQUEST['BtSubmit1'])) {
    $cantidad = $_REQUEST['tdCantidad'];
    $moneda = $_REQUEST['ddlmoneda'];
    switch($moneda) {
        case 0: $cantidad = $cantidad * 1.09; break;
        case 1: $cantidad = $cantidad / 1.09; break;

    }
    echo "Al cambio es $cantidad";
}
?>
<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml">
<header>
    <title>
        Mi Formulario PHP
    </title>
</header>
<body>
    <form method="post" actions="">
        <input name="tdCantidad" type="number" min="1" value="1"></input>
        <select name="ddlmoneda">
            <option value="<0">Euro</option>
            <option value="1">Dolar</option>
        </select>
        <span>son</span>
        ++++
        xxxx
        <input name="BtSubmit1" type="submit" value="Aceptar"/>
    </form>
</body>
</html>