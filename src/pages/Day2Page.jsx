import { useState, useEffect } from 'react'
import '../App.css'
import HeaderDay2 from '../components/HeaderDay2.jsx';
import {Row, Col} from 'reactstrap';
import tokyostation5 from '../images/tokyostation5.jpeg';
import Tokyo_Station2 from '../images/Tokyo_Station2.jpg';
import Tokyo_Station3 from '../images/Tokyo_Station3.jpg';
import Tokyo_Station4 from '../images/Tokyo_Station4.jpg';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tantan from '../images/tantan.jpg';
import OxTongue from '../images/OxTongue.jpg';
import hinatasushi from '../images/hinatasushi.jpeg';
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
            <img id="Cimage" src={Tokyo_Station3} />
            <p id='Carousel' className="legend">Tokyo Station Square</p>
            
        </div>
        <div>
            <img id="Cimage" src={Tokyo_Station4} />
            <p id='Carousel' className="legend">Character Street</p>
        </div>
        <div>
            <img id="Cimage" src={Tokyo_Station2} />
            <p id='Carousel' className="legend">Tokyo Station</p>
        </div>
    </Carousel>
    
    )
};


const Day2Page = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderDay2/>
            <div>
                {CarouselPage()}
            </div>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b> Day 2 is spent in and around Tokyo Station.
                    Tokyo Station is the busiest in Japan.
                    Over 500,000 people will travel through it daily.
                    It is a shopping hub, so get ready to spend some Yen.
                    Lists of restaurants and places to explore are listed below.
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
            <b> The meals for day 2 will include: 
                T's for breafast, Kisuke Ox tongue for lunch, 
                and my favorite sushi shop, Sushi Hinatomaru </b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <Navbar dark color='primary' sticky='top' expand='md'>
                        <NavbarBrand className='ms-5'>
                            <div class="row">
                                <div class="column" id="col2">
                                <NavLink className='nav-link' to='https://ts-restaurant.jp/english/'>
                                    <img id="pagesimage" src={tantan} width={300} height={200}  alt='Tantan' className='float-start'/><div class="caption" id="caption">T's Resteraunt</div>
                                </NavLink>
                                </div>
                                <div class="column" id="col2">
                                    <NavLink className='nav-link' to='https://www.kisuke.co.jp/'>
                                        <img id="pagesimage" src={OxTongue} width={300} height={200} alt='Ichiran' className='float-start' /><div class="caption" id="caption">Kisuke</div>
                                    </NavLink> 
                                </div>
                                <div class="column" id="col2">
                                    <NavLink className='nav-link' to='https://www.timeout.com/tokyo/restaurants/sushi-hinatomaru-tokyo-station'>
                                        <img id="pagesimage" src={hinatasushi} width={300} height={200}  alt='sushinose' className='float-start' /><div class="caption" id="caption">Sushi Hinatomaru</div>
                                    </NavLink>
                                </div>
                            </div>
                        </NavbarBrand>
                    </Navbar>
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
            <b> Here is a link to a great website for fun activities and places to explore in and around Tokyo Station</b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div>
                        <NavLink className='nav-link' to='https://www.jal.co.jp/ar/en/guide-to-japan/destinations/articles/tokyo/tokyo-station.html'>
                            <img id="pagesimage" src={tokyostation5} width={900} height={600}  alt='tokyostation5' className='float-start' />
                        </NavLink>
                    </div>
                    <div>
                        <b id="DayCaption">&#40;Click on the image&#41;</b>
                    </div>
                </Col>
            </Row>
        </div> 
        <NavLink className='nav-link' to='/Day1Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ⬅️ </Button>
        </NavLink>
        <NavLink className='nav-link' to='/Day3Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ➡️ </Button> 
        </NavLink>     
    </>
    )
};



export default Day2Page;