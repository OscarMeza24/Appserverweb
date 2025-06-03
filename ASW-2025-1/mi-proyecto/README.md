# Mi Proyecto - API de Alertas

Este proyecto es una API REST para la gestión de alertas, desarrollada con Node.js, Express, TypeORM y MongoDB. Permite crear, obtener y eliminar alertas. La arquitectura sigue principios de diseño limpio y separación de responsabilidades.

## Estructura del Proyecto

```
mi-proyecto
├── src
│   ├── application          # Casos de uso y servicios
│   ├── domain               # Lógica central del negocio (entidades, interfaces)
│   ├── infrastructure       # Implementaciones concretas (controladores, repositorios, datasources)
│   └── tests                # Pruebas
├── ormconfig.json           # Configuración de TypeORM para MongoDB
├── docker-compose.yml       # Configuración de Docker para MongoDB y la app
├── package.json             # Configuración de npm
└── README.md                # Este archivo
```

## Endpoints principales

- **GET /alertas**: Obtiene todas las alertas.
- **POST /alertas**: Crea una nueva alerta.
- **GET /alertas/:id**: Obtiene una alerta por su ID.
- **DELETE /alertas/:id**: Elimina una alerta por su ID.

## Ejemplo de entidad Alerta

```typescript
@Entity()
export class Alerta {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  mensaje!: string;

  @Column()
  fecha!: Date;

  @Column({ default: false })
  atendida!: boolean;
}
```

## Configuración y ejecución

1. Instala las dependencias:

   ```
   npm install
   ```

2. Asegúrate de tener MongoDB corriendo (puedes usar Docker):

   ```sh
   docker-compose up -d
   ```

3. Compila el proyecto:

   ```
   npm run build
   ```

4. Inicia el servidor:

   ```
   npm start
   ```

5. Prueba la API en [http://localhost:3000/alertas](http://localhost:3000/alertas)

## Pruebas rápidas con curl

- **Crear una alerta:**

  ```sh
  curl -X POST http://localhost:3000/alertas -H "Content-Type: application/json" -d "{\"mensaje\":\"¡Alerta de prueba!\",\"fecha\":\"2025-06-02T20:00:00.000Z\",\"atendida\":false}"
  ```

- **Obtener todas las alertas:**
  ```sh
  curl http://localhost:3000/alertas
  ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
