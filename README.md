# Almond-Web-Project
Proyecto personal para Coding Dojo. 

Página e-commerce sobre aceites naturales y cosmética natural. Se utilizó React, Redux, React Boostrap, CSS, HTML, MongoDB, MongoAtlas, Express, Nodejs.

Imagen 1:
![screenShot01](https://user-images.githubusercontent.com/90857683/171048609-49fa3fc8-0e3b-4087-81d4-761b14b6d16d.png)

Imagen 2:
![screenShot02](https://user-images.githubusercontent.com/90857683/171049343-7f640aad-3be4-4e05-9c22-382513c66c0f.png)

## Pequeño bug que no he podido solucionar aún
Cuando inicias sesión deberia redirigir al home page pero no lo hace, deberás hacerlo manual con f5 y también cuando te registras deberás hacer lo mismo e ir a la página principal dandole al logo.

![screenShot03](https://user-images.githubusercontent.com/90857683/171049825-8e26d405-98d6-4e11-8be6-e998b7b7ff13.png)

## Como correr?

-   [ ]  En la base del proyecto crea un archivo .env con los siguiente:

```
NODE_ENV = development
PORT = 8000
MONGO_URI = (Link de la db que debes crear en MongoAtlas)
JWT_SECRET = abc123
PAYPAL_CLIENT_ID = (ID que se consigue en el sandbox de PayPal => https://developer.paypal.com/home)

```
-   [ ]  En la carpeta base correspondiente al servidor corre:

```
npm i 
```

-   [ ] Luego ingresa a la carpeta cliente y corre
```
npm i
```

-   [ ] Iniciar el servidor con

```
nodemon server.js
```

-   [ ]  Iniciar el cliente desde su carpeta
```
npm run start 
``` 
