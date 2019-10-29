using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Bt1_Click(object sender, EventArgs e)
    {
        char c = Tb2.Text[0];
        if (Okey(Tb1.Text, c ))
        {
            Lb3.Text = "Es Correcto";
        }
        else
        {
            Lb3.Text = "Es Incorrecto";
        }
    }
    bool Okey(string n, char L)
    {

        string todas = "TRWAGMYFPDXBNJZSQVHLCKE";

        bool ok = false;

        try

        {

            if (todas[int.Parse(n) % 23] == char.ToUpper(L)) ok = true;

        }

        catch { }

        return ok;
    }
}