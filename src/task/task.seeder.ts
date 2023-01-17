import {DataFactory, Seeder} from "nestjs-seeder";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Task } from "./task.entity";

export class TaskSeeder implements Seeder {
    constructor(
        @InjectRepository(Task) private readonly productRepository: Repository<Task>
    ) {
    }

    drop(): Promise<any> {
        return this.productRepository.delete({});
    }

    seed(): Promise<any> {
        const products = DataFactory.createForClass(Task).generate(50);

        return this.productRepository.insert(products);
    }

}