import { useState, useEffect } from 'react'
import '../App.css'
import HeaderDay1 from '../components/HeaderDay1.jsx';
import {Row, Col} from 'reactstrap';
import fluxCafe from '../images/fluxCafe.jpg';
import ichiranShib from '../images/ichiranShib.jpg';
import sushinose from '../images/sushinose.jpg';
import Shibuya2 from '../images/Shibuya2.jpg';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Shibuya from '../images/Shibuya.jpg';
import hachiko from '../images/hachiko.jpg';
import shibuya3 from '../images/shibuya3.jpg';
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
            <img id="Cimage" src={shibuya3} />
            <p id='Carousel' className="legend">Shibuya Crossing</p>
            
        </div>
        <div>
            <img id="Cimage" src={hachiko} />
            <p id='Carousel' className="legend">Statue of Hachiko</p>
        </div>
        <div>
            <img id="Cimage" src={Shibuya} />
            <p id='Carousel' className="legend">Shibuya Square</p>
        </div>
    </Carousel>
    
    )
};


const Day1Page = () => {


    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        
    <>
        
        <div>
            <HeaderDay1/>
            <div>
                {CarouselPage()}
            </div>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <Col sm='6'>
                <b>The first day wil be spent in and around Shibuya City.
                    It is home to the world's largest crosswalk.
                    Shibuya station has a massive shopping center with plenty of places to eat.
                    Lists of restaurants and places to explore are linked below.
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
                Flux Cafe for breafast, the famous Ichiran Ramen for lunch, 
                and an amazing sushi shop named Sushiryori Inose </b>
            </Col>
        </div>
        <div>
            <Row>
                <Col>
                    <div class="row">
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://www.flux-cafe.com/'>
                                <img id="pagesimage" src={fluxCafe} width={300} height={200}  alt='Tantan' className='float-start'/><div class="caption" id="caption">T's Resteraunt</div>
                            </NavLink>
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://en.ichiran.com/shop/tokyo/shibuya/'>
                                <img id="pagesimage" src={ichiranShib} width={300} height={200} alt='Ichiran' className='float-start' /><div class="caption" id="caption">Kisuke</div>
                            </NavLink> 
                        </div>
                        <div class="column" id="col2">
                            <NavLink className='nav-link' to='https://www.tripadvisor.com/Restaurant_Review-g1066854-d1692134-Reviews-Sushiryori_Inose-Shinagawa_Tokyo_Tokyo_Prefecture_Kanto.html'>
                                <img id="pagesimage" src={sushinose} width={300} height={200}  alt='sushinose' className='float-start' /><div class="caption" id="caption">Sushi Hinatomaru</div>
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
                        <NavLink className='nav-link' to='https://www.timeout.com/tokyo/things-to-do/101-things-to-do-in-shibuya'>
                            <img id="pagesimage" src={Shibuya2} width={900} height={600}  alt='tokyostation5' className='float-start' />
                        </NavLink>
                    </div>
                    <div>
                        <b id="DayCaption">&#40;Click on the image&#41;</b>
                    </div>
                </Col>
            </Row>
        </div>
        <NavLink className='nav-link' to='/TokyoHomePage'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ⬅️ </Button>
        </NavLink>
        <NavLink className='nav-link' to='/Day2Page'>
            <Button id="arrow" onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}> ➡️ </Button> 
        </NavLink>   
    </>
    )
};



export default Day1Page;