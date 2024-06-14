import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
	name: 'date',
	initialState: {
		dates: [],
		dateTasks: [],
	},
	reducers: {
		addDate(state, action){
			state.dates.push(action.payload.date);
			state.dateTasks.push({
				date: action.payload.date,
				task: {
					title: action.payload.title,
					desc: action.payload.desc,
				}
			})
		},
		removeDate(state, action){
			state.dates = state.dates.filter(date => date !== action.payload.date);
			state.dateTasks = state.dateTasks.filter(task => task.title !== action.payload.title);
		},
	}
})

export const {addDate, removeDate} = dateSlice.actions;

export default dateSlice.reducer;