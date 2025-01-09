import {Link} from 'react-router-dom';

function BeachCard({beach}) {

  return (
    <article>
        <h2>{beach.name}</h2>
        <Link to={`/beaches/${beach.id}`}>View Beach Profile</Link>
    </article>
  );
};

export default BeachCard;