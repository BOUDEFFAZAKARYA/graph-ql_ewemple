import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
  
  ],
  controllers: [],
  providers: [TaskService , TaskResolver]
})
export class TaskModule {}
