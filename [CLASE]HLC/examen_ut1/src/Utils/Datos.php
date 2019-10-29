<?php

namespace Utils;

/**
 * Clase que devuelve datos para utilizar en el ejercicio
 */
class Datos
{
    static public function getUsuarios()
    {
        return [
            ['nombre' => 'Juan', 'apellido' => 'Nadie Nadie', 'admin' => false],
            ['nombre' => 'Chuck', 'apellido' => 'Norris', 'admin' => true],
            ['nombre' => 'Filemón', 'apellido' => 'Pi', 'admin' => false],
            ['nombre' => 'Vicente', 'apellido' => 'Ruínez', 'admin' => false],
            ['nombre' => 'Saturnino', 'apellido' => 'Bacterio', 'admin' => false],
            ['nombre' => 'Pepe', 'apellido' => 'Gotera', 'admin' => false]
        ];
    }

    static public function getNumeros()
    {
    	$num = range(1, 40);
    	shuffle($num);
        return $num;
    }
}
