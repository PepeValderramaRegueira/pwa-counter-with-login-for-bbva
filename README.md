# PWA con contador de acceso desde la última vez

Se quiere crear una app móvil web progresiva que permita logarse con distintos
usuarios y muestre un contador con el tiempo que ha pasado desde el último acceso
del usuario a la web.

## Tecnologías utilizadas

### Cliente (React)

Todo el front se ha construido con React haciendo uso de componentes funcionales,
Redux para el manejo del estado de la aplicación, SASS para los estilos, Storybook
para la documentación de los componentes y Enzyme para testear los componentes.

### Servidor (Node, Express y MongoDB)

El servidor se ha construido con Node y Express, y para almacenar los datos he
decidido utilizar una base de datos no relacional (MongoDB).

## Puesta a punto de la aplicación

### Cliente

Para poner en marcha el front, basta con acceder a la carpeta 'client' con la
terminal y ejecutar el comando ``` yarn install ``` o ``` npm install ```. Para
este caso en concreto del front, he decidido no añadir el .env al .gitignore porque
únicamente tiene una variable de entorno que indica la url del servidor, y no es
información importante, por lo que no es necesario hacer ninguna configuración. He
de decir que para una aplicación que fuese a subir a producción, sí que añadiría el
.env al .gitignore.

### Servidor

Para poner el servidor a la escucha, solamente hay que acceder a la carpeta 'server'
y ejecutar ``` npm install ```. Adicionalmente, aquí sí que añadí el .env al .gitignore,
porque contiene información sensible de datos de usuario y contraseña.

Para que la app se ejecute correctamente, es necesario crear el archivo .env en la raíz
de la carpeta 'server' y añadirle la siguiente configuración:
```
PORT=3000
DB=<la_adjunto_por_mail>
```

Para tardar menos en ejecutar la aplicación (en cuanto a puesta a punto se refiere)
recomiendo dejar el puerto 3000 para la escucha del servidor, pues el cliente React
está configurado para apuntar al servidor por ese puerto. Dicho esto, si se deja la
configuración con el puerto 3000, se debe lanzar primero el servidor y después el
cliente, para que cuando se levante el cliente detecte que el puerto 3000 está en uso
y nos pregunte si queremos levantar la app en el puerto 3001.

### Base de datos

Para la base de datos no es necesario hacer ninguna configuración, puesto que está
alojada en Atlas y está en la nube. Únicamente hay que añadir al .env del servidor
la variable de entorno DB, cuyo valor adjunto por correo.

## Cómo ejecutar la aplicación e instalarla

Aquí es importante destacar que únicamente va a funcionar si se instala en el PC que
contiene el proyecto, dado que es donde se encuentra el servidor. Se podría instalar
en el móvil y se instalaría sin problema, pero cuando se hiciese el login daría error
porque no encontraría el servidor.

Para poder ejecutar la aplicación en modo producción e instalarla, hay que acceder a
la carpeta del cliente y ejecutar el comando ``` yarn run build ``` o ``` npm run build ```.
Una vez que se cree el bundle (aparecerá una carpeta llamada build en la carpeta
client) tenemos que servir dicha carpeta. Una vez se cree, podemos ejecutar el comando
``` yarn run serve ``` o ``` npm run serve ``` para levantar la app. Nos mostrará un
mensaje en la terminal indicándonos la URL a la que podemos acceder para visualizarla
y cuando accedamos a ella, tendremos la opción de instalarla.

### Usuarios con los que se puede acceder

- rocket@gotg.com pass: Passw0rd!
- test1@mail.com pass: UserTest1
- test2@mail.com pass: UserTest2

## Consideraciones del proyecto

- No me ha dado tiempo a realizar todos los tests que tenía pensado. Únicamente
  contiene tests el componente Button.
- Gran parte de los componentes están añadidos al Storybook, aunque hay algunos que
  no me ha dado tiempo a añadirlos, aunque son componentes que son fáciles de usar y
  que no requieren de ninguna prop en concreto que no se entienda a simple vista.
- No he podido desplegar ni el cliente ni el servidor en algún hosting gratuito,
  únicamente he podido subir a la nube la base de datos.
- No me ha dado tiempo a crear un componente para mostrar y manejar los errores.
- No he podido añadir un servicio de autenticación más seguro (quería haber usado
  una autenticación basade en JWT).
