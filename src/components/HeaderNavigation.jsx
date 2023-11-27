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
import name2 from '../images/name2.png'
import { HiArrowSmLeft } from "react-icons/hi";


const HeaderNavigation = () => {
    
    return (
        

        <HiArrowSmLeft style={{Align:"left"}} />
        // <Navbar dark color='primary' sticky='top' expand='md'>
        //     <NavbarBrand className='ms-5'>
        //                 <NavLink className='nav-link' to='/TokyoHomePage'>
        //                     <img id="name" src={name2} height={250} width={800}/>
        //                     {/* <h7 className='mt-1 mb-5'>Terrence Sanchez</h7> */}
        //                 </NavLink> 
        //     </NavbarBrand>
        // </Navbar>
    );
};

export default HeaderNavigation;

