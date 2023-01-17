import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(returns => [Task])
  async tasks() {
    return await this.taskService.findAll();
  }

  @Query(returns => Task)
  async task(@Args('id') id: number) {
    return await this.taskService.findOne(id);
  }



}
