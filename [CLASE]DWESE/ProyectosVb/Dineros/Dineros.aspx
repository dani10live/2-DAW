<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Dineros.aspx.vb" Inherits="Dineros" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        #Button1 {
            width: 100px;
            margin-left: 25px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <p>
            <asp:TextBox ID="tbEurDol1" runat="server"></asp:TextBox>
            <asp:DropDownList ID="ddlEurDol1" runat="server" AutoPostBack="True" Height="19px" style="margin-left: 30px" Width="80px">
                <asp:ListItem>Euros</asp:ListItem>
                <asp:ListItem>D&#243;lar</asp:ListItem>
            </asp:DropDownList>
        </p>
        <p>
            <asp:TextBox ID="tbEurDol2" runat="server"></asp:TextBox>
            <asp:DropDownList ID="ddlEurDol2" runat="server" AutoPostBack="True" Height="17px" style="margin-left: 30px" Width="80px">
                <asp:ListItem>Euros</asp:ListItem>
                <asp:ListItem>Dólar</asp:ListItem>
            </asp:DropDownList>
            <asp:Button ID="btCambiar" runat="server" style="margin-left: 30px" Text="Cambiar" Width="100px" />
        </p>
    </form>
</body>
</html>
