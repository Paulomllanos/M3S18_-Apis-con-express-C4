const express = require('express');
const productRouter = require('./Routes/ProductRoute')
// importar variables de entorno
require('dotenv').config();


const app = express();



//* es para que mi servidor entienda json
app.use(express.json());
app.use('/api', productRouter);

app.listen(process.env.PORT, () => console.log(`Conectando en puerto: ${process.env.PORT}`));