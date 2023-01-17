import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

import {Repository} from 'typeorm' ;
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class TaskService {

  

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
      ) {}
    
     async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
      }
    
      async findOne(id: number): Promise<Task> {
        return await this.taskRepository.findOne({ where: {  id } });
      }
    
      create(task: Task): Promise<Task> {
        
        return this.taskRepository.save(task);
      }
    
       async  updateProduct(
        id: number,
        title: string,
        description: string,
        status: string,
      ) {
        const updatetask = await this.findOne(id);
        if (title) {
            updatetask.title = title;
        }
        if (description) {
            updatetask.description = description;
        }
        if (status) {
            updatetask.status = status;
        }
        
         return  this.taskRepository.save(updatetask);

    }
    
    async deleteProduct(id: number) {
        const result = await this.taskRepository.delete(id);
        
        if ( !result ) {
          throw new NotFoundException('Could not find product.');
        }
      }











}
