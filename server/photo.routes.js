const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();

router.get('/get', (req, res) =>{
  const getFiles = fs.readdir('/archivos', (err, data) => {
    if(err) {
      console.error("Error en la carpeta:", err);
      return
    }

    return `Los archivos de la carpeta son ${data}`
  });

  console.log(getFiles)

  res.json({ data: getFiles })
});

router.post('/upload', (req, res) => {
  const rename = req.files[0];
  console.log(rename)
  res.send('archivo subido')
})

module.exports = router