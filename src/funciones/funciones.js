/*
(id, rut, nombre, apellido, fecha nacimiento, ciudad)
(Id, Nombre, Apellido, Fecha Nacimiento, Ciudad)
*/
export class Persona{
    constructor(id, rut, nombre, apellido, nacimiento, edad, ciudad){
        this.id = id
        this.rut = rut
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
        this.edad = edad
        this.ciudad = ciudad
    }
}

export class Ciudad{
    constructor(nombre){
        this.nombre = nombre
        this.personas = 0
        this.updTotal = function(i){
            this.personas += Number(i)
        }
    }
}