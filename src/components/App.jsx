import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    const [beaches, setBeaches] = useState([])

  
      useEffect(() =>{
        fetch("http://localhost:3000/beaches")
          .then(r => r.json())
          .then(data => setBeaches(data))
          .catch(error => console.error(error))
      }, [])

      function onAddBeach(newBeach) {
          const upDatedBeachesArray = [...beaches, newBeach]
          setBeaches(upDatedBeachesArray)
      }
    //  const contextObj = {beaches, onAddBeach} using destructuring to achieve same as line 42
    const contextObj= {beaches: beaches, onAddBeach: onAddBeach}

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={contextObj} />
        </>
    )
}
export default App