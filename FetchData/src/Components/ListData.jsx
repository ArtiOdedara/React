import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteData from '../Components/DeleteData'
import '../ListData.css'

function ListData() {
  const [data, setData] = useState([])

  //Fetch data using axios
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
    .then(response => setData(response.data.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((record) => (
              <tr key={record.id}>
                <td>{record.email}</td>
                <td>{record.first_name}</td>
                <td>{record.last_name}</td>
                <td><img src={record.avatar} alt={record.avatar} className='avatarImg'/></td>
                <td>
                  <button className='bg-success editBtn'>Edit</button> |
                  <DeleteData itemId={record.id} data={data} setData={setData}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default ListData