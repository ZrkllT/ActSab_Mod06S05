/*
(id, rut, nombre, apellido, fecha nacimiento, ciudad)
(Id, Nombre, Apellido, Fecha Nacimiento, Ciudad)
*/
export class Persona{
    constructor(id, rut, nombre, apellido, nacimiento, sexo, edad, ciudad){
        this.id = id
        this.rut = rut
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
        this.sexo = sexo
        this.edad = edad
        this.ciudad = ciudad
    }
}

export class Ciudad{
    constructor(nombre){
        this.nombre = nombre
    }
}

export class Sexo{
    constructo(tipo){
        this.tipo = tipo
    }
}


/*
const getChileanCity = () => {

    const cities = ['Arica', 'Iquique', 'Antofagasta', 'Copiapó', 'La Serena', 'Valparaíso', 'Rancagua', 'Talca', 'Concepción', 'Temuco', 'Valdivia', 'Puerto Montt', 'Coyhaique', 'Punta Arenas']

    return cities[Math.floor(Math.random() * cities.length)]

}
*/