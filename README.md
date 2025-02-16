Este prueba esta divida en dos partes la parte del backend esta realizada en Laravel
Pasos a seguir para poder correr el proyecto en laravel.
1. Clonar el repositorio con ambas carpetas juntas ya que no trae ningun problema
2. hacer un cd sino estamos en la carpeta con el proyecto laravel
3. Abir un terminal y hacer cd y la letra TAB para acceder a la carpeta Tienda donde se encuentra el proyecto de laravel.
4. Descargar las dependecias dentro de la carpeta del proyecto Laravel.
5. Primero hacer este comando dentro de la carpeta de laravel composer install
6. Una vez descargada todas las dependencias es importante configurar el documento ".env" con una base de datos para que funcione el servidor.
7. Paso mas detellado de esto porque es importante :  Configurar las variables de entorno
Edita el archivo .env para configurar las variables de entorno, como la conexión a la base de datos. Asegúrate de que los valores de DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, y DB_PASSWORD sean correctos según tu entorno.
8.Una vez configuradas estas variables de entorno tambien es importante hacer el siguiente comando "php artisan key:generate" esto geenera un clave para la aplicacion.
9. Una vez configuradas estas variables de entorno es importante hacer el siguiente comando "php artisan migrate" esto creara las tablas en la base de datos.
10. Por ultimo es importante hacer este ultimo comando "php artisan db:seed" esto nos creara el usuario admin de la aplicacion web el unico admin
11. Credenciales de este admin para el inicio de sesion : email:bot30blaze@gmail.com, password:botblaze30;
12. Por ultimo si todos los pasos fueron correctos realizamos el ultimo comando "php artisan serve" y seguimos la ruta  que se active.

Pasos a seguir para correr el proyecto en React
1.Una vez clonado el repositorio hacemos cd y con la tecla TAB damos dos veces hasta que lleguemos a la carpeta Tienda_react.
2.Una vez en esta carpeta descargamos todas las dependencias hacemos este comando en una terminal una vez estando en la carpeta "npm install" y esto descargara todas las dependencias
3. lista de comandos por si las dependencias no se descargan todas, 'npm install reacr-router-dom', 'npm install bootstrap', 'npm install sweetalert2', 'npm install axios'.
4. Despues de tener todas las dependecias realizamos el siguiente comando "npm start" esto levantara el proyecto seguimos la ruta que nos de.

1.Una vez con ambos proyectos instalados, es importante tener los dos proyectos corriendo al mismo tiempo.
2.Asegúrate de que las rutas de tu API estén configuradas correctamente en React para que apunten al servidor de Laravel. 
Esto generalmente se hace mediante una URL base para las peticiones, como:
'const API_URL = 'http://127.0.0.1:8000/api'; // URL de tu API Laravel' esto modificalo si tienes una ruta distinta para que las peticiones funcionen adecuadamente.

Tecnologias utilizadas para este proyecto :
Laravel: Backend
React: Frontend

Muchas gracias!


