const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Crear Usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

// Todos los clientes
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Buscar Cliente Especifico
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Actualizar Datos Cliente
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email, city} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, age, email, city} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Eliminar Datos Cliente
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;