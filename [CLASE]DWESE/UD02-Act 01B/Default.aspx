<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Label ID="Lb1" runat="server" Text="DNI:"></asp:Label>
        <asp:TextBox ID="Tb1" runat="server"></asp:TextBox>
        <asp:Label ID="Lb2" runat="server" Text="Letra:"></asp:Label>
        <asp:TextBox ID="Tb2" runat="server" Width="25px"></asp:TextBox>
        <div>
            <asp:Button ID="Bt1" runat="server" Text="Comprobar" OnClick="Bt1_Click" />
            <br />
            <asp:Label ID="Lb3" runat="server" Text=""></asp:Label>
        </div>
    </form>
</body>
</html>
