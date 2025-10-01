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

/*const insertSuperHero = ()=>{
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen
    })
} */