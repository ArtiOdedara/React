import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import '../EditData.css'
import axios from 'axios'

function EditData({item, data, setData}){
  const [dataItem, editData] = useState({
    "email": item.email,
    "first_name": item.first_name,
    "last_name": item.last_name,
    "avatar": item.avatar
  })
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleEdit = () => {
    axios.patch(`https://reqres.in/api/users/${item.id}`)
    .then(response => EditData(response.data.data))
    .catch(err => console.log(err))
    
    const oldData = [...data]
    let index = 0
    let counter = -1
    oldData.map((element) => {
      counter += 1
      if(element.id === item.id){
        index = counter
        return index
      }
    })

    oldData[index] = {"email": dataItem.email, "first_name": dataItem.first_name, "last_name": dataItem.last_name, "avatar": dataItem.avatar}
    setData(oldData)
  } 


  return (
    <>
      <button className='editBtn' onClick={handleShow}>Edit</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-secondary'>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => editData({...dataItem, "email": e.target.value})}
                value = {dataItem.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className='text-secondary'>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => editData({...dataItem, "first_name": e.target.value})}
                value = {dataItem.first_name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className='text-secondary'>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => editData({...dataItem, "last_name": e.target.value})}
                value = {dataItem.last_name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label className='text-secondary'>Avatar Url</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => editData({...dataItem, "avatar": e.target.value})}
                value = {dataItem.avatar}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleEdit(); handleClose()}} >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditData