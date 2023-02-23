import React,{useState} from 'react'

export default function About() {
const[data, setData] = useState('hello')

function handleOnClick() {
    setData(data.toUpperCase());
  }

  return (
    <div>
      <h1 id="title">{data}</h1>
      <button onClick={handleOnClick}>Change Content</button>
    </div>
  )
}
