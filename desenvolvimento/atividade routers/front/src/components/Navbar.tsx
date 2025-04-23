import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/palpite">Palpite</Link>
      <Link to="/historico">Histórico</Link>
    </nav>
  );
};

export default Navbar;