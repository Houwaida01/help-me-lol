import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Button } from 'semantic-ui-react'

function ListTask() {
  const [list, setList] = useState("All");
   const task=useSelector((state)=>state.todoReducers.objet)
   console.log(task);
  return (
  <div>
    
     <Button.Group>
    <Button onClick={()=>setList("All")} basic color='red'>
    Show All
    </Button>
    <Button onClick={()=>setList("Done")} basic color='green'>
    Show Done
    </Button>
    <Button onClick={()=>setList("Undone")} basic color='blue'>
    Show Not Done
    </Button>
  </Button.Group>
  {list=="All"?
 task.map
 ((el)=> <Task todo={el} key={el.id} /> ):
 list=="Done"?
task.filter
((el)=>el.isDone).map((el)=> <Task todo={el} key={el.id} /> ):
task.filter
((el)=>!el.isDone).map((el)=> <Task todo={el} key={el.id} /> )
 }
  </div>);
}

export default ListTask;
