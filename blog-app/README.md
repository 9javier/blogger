## USUARIOS DEFAULT 
Estas crendenciales se pueden utilizar para entrar a la app

email: nikejavis@gmail.com
password: 12345678

email: flor@gmail.com
password: 12345678

email: jose@gmail.com
password: 12345678

## BASE DE DATOS
------------- IMPORTANTE ----------
Agregar estas colecciones a una base de datos Mongodb llamada "" blog  "".
blog es el nombre de la BD y no deberia tener usuario ni contraseña para entrar.

# INICIAR API
La api se encuentra Ubicada en a carpeta blog-app.

para correr usar el comando: npm start.

# INICIAR WEB APP
La api se encuentra Ubicada en a carpeta web-blog.

para correr usar el comando: ng serve.


# blog-app

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run clean
npm run build
```

## Fix code style and formatting issues

If `eslint` and `prettier` are enabled for this project, you can use the
following commands to check code style and formatting issues.

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
