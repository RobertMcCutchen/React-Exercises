import React, {useEffect, useState} from 'react';
import './App.css';
import AddHike from './components/AddHike'
import DisplayHikes from './components/DisplayHikes'

function App() {
  const [hikes, setHikes] = useState([])

  useEffect(() => {
    fetchHikes()
  })

  const fetchHikes = () => {
    fetch('http://localHost:3001/hikes')
    .then(response => response.json())
    .then(json => {
      setHikes(json)
    })
  }
  
  return (
    <div>
      <AddHike />
      <DisplayHikes myHikes = {hikes} />
    </div>
  );
}

export default App;
