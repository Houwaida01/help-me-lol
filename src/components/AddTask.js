import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { addTask } from '../redux/actions/Actions';

function AddTask() {
    const dispatch=useDispatch()
    const addRef=useRef()
    const handleAdd=()=>{
        dispatch(addTask({description:addRef.current.value,id:Math.random(),isDone:false}))
        addRef.current.value=""
    }
    console.log(handleAdd);
  return (
  <div>
      <input type="text" placeholder="Add a new todo here" addRef={addRef} />
      <Button onClick={()=>dispatch(handleAdd())} positive>Add</Button>
  </div>);
}

export default AddTask;
