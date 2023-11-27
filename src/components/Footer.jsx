import { Container, Row, Col } from 'reactstrap';
import myGif2 from '../LinkedIn.gif';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <a href='https://www.linkedin.com/in/terrence-sanchez' target="_blank"> <img src={myGif2} className='logo2' alt="my-gif"/> </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
