const fs = require ('fs');

const path = './';
const fileName = 'my-file.txt';
const contentFile = 'Prueba';
const destination = `${path}${fileName}`;

fs.writeFile (destination, contentFile, (err) => {
    if (err) {
        throw err;    
    } else {
        console.log ('Archivo creado con exito! :)');
    }

});

