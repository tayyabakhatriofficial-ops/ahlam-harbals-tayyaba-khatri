import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../assets/cropped-Ahlam-Herbals-1-2048x904.png';
import HeroSection from '../Components/HeroSection.jsx';
import Store from '../Pages/Store.jsx'
import Return from '../Pages/Return.jsx'
import { Nav } from "react-bootstrap";
import Contact from '../Pages/Contact.jsx'
import About from '../Pages/AboutUs.jsx'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className=" sticky top-0  bg-[#333333] px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={logo}
                            className="h-10 w-auto"
                            alt="Logo" />
                    </div>
                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-6 text-lg font-semibold">
                        <li>
                            <Nav.Link className="text-green-500 hover:text-green-400" as={Link} to="/">Home</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className="text-yellow-500 hover:text-yellow-400" as={Link} to="/store">store</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link className="text-yellow-500 hover:text-yellow-400" as={Link} to="/contactUs">Contact Us</Nav.Link>

                        </li>
                        <li>
                            <Nav.Link className="text-yellow-500 hover:text-yellow-400" as={Link} to="/aboutUs">About Us</Nav.Link>

                        </li>
                        <li>
                            <Nav.Link className="text-yellow-500 hover:text-yellow-400" as={Link} to="/return">Refund and Return Policy</Nav.Link>
                        </li>
                    </ul>


                    {/* Icons (always visible) */}
                    <div className="flex items-center space-x-6">
                        {/* Search */}
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-500 hover:text-yellow-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                />
                            </svg>
                        </button>

                        {/* Cart */}
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-500 hover:text-yellow-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h14l-1.35 6.45A2 2 0 0117.7 21H8.3a2 2 0 01-1.95-1.55L4 4H2"
                                />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                0
                            </span>
                        </div>

                        {/* User */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-500 hover:text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.121 17.804A9 9 0 1118.364 4.561 9 9 0 015.121 17.804z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-yellow-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                // Close Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden mt-3 space-y-3 text-lg font-semibold">
                        <li>
                            <a href="#" className="block text-green-500 hover:text-green-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-yellow-500 hover:text-yellow-400">
                                Store
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-yellow-500 hover:text-yellow-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-yellow-500 hover:text-yellow-400">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-yellow-500 hover:text-yellow-400">
                                Refund and Returns Policy
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/store" element={<Store />} />
                <Route path="/return" element ={<Return/>}/>
                <Route path="/contactUs" element ={<Contact/>}/>
                <Route path='/aboutUs' element ={<About/>}/>
                {/* baki routes yahan add karo */}
            </Routes>
        </>
    );
};

export default Navbar;
