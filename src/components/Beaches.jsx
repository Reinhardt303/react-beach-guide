import { useEffect, useState } from "react";
import BeachCard from "./BeachCard";
import NavBar from './NavBar'


function Beaches() {
  const [beaches, setBeaches] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/beaches")
      .then(r => r.json())
      .then(data => setBeaches(data))
      .catch(error => console.error(error))
  }, [])

  const beachList = beaches.map(beach => {
    return <BeachCard key={beach.id} beach={beach}/>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Current Beach List</h1>
        {beachList}
      </main>
    </>
  )
}
  
  export default Beaches;