import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function BeachProfile() {
    const [beach, setBeach] = useState({});
    const params = useParams();
    const beachId = params.id;
  
    useEffect(() =>{
      fetch(`http://localhost:3000/beaches/${beachId}`)
      .then(r => r.json())
      .then(data => setBeach(data))
      .catch(error => console.error(error));
    }, [beachId]);
    console.log(beach)
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>{beach.name}</h1>
          <p>{beach.alerts}</p>
          <p>Max wave height observed: {beach.waveHeight}</p>
        </main>
        <body>
        <img src={beach.image} alt={beach.name}/>
        </body>
      </>
    );
  };
  
  export default BeachProfile;