
Imports System.Collections.ObjectModel
Imports System.IO

Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        ObtenerRuta()
    End Sub

    Public Function ObtenerRuta() As ArrayList
        Dim rutaOrigen As String = (HttpContext.Current.Server.MapPath("almacen"))
        ListFiles(rutaOrigen)




    End Function

    Private Sub ListFiles(ByVal ruta As String)

        Dim info As DirectoryInfo = New DirectoryInfo(ruta)
        For Each i In info.GetDirectories
            Response.Write("<li><img width='34' src='media\carpeta.png'>")
            Response.Write("<a href=" + ruta + "\" + i.Name + ">" + i.Name + "</li><br>")
            Response.Write("</ul>")
        Next
        For Each j In info.GetFiles
            Response.Write("<li><img width='24' src ='media\archivo.png'>")
            Response.Write("<a href='Default.aspx?name=" + j.Name + "'>" + j.Name + "</a></li><br>")
        Next
    End Sub
End Class