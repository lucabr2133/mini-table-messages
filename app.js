import express from 'express'


const port = process.env.PORT || 3000;


import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { routerIndex } from './routes/index.js';
import { routerForm } from './routes/form.js';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
// Configurar la carpeta 'views' y el motor de plantillas EJS
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, 'public')));
app.use('/',routerIndex)
app.use('/new',routerForm)
app.listen(port,()=>{
    console.log('app listening in port '+port);
    
})