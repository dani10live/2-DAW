
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles bt1.Click
        lb1.Text = RepiteNumero(Tb1.Text)
    End Sub
    Function RepiteNumero(ByVal teclado As String) As Boolean

        Dim sw = False

        For i As Integer = 0 To teclado.Length - 1
            For j As Integer = 1 To teclado.Length - 1
                If i <> j Then
                    If teclado(j) = teclado(i) Then
                        sw = True
                    End If
                End If
            Next
        Next
        Return sw
    End Function
End Class
