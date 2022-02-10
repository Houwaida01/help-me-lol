import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import { addTaask } from '../redux/actions/Actions';


function AddTask() {
    const [newTask, setNewTask] = useState({id:Math.random(),description:"",isDone:false});
    const dispatch=useDispatch()
    const handleAdd=()=>{
      dispatch(addTaask(newTask));
     
    }
    console.log(newTask)
  return (
  <div>
     <h1>TO DO LIST</h1>
        <InputGroup className="mb-3">
           <FormControl
           placeholder="What are you going to do"
           onChange={e=>setNewTask({...newTask,description:e.target.value})}
           aria-label="Task"
           aria-describedby="basic-addon2"
           
           />
      <Button variant="primary" onClick={()=>handleAdd()} id="button-addon2">
            ADD TO MY TO DO LIST
      </Button>
      </InputGroup>
  </div>);
}

export default AddTask;
