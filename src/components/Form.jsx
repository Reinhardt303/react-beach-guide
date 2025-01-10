import {  useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form';

function Form() {
  const [name, setName] = useState("")
  const [alerts, setAlerts] = useState("")
  const [image, setImage] = useState("")
  const [waveHeight, setWaveHeight] = useState("")
  const { onAddBeach} = useOutletContext();
  const { reset } = useForm();

  function handleAddBeach(event) {
    event.preventDefault()
    const formData = ({name, alerts, waveHeight, image})
    reset()

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

return (
    <>
      <main>
        <h1>Fill out the form below, to add your beach to the beaches page!</h1>


      <form id="addBeachForm" onSubmit={handleAddBeach}>
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

      </main>
    </>
  )

}

export default Form