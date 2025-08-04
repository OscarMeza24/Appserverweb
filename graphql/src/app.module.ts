import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProductosModule } from './productos/productos.module';
import { EnviosModule } from './envios/envios.module';
import { MetodosPagosModule } from './metodos_pagos/metodos_pagos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [
        UsuariosModule,
        ProductosModule,
        EnviosModule,
        MetodosPagosModule,
      ],
    }),
    UsuariosModule,
    ProductosModule,
    EnviosModule,
    MetodosPagosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
