<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="WebForm2.aspx.vb" Inherits="WebApplication1.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="width: 336px">
            <asp:Label ID="lDni" runat="server" Text="DNI: "></asp:Label>
            <asp:TextBox ID="TbDni" runat="server"></asp:TextBox>
            <asp:Label ID="lLetra" runat="server" Text="Letra: "></asp:Label>
            <asp:TextBox ID="TbLetra" runat="server" Width="25px" MaxLength="1" ></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" Text="Comprobar" />
            <br />
            <br />
            <asp:Label ID="lbText" runat="server"></asp:Label>
        </div>
    </form>
</body>
</html>
