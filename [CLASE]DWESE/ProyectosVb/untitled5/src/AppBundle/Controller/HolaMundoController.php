<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HolaMundoController extends Controller
{
    /**
     *@route(path="/",name="portada")
     */
    public function indexAction($name)
    {
        return $this->render('portada.html.twig', array('name' => $name));
    }
}
