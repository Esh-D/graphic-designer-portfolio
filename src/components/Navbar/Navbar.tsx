import './Navbar.css'
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="bg-white shadow-sm p-4 fixed w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="nav-heading text-xl font-bold"># Graphics</h1>
                <div className="links space-x-6">
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-item hover:text-gray-500">Home</Link></li>
                        <li><Link to="/about" className="nav-item hover:text-gray-500">About</Link></li>
                        <li><Link to="/portfolio" className="nav-item hover:text-gray-500">Portfolio</Link></li>
                        <li><Link to="/contact" className="nav-item hover:text-gray-500">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// bg-white shadow-md 
// bg-stone-100

export default Navbar