import { useState, useEffect } from 'react'
import '../App.css'
import HeaderDay5 from '../components/HeaderDay5.jsx';
import {Row, Col} from 'reactstrap';
import katsu from '../images/katsu.jpg';
import image3 from '../images/image3.jpg';
import image2 from '../images/image2.jpg';
import bandaiarcade03 from '../images/bandaiarcade03.jpg';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import france1 from '../images/france1.jpg';
import gyu from '../images/gyu.jpg';
import sega from '../images/sega.jpeg';
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
            <img id="Cimage" src={image3} />
            <p id='Carousel' className="legend">The Electric City</p>
            
        </div>
        <div>
            <img id="Cimage" src={bandaiarcade03} />
            <p id='Carousel' className="legend">Bandai Arcade</p>
        </div>
        <div>
            <img id="Cimage" src={sega} />
            <p id='Carousel' className="legend">Sega Game Center</p>
        </div>
    </Carousel>
    
    )
};


const Day5Page = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderDay5/>
            <div>
                {CarouselPage()}
            </div>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b> Day 5 is in Akihabara.
                    Akihabara is known for video games and animation.
                    You will find many arcades and souvenir shops.
                    And at night it glows! Restaurants and things to do below.
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
            <b> The meals for day 1 will include: 
                Breakfast at Vie De France, Katsuya Akihabara pork katsu for lunch, 
                and an amazing Gyukatsu shop named Motomura where you can cook your own fried wagyu </b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div class="row">
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://shop.viedefrance.co.jp/detail/217/'>
                                <img id="pagesimage" src={france1} width={300} height={200}  alt='Tantan' className='float-start'/><div class="caption" id="caption">Vie De France</div>
                            </NavLink>
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://shop.arclandservice.co.jp/ae-shop/spot/detail?code=786'>
                                <img id="pagesimage" src={katsu} width={300} height={200} alt='Ichiran' className='float-start' /><div class="caption" id="caption">Katsuya Akihabara</div>
                            </NavLink> 
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://www.gyukatsu-motomura.com/en/shop/akihabara'>
                                <img id="pagesimage" src={gyu} width={300} height={200}  alt='sushinose' className='float-start' /><div class="caption" id="caption">Gyukatsu Motomura</div>
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
            <b> Here is a link to a great website for fun activities and places to explore in Akihabara City</b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div>
                        <NavLink className='nav-link' to='https://www.timeout.com/tokyo/things-to-do/best-things-to-do-in-akihabara-shops-restaurants-arcades-and-more'>
                            <img id="pagesimage" src={image2} width={900} height={600}  alt='tokyostation5' className='float-start' />
                        </NavLink>
                    </div>
                    <div>
                        <b id="DayCaption">&#40;Click on the image&#41;</b>
                    </div>
                </Col>
            </Row>
        </div>
        <NavLink className='nav-link' to='/Day4Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ⬅️ </Button>
        </NavLink>
        <NavLink className='nav-link' to='/TokyoHomePage'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ➡️ </Button> 
        </NavLink>    
    </>
    )
};



export default Day5Page;