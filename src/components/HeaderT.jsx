import { useState, React} from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import tokyotitle from '../images/tokyotitle.png';
import tokyoTitle2 from '../images/tokyoTitle2.png';
import Dropdown from 'react-bootstrap/Dropdown';





const HeaderT = () => {

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5'>
                        <NavLink className='nav-link' to='/'>
                            <img id="tokyo" height={250} width={800} src={tokyoTitle2}/>
                            {/* <h2 className='mt-1 mb-5'>5 Days in Tokyo...</h2> */}
                        </NavLink> 
            </NavbarBrand>
        </Navbar>
    );
};

export default HeaderT;
