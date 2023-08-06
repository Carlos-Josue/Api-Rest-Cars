const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/clientes")
const carRoutes = require("./routes/cars")


const app = express();
const port = process.env.PORT || 9000;

//middlewars
app.use(express.json());
app.use('/api',userRoutes);

app.use(express.json());
app.use('/api',carRoutes);


//routes
app.get("/", (req,res) => {
    res.send("Bienvenido a ACARENTCAR");
});

//mongodb connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MONGODB"))
    .catch((error) => console.error(error));


app.listen(port,() => console.log('server listening on port', port));
