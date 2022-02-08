import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {Input} from 'semantic-ui-css'
import { EditTask } from '../redux/actions/Actions';
function Editing({task}) {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [newDescription, setNewDescription] = useState(task.text);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit=()=>{
       dispatch(EditTask(newDescription,task.id))
       handleClose()
  }
  return (
  <div>
<Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal EDIT</Modal.Title>
        </Modal.Header>
        <Modal.Body><Input onChange={(e)=>setNewDescription(e.target.value)} type="text" icon='search' placeholder='Edit todo here...' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleEdit()}>
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
  </div>);
}

export default Editing;
