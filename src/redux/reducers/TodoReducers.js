//IMPORTATION

import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../actions/ActionsType";

//INITIAL STATE
const initialState={
    objet:[
        {id:Math.random(),
        description:"New York is a city of diversity and dynamism. It is also a city of politics,economy and culture. It is even described as the economic and cultural capital of the world, and New York Cityis one of the most populous cities in the United States.",
        isDone:false},
        {id:Math.random(),
        description:"L’Espagne est restée en 2019 la deuxième destination touristique du monde, derrière la France et devant les États-Unis, selon des données provisoires de l’Organisation mondiale du Tourisme ",
        isDone:false}]
}

//PURE FUNCTIONS
const todoReducers=(state=initialState,actions)=>{
    const {type,payload}=actions
    switch (type) {
        case ADD_TASK:
            return {...state,objet:[...state.objet,payload]}
        case EDIT_TASK:
            return {...state,objet:state.objet.map((el)=>el.id==el.payload?{...el,description:payload.newDescription}:el)}
        case DONE_TASK:
            // return {...state,objet:state.objet.map(())}
        default:
            return state;
    }
}
export default todoReducers;