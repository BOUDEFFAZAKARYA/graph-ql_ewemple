import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('api/task')
export class TaskController {


    
    constructor(private taskservice: TaskService) {
    }


    @Get('all')
    async frontend() {
        return  this.taskservice.findAll();
    }


    @Post('create')
 
  async createProduct( @Body() Task: Task) {


    console.log(Task);




    

    

    return this.taskservice.create(Task);
  }




}
