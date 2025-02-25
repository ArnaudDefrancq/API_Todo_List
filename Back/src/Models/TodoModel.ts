import { DAO } from "../DAO/DAO";
import { Todo } from "../Types/Todo";

export class TodoModel {
  private todoDao: DAO<Todo>; 

  constructor() {
    this.todoDao = new DAO('todo');
  }
  
  public createTodo(todo: Todo, callback: (error: Error | null, insertId?: number) => void) : void {
    return this.todoDao.create(todo, callback);
  }

  public findTodo(where: string, select: string = "*"): Promise<Todo[]> {
    return  this.todoDao.find(where, select);
  }

  public findById(id: number, select: string = "*"): Promise<Todo[]> {
    return this.todoDao.findById(id, select);
  }

  public updateTodo(id: number, todo: Partial<Todo>, callback: (error: Error | null, affectedRows?: number) => void): void {
    return this.todoDao.update(id, todo, callback)
  }
  
  public deleteTodo(id: number,  callback: (error: Error | null, affectedRows?: number) => void) {
    return this.todoDao.delete(id, callback);
  }
}