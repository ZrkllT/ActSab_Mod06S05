import { faker, fakerES_MX } from '@faker-js/faker'
import { getCheckDigit, format } from 'rut.js'
import moment from 'moment'

import { Persona, Ciudad } from './funciones/funciones.js'


var listPersonas = []
var listCiudades = []
var archivoResultado = './ListadoPersonas.txt'

function genRut(){
    var min = 1_000_000
    var max = 29_999_999

    return genDV((Math.floor(Math.random() * (max - min + 1) + min)).toString())
}
function genDV(rut){
    return rut + getCheckDigit(rut)
}

function generarFaker(){
    var rutGen = genRut()
    var fecha_nacimiento = faker.date.birthdate()
    var fecha_hoy = moment()
    var edadCalc = moment(fecha_hoy).diff(fecha_nacimiento,'years')
    var sexoCalc = faker.person.sex()

    var id = faker.string.uuid()
    var rut = format(rutGen)
    var nombre = faker.person.firstName(sexoCalc)
    var apellido = faker.person.lastName()
    var nacimiento = moment(fecha_nacimiento).format('DD-MM-YYYY')
    var sexo = sexoCalc
    var edad = edadCalc
    var ciudad = fakerES_MX.location.city()

    listPersonas.push( new Persona(id,rut,nombre,apellido,nacimiento,sexo,edad,ciudad) )
}

function listarPersonas(arrayobjpersona){
    arrayobjpersona.forEach((index)=>{

        const { id,rut,nombre,apellido,nacimiento,sexo,edad,ciudad } = index
        let info = `Id: ${id}\n`
        info += `Nombre: ${nombre} ${apellido}\n`
        info += `Rut: ${rut}\n`
        info += `Fecha Nacimiento: ${nacimiento}\n`
        info += `Sexo: ${sexo}\n`
        info += `Edad: ${edad} Años\n`
        info += `Domicilio: ${ciudad}\n`
        info += `==================================\n`
        //fs.writeFileSync(archivoResultado,info,"utf8")

        console.log(info)
    })
}

const personasPorCiudad = (ciudadPersona) =>{
    ciudadPersona.forEach(item =>{
        let ciudad = item.ciudad

        if(!Ciudad[ciudad]){
            Ciudad[ciudad] = 1
        }else{
            Ciudad[ciudad] += 1
        }
    })
    Object.keys(Ciudad).forEach(cityItem =>{
        console.log(`En ${cityItem} viven ${Ciudad[cityItem]} personas`)
    })
}


function personasPorSexo(personas){
}

/* this is alpha */
function crearPersonas(maximo){
    for(let i = 1; i<=maximo; i++){
        generarFaker()
    }
    listarPersonas(listPersonas)
    personasPorCiudad(listPersonas)
}

crearPersonas(20)
//console.log(listCiudades)