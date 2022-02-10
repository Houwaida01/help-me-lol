//IMPORTATION

import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../actions/ActionsType";

//INITIAL STATE
const initialState={
    objet:[
        {id:Math.random(),
        description:"EATING",
        isDone:false},
        {id:Math.random(),
        description:"SLEEPING",
        isDone:false},
        {id:Math.random(),
        description:"STUDING",
        isDone:false}]
}

//PURE FUNCTIONS
const todoReducers=(state=initialState,actions)=>{
    const {type,payload}=actions
    switch (type) {
        case ADD_TASK:
            return {...state,objet:[...state.objet,payload]}
        case EDIT_TASK:
            return {...state,objet:state.objet.map((el)=>el.id==payload.id?{...el,description:payload.newEdit}:el)}
        case DONE_TASK:
            return {...state,objet:state.objet.map((el)=>el.id==payload?{...el,isDone:!el.isDone}:el)}
        default:
            return state;
    }
}
export default todoReducers;