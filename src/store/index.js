import {configureStore} from '@reduxjs/toolkit';

import todoReducer from './todoSlice';
import editReducer from './editSlice';
import dateReducer from './dateSlice';

export default configureStore({
	reducer: {
		todos: todoReducer,
		edits: editReducer,
		dates: dateReducer,
	},
});