
Imports System.Collections.ObjectModel

Partial Class _Default
    Inherits System.Web.UI.Page

    Private Sub _Default_Load(sender As Object, e As EventArgs) Handles Me.Load
        dirContenido(Dir(My.Computer.FileSystem.GetFiles(@"almacen"))
    End Sub

    Private Function Dir(readOnlyCollection As ReadOnlyCollection(Of String)) As String
        Throw New NotImplementedException()
    End Function

    Private Function dirContenido(ByVal paths As String) As ArrayList
        Dim chorizo As String
        For Each foundFile As String In My.Computer.FileSystem.GetFiles(
            My.Computer.FileSystem.SpecialDirectories.MyDocuments)

            ListBox1.Items.Add(foundFile)
        Next
    End Function


End Class
