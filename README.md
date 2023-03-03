# M3S18_Apis con expressC4

# Que es Express?

Express.js es un popular marco de aplicaciones web de código abierto para Node.js, que proporciona una serie de funciones para el desarrollo rápido de aplicaciones web y API.

Algunas de las características y funcionalidades más destacadas de Express.js son las siguientes:

Enrutamiento: Express.js proporciona un sistema de enrutamiento flexible y fácil de usar que permite definir rutas para diferentes solicitudes HTTP, como GET, POST, PUT, DELETE, etc.

Middleware: El middleware en Express.js son funciones que se ejecutan antes o después de que una solicitud llegue a su controlador. Esto puede ser utilizado para realizar diversas tareas como autenticación, validación, manipulación de solicitudes, etc.

Renderización de vistas: Express.js facilita la renderización de vistas HTML, permitiendo la generación dinámica de contenido en el lado del servidor.

Manejo de errores: Express.js proporciona un manejo de errores integrado que permite capturar errores y responder de manera adecuada a los usuarios.

Integración de bases de datos: Express.js es compatible con una amplia gama de bases de datos, como MongoDB, MySQL, PostgreSQL, etc.

Escalabilidad: Express.js es altamente escalable y se puede utilizar para construir aplicaciones web de cualquier tamaño y complejidad.

En resumen, Express.js es un marco de aplicaciones web versátil y robusto que se utiliza ampliamente para construir aplicaciones web y API escalables y eficientes en Node.js.



# Metodos de express

express() - Este método es utilizado para crear una nueva instancia de aplicación Express.

app.get() - Este método es utilizado para manejar solicitudes HTTP GET para una ruta específica.

app.post() - Este método es utilizado para manejar solicitudes HTTP POST para una ruta específica.

app.put() - Este método es utilizado para manejar solicitudes HTTP PUT para una ruta específica.

app.delete() - Este método es utilizado para manejar solicitudes HTTP DELETE para una ruta específica.

app.use() - Este método es utilizado para agregar middleware a la aplicación Express.

app.set() - Este método es utilizado para establecer variables de configuración de la aplicación Express.

app.listen() - Este método es utilizado para iniciar el servidor de la aplicación Express.

res.send() - Este método es utilizado para enviar una respuesta HTTP al cliente.

res.json() - Este método es utilizado para enviar una respuesta HTTP en formato JSON al cliente.

res.render() - Este método es utilizado para renderizar una plantilla de vista y enviar una respuesta HTTP al cliente.

req.params - Este objeto contiene los parámetros de ruta en una solicitud HTTP.

req.query - Este objeto contiene los parámetros de consulta en una solicitud HTTP.

req.body - Este objeto contiene los datos enviados en una solicitud HTTP POST o PUT.

Estos son solo algunos de los métodos de Express.js más comunes. La documentación oficial de Express.js proporciona información detallada sobre todos los métodos y su uso.

# Como instanciar y levantar un servidor con express?

Para levantar un servidor con Express.js, sigue estos pasos:

1)Abre una terminal en tu computadora y crea un nuevo directorio para tu proyecto.

2)En el directorio de tu proyecto, inicializa un nuevo proyecto Node.js ejecutando el siguiente comando:

npm init

3)Sigue las instrucciones en pantalla para configurar tu proyecto. Cuando se te pregunte por el archivo de entrada de la aplicación, ingresa "index.js".

4)Una vez que hayas configurado tu proyecto, instala Express.js ejecutando el siguiente comando en la terminal:
npm install express

5)Crea un archivo index.js en el directorio de tu proyecto y escribe el siguiente código para configurar un servidor Express básico:
  const express = require('express')
  const app = express()

  app.get('/', (req, res) => {
    res.send('¡Hola, mundo!')
  })

  app.listen(3000, () => {
    console.log('Servidor Express en ejecución en el puerto 3000')
  })
  
  Este código crea una nueva instancia de aplicación Express, define una ruta para manejar solicitudes HTTP GET a la raíz del sitio (/), y luego inicia el servidor Express en el puerto 3000.
  
6) Para iniciar el servidor Express, ejecuta el siguiente comando en la terminal:
      node index.js
      
7) Abre un navegador web y navega a http://localhost:3000. Deberías ver el mensaje "¡Hola, mundo!" que definiste en la ruta raíz.
  
# Que hicimos en esta clase?

1. Creamos un sevidor con express con el formato de una API REST (CRUD) => GET, POST, PUT, DELETE
2. Profundizamos en headers
3. Profundizamos la libreria uuid
4. Deploy en Railway
5. Uso de Postman y sus funciones
6. Profundizamos en nuestro espacio de trabajo en express y usos de directorios importantes(ROUTES Y CONTROLLERS)
7. Logramos aprender que son laS VARIABLES DE ENTORNO y como integrarlas en nuestro servidor.

