import { ADD_TASK, DONE_TASK, EDIT_TASK } from "./ActionsType"

export const addTask=(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask
    }
}
export const EditTask=(newDescription,id)=>{
    return{
        type:EDIT_TASK,
        payload:{newDescription,id}
    }
}
export const DONE=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}