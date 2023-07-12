import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { ToDoContext } from './App'
import './EditNote.css'



function EditNote({element}) {
  const [show, setShow] = useState(false)
  const [input,setInput ] = useState(element.message)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const {todos, dispatch} = useContext(ToDoContext)

  const handleEdit = (elementId) => {
    dispatch({
      type: "Edit",
      id: elementId,
      data: input
    })
  }

  return (
    <>
      <Button className='editButton' onClick={handleShow}> Edit</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-secondary'>Note</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value = {input}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleEdit(element.id); handleClose()}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditNote