# GraphQL API para Sistema de Productos

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[![NestJS Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/package/@nestjs/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)](https://www.typescriptlang.org/)

## Descripción

API GraphQL construida con NestJS para la gestión de productos, envíos y métodos de pago. Esta aplicación utiliza archivos JSON como almacenamiento de datos, lo que la hace ideal para entornos de desarrollo y pruebas.

## Características

- **Productos**: Gestión completa de productos con sus categorías, colores y stock
- **Envíos**: Gestión de direcciones de envío
- **Métodos de Pago**: Gestión de diferentes métodos de pago disponibles
- **Persistencia**: Almacenamiento de datos en archivos JSON
- **Validación**: Validación de datos de entrada
- **Tipado Estricto**: Código TypeScript con tipado fuerte

## Estructura del Proyecto

```
src/
├── app.module.ts          # Módulo principal de la aplicación
├── productos/            # Módulo de productos
│   ├── dto/              # Objetos de transferencia de datos
│   ├── entities/         # Entidades de TypeORM
│   ├── productos.module.ts
│   ├── productos.resolver.ts
│   ├── productos.service.ts
│   └── data/             # Datos de productos (JSON)
├── envios/               # Módulo de envíos
│   └── ...
└── metodos_pagos/        # Módulo de métodos de pago
    └── ...
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```
4. Abrir el Playground de GraphQL en: http://localhost:3000/graphql

## Uso

### Productos

#### Consultas (Queries)

```graphql
# Obtener todos los productos
query {
  productos {
    id
    Categoria
    Color
    Texto
    Imagen
    Precio
    Stock
  }
}

# Obtener un producto por ID
query {
  producto(id: 1) {
    id
    Categoria
    Color
    Texto
  }
}
```

#### Mutaciones

```graphql
# Crear un nuevo producto
mutation {
  createProducto(
    createProductoInput: {
      Categoria: "Electrónica"
      Color: "Negro"
      Texto: "Nuevo producto"
      Imagen: "imagen.jpg"
      Precio: 999.99
      Stock: 10
    }
  ) {
    id
    Categoria
    Texto
  }
}

# Actualizar un producto
mutation {
  updateProducto(
    updateProductoInput: {
      id: 1
      Texto: "Producto actualizado"
      Precio: 899.99
    }
  ) {
    id
    Texto
    Precio
  }
}

# Eliminar un producto
mutation {
  removeProducto(id: 1) {
    id
    Texto
  }
}
```

## Estructura de Datos

### Producto
```typescript
{
  id: number;
  Categoria: string;
  Color: string;
  Texto: string;
  Imagen: string;
  Precio: number;
  Stock: number;
}
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
NODE_ENV=development
```

## Scripts Disponibles

- `npm run start`: Inicia la aplicación en producción
- `npm run start:dev`: Inicia la aplicación en modo desarrollo con recarga en caliente
- `npm run build`: Compila el proyecto TypeScript a JavaScript
- `npm run test`: Ejecuta las pruebas unitarias
- `npm run test:e2e`: Ejecuta las pruebas de extremo a extremo
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código con Prettier

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
