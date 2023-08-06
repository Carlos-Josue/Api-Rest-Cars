const express = require("express");
const carSchema = require("../models/car");

const router = express.Router();

//Crear Usuario
router.post('/cars', (req, res) => {
    const cars = carSchema(req.body);
    cars
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

// Todos los clientes
router.get('/cars', (req, res) => {
    carSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Buscar Cliente Especifico
router.get('/cars/:id', (req, res) => {
    const { id } = req.params;
    carSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Actualizar Datos Cliente
router.put('/cars/:id', (req, res) => {
    const { id } = req.params;
    const {namecar, modelo, capacidad, marca, disponibilidad} = req.body;
    carSchema
        .updateOne({ _id: id }, { $set: {namecar, modelo, capacidad, marca, disponibilidad} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Eliminar Datos Cliente
router.delete("/cars/:id", (req, res) => {
    const { id } = req.params;
    carSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;