import { Request, Response, NextFunction } from "express";
import { TodoModel } from "../Models/TodoModel";
import { Todo } from "../Types/Todo";
import { Tools } from "../Tools/Tools";


export class TodoController {

    static async createTodo(req: Request, res: Response, next: NextFunction) : Promise<number | any> {
        try {
            const todoModel : TodoModel = new TodoModel();

            const newTodo: Todo = {
                title: req.body.title,
                content: req.body.content,
                is_validate: false,
                created_at : Tools.getDateTimestamp()
            };

            todoModel.createTodo(newTodo, (error, insertId) => {
                if (error) {
                    return res.status(400).json({error: "Problème lors de la création du todo"});
                } else {
                    res.status(201).json({message: `Todo créé`, insertId})
                    return insertId;
                };
            });

        } catch (err) {
            return res.status(500).json(err);
        };
    };

    static async getAllTodo(req: Request, res: Response, next: NextFunction) : Promise<Array<Todo> | any> {
        try {
            const todoModel: TodoModel = new TodoModel();

            const arrayTodo: Array<Todo> = await todoModel.findTodo("");

            res.status(200).json(arrayTodo);
            return arrayTodo;
        } catch (err) {
            return res.status(500).json(err);
        };
    };

    static async getOneTodo(req: Request, res: Response, next: NextFunction): Promise<Array<Todo> | any> {
        try {
            const idTodo: number = Number(req.params.id);
            if (isNaN(idTodo)) {
                return res.status(400).json({error: "Pas d'id dans le params"});
            };

            const todoModel: TodoModel = new TodoModel();

            const arrayTodo: Array<Todo> = await todoModel.findById(idTodo);

            if (arrayTodo.length == 0) {
                return res.status(400).json({error: "Pas d'élément trouvé"})
            }
            
            res.status(200).json(arrayTodo);
            return arrayTodo;
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async updateTodo(req: Request, res: Response, next: NextFunction) : Promise<number | any> {
        try {
            const idTodo: number = Number(req.params.id);
            if (isNaN(idTodo)) {
                return res.status(400).json({error: "Pas d'id dans le params"});
            };

            const todoModel: TodoModel = new TodoModel();

            const arrayTodo: Array<Todo> = await todoModel.findById(idTodo);
            if (arrayTodo.length == 0) {
                return res.status(400).json({error: "Pas d'élément trouvé"})
            }

            const todo: Todo = arrayTodo[0];

            const updateTodo: Todo = {
                title: req.body.title ? req.body.title : todo.title,
                content: req.body.content ?  req.body.content : todo.content,
                is_validate: req.body.is_validate ? req.body.is_validate : todo.is_validate,
                created_at : todo.created_at
            }

            todoModel.updateTodo(idTodo, updateTodo, (error, affectedRow) => {
                if (error) {
                    return res.status(400).json({error: "Problème lors de la modification du todo"});
                } else {
                    res.status(200).json({message: "Todo modififé", affectedRow});
                    return todo.id_todo;
                }
            })

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async deleteTodo(req: Request, res: Response, next: NextFunction) : Promise<number | any> {
        try {
            const idTodo: number = Number(req.params.id);
            if (isNaN(idTodo)) {
                return res.status(400).json({error: "Pas d'id dans le params"});
            };

            const todoModel: TodoModel = new TodoModel();

            const arrayTodo: Array<Todo> = await todoModel.findById(idTodo);
            if (arrayTodo.length == 0) {
                return res.status(400).json({error: "Pas d'élément trouvé"})
            }

            const todo: Todo = arrayTodo[0];

            todoModel.deleteTodo(idTodo, (error, affectedRow) => {
                if (error) {
                    return res.status(400).json({error: "Problème lors de la suppression du todo"});
                } else {
                    res.status(200).json({message: "Todo supprimé", affectedRow});
                    return todo.id_todo;
                }
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}