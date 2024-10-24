// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white  fixed top-0 left-0 right-0 z-500">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-2xl font-bold text-red-500">Abel Gashaw</Link>
                <button className="navbar-toggler md:hidden" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="hidden md:flex md:items-center md:space-x-4" id="navbarCollapse">
                    <Link href="#home" className="nav-item nav-link active">Home</Link>
                    <Link href="#about" className="nav-item nav-link">About</Link>
                    <Link href="#service" className="nav-item nav-link">Service</Link>
                    <Link href="#experience" className="nav-item nav-link">Experience</Link>
                    <Link href="#portfolio" className="nav-item nav-link">Portfolio</Link>
                    <Link href="#team" className="nav-item nav-link">Team</Link>
                    <Link href="#contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
