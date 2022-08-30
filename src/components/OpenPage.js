import { Link } from 'react-router-dom';
import nordicMap from './images/nordicMap.png';

function OpenPage() {
  return (
    <Link to='/order' className="my-5 d-flex justify-content-center">
      <img src={nordicMap} alt="nordic" />
    </Link>
  );
}

export default OpenPage;
