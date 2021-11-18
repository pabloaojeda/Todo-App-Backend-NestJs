import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

// http://localhost:3000/api/todos
@Controller('api/todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  //http GET verb
  @Get()
  getAlltodos() {
    // console.log(this.todoService.getAllTodos());
    return this.todoService.getAllTodos();
  }
}