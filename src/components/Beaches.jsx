import BeachCard from "./BeachCard";
import { useOutletContext } from "react-router-dom";


function Beaches() {
  const {beaches} = useOutletContext()
  const beachList = beaches.map(beach => {
    return <BeachCard key={beach.id} beach={beach}/>
  })

  return (
    <>
      <main>
        <h1>Current Beach List</h1>
        {beachList}
      </main>
    </>
  )
}
  
  export default Beaches;