import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		complTodos: []
	},
	reducers: {
		addTodo(state, action){
			state.todos.push({
        title: action.payload.title,
        desc: action.payload.desc,
        sel: action.payload.sel,
				date: action.payload.date,
        id: new Date().toISOString(),
      })
		},
		removeTodo(state, action){
			state.todos = state.todos.filter((el) => el.id !== action.payload.id)
		},
		addCompletedTodo(state, action){
			state.complTodos.push({
        title: action.payload.title,
        priority: action.payload.priority,
				id: action.payload.id,
      })
		},
	},
})

export const {addTodo, removeTodo, addCompletedTodo} = todoSlice.actions;

export default todoSlice.reducer;