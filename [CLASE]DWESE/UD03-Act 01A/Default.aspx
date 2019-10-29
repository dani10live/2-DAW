<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="Tb1" runat="server"></asp:TextBox>
            <asp:Button ID="Bt1" runat="server" Text="Comprobar" />
            <asp:Label ID="Lb1" runat="server" Text=""></asp:Label>
        </div>
        <div>
            <asp:Label ID="lb2" runat="server" Text=""></asp:Label>
        </div>
    </form>
</body>
</html>
