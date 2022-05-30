# Almond-Web-Project

![screenShot01](https://user-images.githubusercontent.com/90857683/171048609-49fa3fc8-0e3b-4087-81d4-761b14b6d16d.png)

Proyecto personal para Coding Dojo. 
Página e-commerce sobre aceites naturales y cosmética natural se utilizó React, Redux, CSS, HTML, MongoDB, MongoAtlas, Express, Nodejs.

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
