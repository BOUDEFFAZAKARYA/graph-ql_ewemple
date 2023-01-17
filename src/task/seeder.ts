import {seeder} from "nestjs-seeder";
import {TypeOrmModule} from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { TaskSeeder } from "./task.seeder";


seeder({
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
        TypeOrmModule.forFeature([Task])
    ]
}).run([TaskSeeder])