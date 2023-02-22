import React, {useState, useEffect} from 'react'

export default function GithubUsers() {
  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => setData(data))
    
  },[]);

  return (
    <div>
      <ul>
        {data.map(item=>
          <li key={item.id}> 
        {item.login}
          </li>
          )}
      </ul>
      
    </div>
  )
}
