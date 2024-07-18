# Proyecto final - M4
## Especialización Backend - Henry Bootcamp

## Objetivo General
Creación de una aplicación Backend que opere bajo el protocolo de Cliente - Servidor brindando los microservicios necesarios para una Aplicación de tipo E - Commerce, entendiendo por éstos, por ejemplo, la gestión del stock de los productos, el procesamiento de transacciones de compra y la realización de las mismas. 

### Descripción general
El desarrollo de la aplicación Backend se realizó sobre la tecnología de [Node JS](https://nodejs.org/en) y principalmente con el Framework de [Nest JS](https://nestjs.com/). Para la gestión de datos se utilizó [PostgreSQL](https://www.postgresql.org/) y como implementación de ORM (Object - Relational Mapping) se utilizó [TypeORM](https://typeorm.io/) por sus ventajas. 

## Uso de la aplicación

### Requisitos previos

- Node JS (versión 14 ó superior)
- npm (versión 6 ó superior)

### Instalación
Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias: 

1 - Clonar el repositorio:

 ```bash
$ git clone https://github.com/pi-rym/PM4BE-EvaristoAguirre
$ cd ecommerce-evaristo-aguirre
```

2- Instala las dependencias del proyecto: 

```bash
$ npm install
```

### Comandos útiles

### Desarrollo

- **Iniciar el servidor en modo desarrollo:**

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
- **Construir el proyecto:**

```bash
$ npm run build
```

### Producción

- **Construir el proyecto para producción:**

```bash
# production mode
$ npm run build
```
- **Iniciar el servidor en modo producción:**

```bash
# production mode
$ npm run start:prod
```

### Migraciones

- **Crear una nueva migración:**

```bash
$ npm run migration:create --name NombreDeLaMigracion
```

- **Generar una nueva migración:**

```bash
$ npm run migration:generate --name NombreDeLaMigracion
```

- **Ejecutar las migraciones pendientes:**

```bash
$ npm run migration:run
```

- **Revertir la última migración ejecutada:**

```bash
$ npm run:migration:revert
```

- **Mostrar el historial de migraciones ejecutadas:**

```bash
$ npm run:migration:show
```
## Configuración

Configurar las variables de entorno necesarias para el funcionamiento del proyecto según la siguiente nómina: 

```env
# Ejemplo de variables de entorno

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=ejemplo_User
DATABASE_PASSWORD=ejemplo_Pass
DATABASE_NAME=ejemplo_Name

CLOUDINARY_CLOUD-NAME = ejemplo_Nube
CLOUDINARY_API_KEY = 11112222333344445555
CLOUDINARY_API_SECRET = ejemplo_Clave

JWT_SECRET= ejemplo_Secreto
```

## Documentación - Open API
Para la generación de la documentación se utilizó una [Open API](https://swagger.io/tools/swagger-ui/), ex Swagger. Permitiendo interactuar con las rutas, los esquemas y ver las respuestas a los distintos tipos de peticiones (GET, PUT, POST y DELETE) respectivamente.

```bash
# documentación de rutas y entidades
http://localhost:3000/api#/
```


## Dependencias utilizadas

- Bcrypt
- Multer
- NestJS CLI
- PDF Make
- Cloudinary
- Class - transformer / class - validator
- Swagger


## Contacto

- Autor - [Evaristo Aguirre](https://github.com/EvaristoAguirre)
- LinkedIn - [/EvaristoAguirre](https://www.linkedin.com/in/evaristo-aguirre/)

## Licencia

[Creative Commons CC](https://es.wikipedia.org/wiki/Licencias_Creative_Commons).
