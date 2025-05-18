'use client';
import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div className='p-3 mb-20 w-full border-b border-[#1d2532]'>
            <div className='container m-auto'>
                <Navbar>
                    <div className="container">
                        <Navbar.Brand href="/">
                            <Image src="/logo.svg" alt="Redux" width={200} height={50} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className='!text-[#919fb5]' href="/">Home</Nav.Link>
                                <NavDropdown
                                    title={<span className="text-[#919fb5] after:ml-2 after:content-['▾'] after:text-[#919fb5]">Module</span>}
                                    id="nav-dropdown-dark-example"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1" className="!text-[#919fb5]">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="!text-[#919fb5]">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="!text-[#919fb5]">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="!text-[#919fb5]">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='!text-[#919fb5]' href="/module">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;
