<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descripción

Este proyecto es una práctica desarrollada con el framework [NestJS](https://nestjs.com/) usando TypeScript. El objetivo principal es construir una aplicación backend eficiente y escalable, aplicando conceptos como controladores, servicios, módulos, WebSockets y pruebas unitarias.

## Estructura del proyecto

- **src/**: Código fuente principal.
  - **asignaciones/**: Módulo para gestión de asignaciones, incluye gateway para WebSocket.
  - **auth/**: Módulo de autenticación (si aplica).
  - **app.module.ts**: Módulo raíz de la aplicación.
  - **main.ts**: Punto de entrada de la aplicación.
- **test/**: Pruebas unitarias y de integración.

## Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

```bash
npm install
```

## Ejecución del proyecto

```bash
# Modo desarrollo
npm run start

# Modo watch (reinicio automático)
npm run start:dev

# Modo producción
npm run start:prod
```

## Pruebas

```bash
# Pruebas unitarias
npm run test

# Pruebas end-to-end
npm run test:e2e

# Cobertura de pruebas
npm run test:cov
```

## Uso de WebSocket

La práctica incluye un gateway WebSocket para comunicación en tiempo real. Puedes conectarte usando un cliente compatible con Socket.IO y enviar el token de autenticación en los headers.

Ejemplo de conexión desde el frontend:

```javascript
const socket = io("http://localhost:3000", {
  extraHeaders: {
    authorization: "Bearer TU_TOKEN",
  },
});
```

## Despliegue

Consulta la [documentación oficial de NestJS sobre despliegue](https://docs.nestjs.com/deployment) para mejores prácticas.

## Recursos útiles

- [Documentación oficial NestJS](https://docs.nestjs.com)
- [Canal de Discord NestJS](https://discord.gg/G7Qnnhy)
- [Cursos oficiales NestJS](https://courses.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)

## Autor

- Kamil Myśliwiec ([Twitter](https://twitter.com/kammysliwiec))
