
Partial Class _default
    Inherits System.Web.UI.Page

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If IsPostBack Then
            Dim a = tbId1.Text
            Dim b = tbId2.Text
            Dim c = tbId3.Text

            Dim disc = Math.Pow(b, 2) - 4 * a * c
            If (a <> 0) Then
                If ((disc) < 0) Then
                    lbSoluc1.Text = "Tiene Raices imaginaras"
                Else
                    Dim X1 = (-b + (Math.Sqrt(disc))) / (2 * a)
                    Dim X2 = (-b - (Math.Sqrt(disc))) / (2 * a)
                    lbSoluc1.Text = "Solucion 1 : " + Trim(X1)
                    lbSoluc2.Text = "Solucion 1 : " + Trim(X2)
                End If
            Else
                lbSoluc1.Text = "Coeficiente debe ser diferente a cero"
            End If
            End If
    End Sub
End Class
