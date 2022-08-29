import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <>
    <nav className="navbar bg-dark">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
        <i class="bi bi-airplane-fill mx-2"></i>
          Nordic Vacation
        </a>
        <div class="text-white">
            <Link to='/order' className='nav-link'>
            Order Now
            </Link>
            </div>
      </div>
    </nav>

    <div className='my-5'>
        <h1 className='d-flex justify-content-center'>Our Offers</h1>
        <p className='d-flex justify-content-center'>List of ouer vacation packages for this month</p>
    </div>

    <div className="d-flex mx-5 my-5">
        <form className="topForm">
            <input>
            </input>
      
            <select className='mx-4'>
                <option disabled selected hidden>Location A-Z</option>
                <option>Akureyri</option>
                <option>Nuuk</option>
                <option>Oslo</option>
                <option>Reykjavik</option>
                <option>Svalbard</option>
                <option>Tórshavn</option>
                <option>Tromsø</option>
            </select>
        </form>
    </div>
    </>
  );
}

export default Header;
