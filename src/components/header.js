import propTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import '../style/style.css'
// import NavChange from './change'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';




const Header = ({ siteTitle }) => {

    // <NavChange />
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()

    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
          const show = window.scrollY > 60
          if (navRef.current !== show) {
            setNavBackground(show)
          }
        }
        document.addEventListener('scroll', handleScroll)

      }, [])


    return (

        <div className='header' >
            <Navbar
                backgroundColor={navBackground ? 'white' : 'transparent'}
                style={{ transition: '1s ease' }}            >
                <NavbarBrand href="/">#Silllah</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar  >
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about/">about</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services/">services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects/">projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

Header.propTypes = {
    siteTitle: propTypes.string,
}

Header.propTypes = {
    siteTitle: ``,
}


export default Header;