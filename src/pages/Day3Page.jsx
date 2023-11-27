import { useState, useEffect } from 'react'
import '../App.css'
import HeaderDay3 from '../components/HeaderDay3.jsx';
import {Row, Col} from 'reactstrap';
import TokyoImperialPalace3 from '../images/TokyoImperialPalace3.jpg';
import Tokyo_Imperial_2 from '../images/Tokyo_Imperial_2.jpg';
import imperialpalacerunning from '../images/imperialpalacerunning.jpg';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ColorsPalace from '../images/ColorsPalace.jpg';
import imperialeats from '../images/imperialeats.jpg';
import ImperialGarden from '../images/ImperialGarden.jpg';
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
            <img id="Cimage" src={TokyoImperialPalace3} />
            <p id='Carousel' className="legend">Edo Castle</p>
            
        </div>
        <div>
            <img id="Cimage" src={ColorsPalace} />
            <p id='Carousel' className="legend">Palace Gardens</p>
        </div>
        <div>
            <img id="Cimage" src={ImperialGarden} />
            <p id='Carousel' className="legend">Beautiful Scenery</p>
        </div>
    </Carousel>
    
    )
};


const Day3Page = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderDay3/>
            <div>
                {CarouselPage()}
            </div>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b> Day 3 is spent in and around Tokyo Station. The center of the palace, Edo Castle, was built in 1457!
                    It is now part of the Tokyo Imperial Palace and is rich in culture and history. 
                    Exploring the palace and its grounds are a great way to spend day 3.
                    Lists of Rrstaurants and places to explore are listed below.
                </b>
            </Col>
        </div>
        <div>
            <Col sm='6'>
            <b id="day"> Guides & Restaurants</b>
            </Col>
        </div>
        <div>
            <Col sm='6'>
            <b> The meals for day 1 will include: 
                Flux Cafe for breafast, the famous Ichiran Ramen for lunch, 
                and an amazing sushi shop named Sushiryori Inose </b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div class="row">
                        <div class="column" id="col3">
                            <NavLink className='nav-link' to='https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/index.html'>
                                <img id="pagesimage" src={Tokyo_Imperial_2} width={400} height={250}  alt='Tantan' className='float-start'/><div class="caption" id="caption">A Guide to the Palace</div>
                            </NavLink>
                        </div>
                        <div class="column" id="col3">
                            <NavLink className='nav-link' to='https://www.tripadvisor.com/RestaurantsNear-g1066443-d320050-Imperial_Palace-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html'>
                                <img id="pagesimage" src={imperialeats} width={400} height={250}  alt='Tantan' className='float-start'/><div class="caption" id="caption">Restaurants Near the Palace</div>
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
            <b> Here is a link to a great website for fun activities and places to explore near the Palace in Chiyoda</b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div>
                        <NavLink className='nav-link' to='https://www.tripadvisor.com/AttractionsNear-g1066443-d320050-Imperial_Palace-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html'>
                            <img id="pagesimage" src={imperialpalacerunning} width={900} height={600}  alt='tokyostation5' className='float-start' />
                        </NavLink>
                    </div>
                    <div>
                        <b id="DayCaption">&#40;Click on the image&#41;</b>
                    </div>
                </Col>
            </Row>
        </div>   
        <NavLink className='nav-link' to='/Day2Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ⬅️ </Button>
        </NavLink>
        <NavLink className='nav-link' to='/Day4Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ➡️ </Button> 
        </NavLink>     
    </>
    )
};



export default Day3Page;