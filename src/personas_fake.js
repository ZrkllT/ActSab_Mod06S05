/*
** 1- Crear repositorio remoto con Readme y gitignore incluido.
** 2- Clonar proyecto en su entorno local.
** 3- intalar la extensión faker. https://fakerjs.dev/guide/
4- Dentro de una función crear un ciclo que genere 10 personas aleatorias utilizando Faker.
    Se debe calcular la edad de cada persona. (Id, Nombre, Apellido, Fecha Nacimiento, Ciudad)
5- Crear una función que muestre cuantas personas viven en cada ciudad.
6- Crear una función que genere un numero aleatorio de 8 digitos y utilizando la dependencia rut.js 
    obtener el dígito verificador. Se debe incluir esta función en la creación de los objetos de 
    personas del requerimiento 4.
*/

import { faker, es, fakerES_MX } from '@faker-js/faker'
import { getCheckDigit, format } from 'rut.js'
import moment from 'moment'

import { Persona, Ciudad } from './funciones/funciones.js'


var listPersonas = []
var listCiudades = []
var archivoResultado = './ListadoPersonas.txt'

function genRut(){
    var min = 1_000_000
    var max = 29_999_999

    return (Math.floor(Math.random() * (max - min + 1) + min)).toString()
}
function genDV(rut){
    var dv = getCheckDigit(rut)
    return dv
}

function generarFaker(){
    var rutGen = genRut() +'-'+ genDV(genRut())
    var fecha_nacimiento = faker.date.birthdate()
    var fecha_hoy = moment()
    var edad = moment(fecha_hoy).diff(fecha_nacimiento,'years')

    var id = faker.string.uuid()
    var rut = format(rutGen)
    var nombre = faker.person.firstName()
    var apellido = faker.person.lastName()
    var nacimiento = moment(fecha_nacimiento).format('DD-MM-YYYY')
    var edad = edad
    var ciudad = fakerES_MX.location.city()

    listPersonas.push( new Persona(id,rut,nombre,apellido,nacimiento,edad,ciudad) )
}

function listarPersonas(arrayobjpersona){
    arrayobjpersona.forEach((index)=>{

        const { id,rut,nombre,apellido,nacimiento,edad,ciudad } = index
        let info = `Id: ${id}\n`
        info += `Nombre: ${nombre} ${apellido}\n`
        info += `Rut: ${rut}\n`
        info += `Fecha Nacimiento: ${nacimiento}\n`
        info += `Edad: ${edad} Años\n`
        info += `Domicilio: ${ciudad}\n`
        info += `==================================\n`
        //fs.writeFileSync(archivoResultado,info,"utf8")

        console.log(info)
    })
}


function personasPorCiudad(personas){
    var nroPersonas = 0
    for(const item of personas){
        var { ciudad } = item
        if(listCiudades.includes(ciudad)){
            nroPersonas += 1
        }else{
            listCiudades.push(ciudad)
        }
    }
}

/* this is alpha */
function crearPersonas(maximo){
    for(let i = 1; i<=maximo; i++){
        generarFaker()
        
    }
    listarPersonas(listPersonas)
    personasPorCiudad(listPersonas)
}

crearPersonas(4)
//console.log(listCiudades)