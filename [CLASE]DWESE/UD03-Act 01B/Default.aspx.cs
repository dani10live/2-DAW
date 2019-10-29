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
        Lb1.Text = calculoRepetidos(Tb1.Text);
    }

    public String calculoRepetidos(string teclado)
    {
        String sw = "False";
        int i,j;

        for(i = 0; i <= teclado.Length -1 ; i++)
        {
            for (j = 1; j <= teclado.Length - 1; j++)
            {
                if( j != i )
                {
                    if (teclado[j] == teclado[i])
                    {
                        sw = "True";
                    } 
                }
            }
        }
        return sw;
    }

}