import { useEffect, useState } from "react";
import BeachCard from "./BeachCard";
import NavBar from './NavBar'


function Beaches() {
  const [beaches, setBeaches] = useState([])
  const [name, setName] = useState("")
  const [alerts, setAlerts] = useState("")
  const [image, setImage] = useState("")
  const [waveHeight, setWaveHeight] = useState("")

  useEffect(() =>{
    fetch("http://localhost:3000/beaches")
      .then(r => r.json())
      .then(data => setBeaches(data))
      .catch(error => console.error(error))
  }, [])

  const beachList = beaches.map(beach => {
    return <BeachCard key={beach.id} beach={beach}/>
  })
  function handleAddBeach(event) {
        event.preventDefault()
        const formData = ({name, alerts, waveHeight, image})

        fetch('http://localhost:3000/beaches', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newBeach => {
          onAddBeach(newBeach)
        })
  }

  function onAddBeach(newBeach) {
      const upDatedBeachesArray = [...beaches, newBeach]
      setBeaches(upDatedBeachesArray)
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Current Beach List</h1>
        {beachList}
        <h1>Fill out the form below, to add your beach to the beaches page!</h1>
      </main>
      <body>

      <form onSubmit={handleAddBeach}>
          <div>
            <label for="beachname">beach name: </label>
            <input id="beachname" type="text" name="beachname" value={name} onChange={event => setName(event.target.value)} placeholder="beachname" />
          </div>
          <br/>
          <div>
            <label for="beachalerts">beach alerts: </label>
            <input id="beachalerts" type="text" name="beachalerts" value={alerts} onChange={event => setAlerts(event.target.value)} placeholder="beachalerts" />
          </div>
          <br/>
          <div>
            <label for="waveheight">wave height: </label>
            <input id="waveheight" type="number" name="waveheight" value={waveHeight} onChange={event => setWaveHeight(event.target.value)} placeholder="waveheight" />
          </div>
          <br/>
          <div>
            <label for="beach image">beach image: </label>
            <input id="beach image" type="text" name="beach image" value={image} onChange={event => setImage(event.target.value)} placeholder="beach image" />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </body>
    </>
  )
}
  
  export default Beaches;