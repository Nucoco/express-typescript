import  {RequestHandler} from 'express';

import {Todo} from '../models//todo'

const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as {text: string}).text
	const newTodo = new Todo(Math.random().toString(), text)

	TODOS.push(newTodo)

	res.status(201).json({message: "Created a new TODO", createdTodo: newTodo})

}

export const getTodos: RequestHandler = (req, res, next) => {
	res.json({todos: TODOS})
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
	const todoId = req.params.id
	const updateText = (req.body as {text: string}).text

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

	if(todoIndex < 0){
		throw new Error("Not found the todo")
	}

	TODOS[todoIndex] = new Todo(todoId, updateText)

	res.json({message: "Successfully updated.", updatedTodo: TODOS[todoIndex]})
}

export const deleteTodo: RequestHandler = (req, res, next) => {
	const todoId = req.params.id

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

	if(todoIndex < 0){
		throw new Error("Not found the todo")
	}

	TODOS.splice(todoIndex, 1)

	res.json({message: "Successfully deleted!!"})
}