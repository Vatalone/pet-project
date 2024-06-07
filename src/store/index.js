import {configureStore} from '@reduxjs/toolkit';

import todoReducer from './todoSlice';
import editReducer from './editSlice';

export default configureStore({
	reducer: {
		todos: todoReducer,
		edits: editReducer,
	},
});