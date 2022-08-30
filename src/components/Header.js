import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <>
    <nav className="navbar bg-dark">
      <div className="container">
        <Link to='/filterPage' className="navbar-brand text-white" href="#">
        <i class="bi bi-airplane-fill mx-2"></i>
          Nordic Vacation
        </Link>
        <div class="text-white">
          <Link to='/order' className='nav-link'>
          Order Now
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;
