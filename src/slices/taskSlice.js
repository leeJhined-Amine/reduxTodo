import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addtask(state, action){
            state.tasks.push(action.payload)
            console.log(action.payload)
        },
        deletetask(state, action){
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
})

export const {addtask, deletetask} = taskSlice.actions;


export default taskSlice.reducer;