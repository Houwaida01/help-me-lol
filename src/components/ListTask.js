import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
   const task=useSelector((state)=>state.todoReducers.objet)
   console.log(task);
  return (
  <div style={{display:"flex", flexWrap:'wrap', justifyContent:"space-around"}}>
{task?.map((el)=> <Task todo={el} key={el.id} /> )}
  </div>);
}

export default ListTask;
