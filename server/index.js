const express = require('express');
const fileUpload = require('express-fileupload');
const photoRouters = require('./photo.routes');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './archivos'
}))

app.use("/", express.static(path.join(__dirname, '\\archivos')))

// console.log(__dirname + '\\archivos')

app.use(photoRouters)

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));