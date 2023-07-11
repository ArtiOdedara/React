import axios from 'axios'
import React from 'react'

function DeleteData({itemId, data, setData}) {

  //calling delete api
  const handleDelete = () => {
    axios.delete(`https://reqres.in/api/users/${itemId}`)
    .then(reponse => deleteRecord())
    .catch(err => console.log(err))
  }

  function deleteRecord(){
    const newData = []
    data.filter((element) => {
      if(element.id !== itemId){
        newData.push(element)
      }
    })
    setData(newData)
  }

  return (
    <>
      <button className='bg-danger deleteBtn' onClick={handleDelete}>Delete</button>
    </>
  )
}

export default DeleteData