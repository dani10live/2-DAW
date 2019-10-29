﻿Imports System.Numerics

Public Class Ec2g

    Private va, vb, vc, vD As Double
    Public Sub New(ByVal a As Double, Optional ByVal b As Double = 0, Optional ByVal c As Double = 0)
        If a = 0 Then
            Throw New System.Exception("¡No es una ecuación de segundo grado!")
        Else
            va = a
            vb = b
            vc = c
            vD = Math.Pow(vb, 2) - (4 * va * vc)
        End If
    End Sub

    Public ReadOnly Property A As Double
        Get
            Return va
        End Get
    End Property

    Public ReadOnly Property B As Double
        Get
            Return vb
        End Get
    End Property

    Public ReadOnly Property C As Double
        Get
            Return vc
        End Get
    End Property

    Public ReadOnly Property D As Double
        Get
            Return vD
        End Get
    End Property

    Private Function T1() As Double
        Return -vb / (2 * va)
    End Function

    Private Function T2() As Double
        Return Math.Sqrt(Math.Abs(D)) / (2 * va)
    End Function

    Public Function x0() As Complex ' Primera solución.
        If D >= 0 Then
            Return New Complex(T1() + T2(), 0) ' Sin parte imaginaria.
        Else
            Return New Complex(T1(), T2())
        End If
    End Function

    Public Function X1() As Complex ' Segunda solución.
        If D >= 0 Then
            Return New Complex(T1() - T2(), 0)
        Else
            Return New Complex(T1(), -T2())
        End If
    End Function

    Public Shared Function Imprimir(ByVal z As Complex) As String
        Dim r = z.Real
        Dim i = z.Imaginary
        Return System.String.Format("{0} {1} {2}{3}", IIf(r = 0 And i <> 0, "", r), IIf(i = 0, "", IIf(i > 0, IIf(r = 0, "", "+"), "-")), IIf(Math.Abs(i) = 1 Or i = 0, "", Math.Abs(i)), IIf(i = 0, "", "i"))
    End Function

End Class

