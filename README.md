# Serverless, AwS, NestJS, Swagger y Mysql.

## 1. Descripción
Este proyecto esta creado con el framework NestJS hace uso de la API swapi https://swapi.py4e.com/ y esta conectado a una Base de datos MYSQL  <br/>

## 2. Tecnologias
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [AWS RDS](https://aws.amazon.com/rds/)
- [Serverless](https://www.serverless.com/)
- [NestJS](https://nestjs.com/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/) 
## 3. Uso

### Configurar el repositorio
Primero, clonar el repositorio:
```
$ git clone https://github.com/Babel78/nestjs-serverless.git
```

Instalar dependencias:
```
$ npm install
```

Crear archivo .env:
```
$ cp .env.example .env
```

Modificar las variables del archivo `.env` con su configuración.

```
TYPEORM_CONNECTION = <YOUR CONNECTION>
TYPEORM_HOST = <DB HOST>
TYPEORM_PORT = <DB PORT>
TYPEORM_USERNAME = <DB USER>
TYPEORM_PASSWORD = <DB PASSWORD>
TYPEORM_DATABASE = <DB NAME>
```

### Uso de MYSQL Local con Docker

Para levantar la base de datos con Docker necesitamos tener instalado Docker y Docker-compose y ejecutaremos lo siguiente

```
$ docker-compose up -d
```

### Configurar AWS Credentials
Instalar serverless:
```
$ npm install -g serverless
```

Configurar aws profile
```
$ serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_ACCESS_KEY --profile nest-test
```

### Deploy
Compilar el proyecto:
```
$ npm run build
```

Despues del deploy, podemos verificar si el servicio esta OK o no con el comando:
```
$ sls offline start
```

##### Deploy a aws lambda. 

```
$ sls deploy
```