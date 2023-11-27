import { useState, useEffect } from 'react'
import '../App.css'
import HeaderDay4 from '../components/HeaderDay4.jsx';
import {Row, Col} from 'reactstrap';
import TokyoTower23 from '../images/TokyoTower23.png';
import skydeck from '../images/skydeck.jpg';
import ttowertop from '../images/ttowertop.jpg';
import ttower from '../images/ttower.png';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import steak from '../images/steak.jpg';
import ramenstreet from '../images/ramenstreet.jpg';
import towers1 from '../images/towers1.jpg';
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

const CarouselPage = () => {
    return ( 
    <Carousel showArrows={true}>
        <div>
            <img id="Cimage" src={TokyoTower23} />
            <p id='Carousel' className="legend">Minato City</p>
            
        </div>
        <div>
            <img id="Cimage" src={ttowertop} />
            <p id='Carousel' className="legend">Tokyo Tower Topdeck</p>
        </div>
        <div>
            <img id="Cimage" src={skydeck} />
            <p id='Carousel' className="legend">Tokyo Tower</p>
        </div>
    </Carousel>
    
    )
};


const Day4Page = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderDay4/>
            <div>
                {CarouselPage()}
            </div>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b>Day 4 is spent at Tokyo Tower and in Minato City.
                    Tokyo Tower is the 2nd tallest building in Japan, and you can go to the top!
                    It is 333 meters tall and has one of the best views in the world.
                    A link to the website with instructions and other items are below.
                </b>
            </Col>
        </div>
        <div>
            <Col sm='6'>
            <b id="day"> Restaurants</b>
            </Col>
        </div>
        <div>
            <Col sm='6'>
            <b> The meals for day 4 will include: 
                Tower Restaurant for breafast, the famous Tokyo Ramen/Noodle Street for lunch, 
                and an amazing Wagyu dinner! </b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div class="row">
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://towers.ritzcarltontokyo.com/'>
                                <img id="pagesimage" src={towers1} width={300} height={200}  alt='Tantan' className='float-start'/><div class="caption" id="caption">Towers Restaurant</div>
                            </NavLink>
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://tokyocheapo.com/food-and-drink/ramen/tokyo-ramen-street/'>
                                <img id="pagesimage" src={ramenstreet} width={300} height={200} alt='Ichiran' className='float-start' /><div class="caption" id="caption">Tokyo Ramen Street</div>
                            </NavLink> 
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://www.tripadvisor.com/Restaurant_Review-g14131019-d10797515-Reviews-Steak_House_Katsura-Takanawa_Minato_Tokyo_Tokyo_Prefecture_Kanto.html'>
                                <img id="pagesimage" src={steak} width={300} height={200}  alt='sushinose' className='float-start' /><div class="caption" id="caption">Katsura Wagyu</div>
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div>
            <Col sm='6'>
            <b id="day"> Things to do</b>
            </Col>
        </div>
        <div>
            <Col sm='6'>
            <b> Here is a link to a great website for fun activities and places to explore in Shibuya City</b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div>
                        <NavLink className='nav-link' to='https://www.japan-guide.com/e/e3009.html'>
                            <img id="pagesimage" src={ttower} width={900} height={600}  alt='tokyostation5' className='float-start' />
                        </NavLink>
                    </div>
                    <div>
                        <b id="DayCaption">&#40;Click on the image&#41;</b>
                    </div>
                </Col>
            </Row>
        </div>  
        <NavLink className='nav-link' to='/Day3Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ⬅️ </Button>
        </NavLink>
        <NavLink className='nav-link' to='/Day5Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ➡️ </Button> 
        </NavLink>      
    </>
    )
};



export default Day4Page;