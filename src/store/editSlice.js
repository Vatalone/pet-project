import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
	name: 'edits',
	initialState:{
		nameState: 'Username',
		specifState: 'Some specific about you',
	},
	reducers:{
		editName(state, action){
			state.nameState = action.payload.value;
		},
		editSpecific(state, action){
			state.specifState = action.payload.value;
		},
		resetName(state, action){
			state.nameState = 'Username';
		},
		resetSpecific(state, action){
			state.specifState = 'Some specific about you';
		}
	}
})

export const {editName, editSpecific, resetName, resetSpecific} = editSlice.actions;

export default editSlice.reducer;