import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {TypeOrmModule} from "@nestjs/typeorm";
import { join } from 'path';
import { TaskController } from './task/task.controller';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';



@Module({
  imports: [ 
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'graphQLexemple',
        entities: [Task],
        synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,

    }),
    TaskModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
