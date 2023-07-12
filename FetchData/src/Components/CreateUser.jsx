import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import '../CreateUser.css'

function CreateUser({data, setData}) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users")
    .then(response => console.log(response))
    .catch(err=> console.log(err))

    const oldData = [...data]
    oldData.push({id: Date.now(), email: email, first_name: firstName, last_name: lastName, avatar: avatar})
    setData(oldData)
    console.log(oldData);
  }

  return (
    <>
      <div className='createUserDiv'>
        <button className='createUserBtn' onClick={handleShow}>+ Create User</button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='text-secondary'>Email</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value = {email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label className='text-secondary'>First Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value = {firstName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label className='text-secondary'>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value = {lastName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label className='text-secondary'>Avatar Url</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAvatar(e.target.value)}
                  value = {avatar}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleSubmit(); handleClose()}} >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}

export default CreateUser