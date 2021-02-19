import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Trombinoscope = () => {
  const [dataApi, setData] = useState([])

  useEffect(() => {
    axios.get('http://hp-api.herokuapp.com/api/characters').then(
      res => {
        console.log(res.data)
        setData(res.data)
      },
      [dataApi]
    )
  })

  return (
    <div>
      <h1>Trombinoscope</h1>
      {dataApi.map(data => (
        <div key={data.key}>
          <img src={data.image} width='200px' />
          <p>{data.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Trombinoscope
