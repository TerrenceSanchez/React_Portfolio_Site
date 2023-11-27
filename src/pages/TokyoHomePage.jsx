import { useState, useEffect } from 'react'
import '../App.css'
import HeaderT from '../components/HeaderT.jsx';
import ShibuyaIcon from '../images/ShibuyaIcon.png';
import Akihabara from '../images/Akihabara.png';
import TokyoStation from '../images/TokyoStation.png';
import TokyoTower from '../images/TokyoTower.png';
import TokyoImperialPalace from '../images/TokyoImperialPalace.png';
import {Row, Col} from 'reactstrap';
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











const TokyoHomePage = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderT/>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b>I love Tokyo, and I had the opportunity to travel there. I love Tokyo, and I had the opportunity to travel there this past May! 
                Inspired by my time in Japan, I have created a 5 day itinerary for a vacation to Tokyo!
                </b>
            </Col>
        </div>
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5'>
                <div class="row">
                    <div class="column">
                        <NavLink className='nav-link' to='/Day1Page'>
                            <a><img id='pagesimage2' src={ShibuyaIcon} width={200} height={200}  alt='Shibuya' className='float-start' /><div class="caption" id="caption">Day 1</div></a>
                        </NavLink>
                    </div>
                    <div class="column">
                        <NavLink className='nav-link' to='/Day2Page'>
                            <a><img id='pagesimage2' src={TokyoStation} width={200} height={200}    alt='TokyoStation' className='float-start' /><div class="caption" id="caption">Day 2</div></a>
                        </NavLink> 
                    </div>
                    <div class="column">
                        <NavLink className='nav-link' to='/Day3Page'>
                            <a><img id='pagesimage2' src={TokyoImperialPalace} width={200} height={200}  alt='TokyoPalace' className='float-start' /><div class="caption" id="caption">Day 3</div></a>
                        </NavLink>
                    </div>
                    <div class="column">
                        <NavLink className='nav-link' to='/Day4Page'>
                            <a><img id='pagesimage2' src={TokyoTower} width={200} height={200}  alt='tokyotower' className='float-start' /><div class="caption" id="caption">Day 4</div></a>
                        </NavLink>
                    </div>
                    <div class="column">
                        <NavLink className='nav-link' to='/Day5Page'>
                            <a><img id='pagesimage2' src={Akihabara} width={200} height={200}   alt='Akihabara' className='float-start' /><div class="caption" id="caption">Day 5</div></a>
                        </NavLink> 
                    </div>
                </div>
                        <NavLink className='nav-link' to='/'>
                            <Button id="arrow" onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}> 🏠 </Button>
                            </NavLink>
                        <NavLink className='nav-link' to='/Day1Page'>
                            <Button id="arrow" onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}> ➡️ </Button> 
                        </NavLink>
            </NavbarBrand>
        </Navbar>
        
    </>

    )
}



export default TokyoHomePage;