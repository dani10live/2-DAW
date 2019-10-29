Public Class WebForm2
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If IsPostBack Then

            If comprobarDni(TbDni.Text, TbLetra.Text) Then
                lbText.Text = "Has introducido un D.N.I correcto"
            Else
                lbText.Text = "No has introducido un D.N.I correcto"
            End If

        End If
    End Sub
    Protected Function comprobarDni(ByVal d As String, ByVal l As Char) As Boolean
        Dim letras As String = "TRWAGMYFPDXBNJZSQVHLCKE"
        Dim letra As Char
        Dim calculo As Integer
        calculo = Integer.Parse(d) Mod 23
        letra = letras(calculo)

        If letra = l Then
            Return True
        Else
            Return False
        End If

    End Function

End Class