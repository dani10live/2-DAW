<%@ Page Language="VB" AutoEventWireup="false" CodeFile="default.aspx.vb" Inherits="_default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="height: 70px; width: 322px">
            <asp:TextBox ID="tbId1" runat="server" Width="70px"></asp:TextBox>
            <asp:Label ID="Lbx2" runat="server" Text=" x2 + " ViewStateMode="Disabled"></asp:Label>
            <asp:TextBox ID="tbId2" runat="server" Width="70px"></asp:TextBox>
            <asp:Label ID="lbx" runat="server" Text=" X + "></asp:Label>
            <asp:TextBox ID="tbId3" runat="server" Width="70px"></asp:TextBox>
            <asp:Label ID="lbEq" runat="server" Text=" = "></asp:Label>    
            <asp:Label ID="lbsol" runat="server" Text="0"></asp:Label>    
            <asp:Button ID="Button1" runat="server" Text="Calcular" />
        </div>
        <div>
            <asp:Label ID="lbSoluc1" runat="server"></asp:Label>
        </div>
        <div>
            <asp:Label ID="lbSoluc2" runat="server" Text=""></asp:Label>
        </div>
    </form>
</body>
</html>
