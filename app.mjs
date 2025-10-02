//const mongoose = require
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Grupo-08:grupo08@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=>console.log("Conexión exitosa a MongoDB"))
.catch(error => console.error(`Error al conectar a MongoDB: ${error}`));

//Esquema superheroes
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type: Date, default: Date.now},
    creador: String
},{collection: 'Grupo-08'});

//Implementación del esquema en un modelo
const SuperHero = mongoose.model('SuperHero', superheroSchema);
//El modelo permite realizar operaciones sobre los datos

const insertSuperHero = async ()=>{
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Martin'
    });
    await hero.save();
    console.log('Superhéroe insertado: ', hero);
} 

insertSuperHero();

//Función que actualiza superheroe por nombre
const updateSuperHero = async (nombreSuperHeroe)=>{
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe},
        {$set: {edad: 26}}
    ); //actualiza la edad a 26
    console.log("Resultado de la actualización: ", result);
}

//updateSuperHero('Spiderman');

//Función que elimina superheroe de la colección por nombre
const deleteSuperHero = async (nombreSuperHeroe)=>{
    const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
    console.log("Supehéroe eliminado: ", result);
}

//deleteSuperHero('Spiderman');

/*Función para buscar todos los superhéroes cuyo planeta de origen
sea la "Tierra" */
const findSuperHeroes = async () => {
    const heroes = await SuperHero.find({planetaOrigen: 'Tierra'});
    console.log('Superhéroes encontrados: ', heroes);
}

findSuperHeroes();