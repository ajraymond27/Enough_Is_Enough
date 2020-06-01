import React from 'react';
import Link from './NavLink';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


const navbar ={
  background: '#fff',
}

const logo = {
  color: 'var(--base2)',
  fontWeight: 'bold',
  fontSize: '24pt',
}

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={navbar}>
            <Navbar.Brand href="/" style={logo}>Enough Is Enough</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link href="/" >Home</Link>
                    <Link href="/agenda" >Agenda</Link>
                    <Link href="/donate" >Donate</Link>
                    <Link href="/contact" >Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}   