
Partial Class Dinero
    Inherits System.Web.UI.Page

    Private Sub tbEurDol1_TextChanged(sender As Object, e As EventArgs) Handles tbEurDol1.TextChanged
        Select Case ddlEurDol1.SelectedValue
            Case 0
                tbEurDol2.Text = tbEurDol1.Text * 1.09

            Case 1
                tbEurDol2.Text = tbEurDol1.Text / 1.09

        End Select

    End Sub

    Private Sub ddlEurDol1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles ddlEurDol1.SelectedIndexChanged

    End Sub
End Class
