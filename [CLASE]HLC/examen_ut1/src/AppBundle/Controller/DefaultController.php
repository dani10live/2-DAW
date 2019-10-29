<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Utils\Datos;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="saludo")
     */

    public function saludoAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('saludo.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/usuarios/listar", name="listado")
     */

    public function listaUsuarios()
    {
        $usuarios = Datos::getUsuarios();
        return $this->render('saludo.html.twig', [
            'usr' => $usuarios

        ]);
    }
}

