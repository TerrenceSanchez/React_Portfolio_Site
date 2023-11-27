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
import Day4Title from '../images/Day4Title.png';



const HeaderDay4 = () => {

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5'>
                        <NavLink className='nav-link' to='/TokyoHomePage'>
                            <img id="tokyo" height={250} width={800} src={Day4Title}/>
                            {/* <h2 className='mt-1 mb-5'>5 Days in Tokyo...</h2> */}
                        </NavLink> 
            </NavbarBrand>
        </Navbar>
    );
};

export default HeaderDay4;