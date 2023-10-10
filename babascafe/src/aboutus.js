import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
export function AboutUs() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="aboutuspic"
                src="https://5pm-images.imgix.net/offerproviders/none/offerproviderpics/c0cbcb7c318e4553a68b284dcaa4e68d.jpg"
                alt="First slide"
                
              />
              <Carousel.Caption>
                <h3 className="carousalcap">Come Join US and Have a Snack</h3>
                <p className="carousalcap">Baba's café has been open since October 5, 2016</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="aboutuspic"
                src="https://impos.com.au/wp-content/uploads/2017/05/Screen-Shot-2017-05-24-at-2.45.14-pm.png"
                alt="Second slide"
                
              />

              <Carousel.Caption >
                <h3 className="carousalcap">Our Plan</h3>
                <p className="carousalcap">We Plan To Open Up More Cafés All Around The World</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="aboutuspic"
                src="https://cdnimg.webstaurantstore.com/images/articles/353/different-types-of-restaurants-header.jpg"
                alt="Third slide"
                
              />

              <Carousel.Caption >
                <h3 className="carousalcap">Cheers! </h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      <Accordion defaultActiveKey="0" className="aboutus" >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >About US</Accordion.Header>
          <Accordion.Body>
            Welcome to Baba's Café, where you can get wonderful cuisine,
            coffee, and a comfortable atmosphere! On October 5, 2016, we
            opened our doors with the intention of establishing a welcoming
            venue where people could enjoy fresh, handcrafted cuisine while
            connecting with their neighbourhood. Baba, our founder and the
            head chef, was the beginning of our journey. Baba was raised in a
            tiny town in Lebanon, where his grandmother taught him the skill of
            cooking. He moved to Canada in the 2000s and worked at a wide
            range of restaurants and cafés, always dreaming of one day owning
            his own restaurant. Baba's Cafe was founded in 2016, making that
            dream a reality.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What To Expect </Accordion.Header>
          <Accordion.Body>
            At Baba's Café, we believe in making use of only the highest
            quality supplies and making everything from scratch. Our menu
            includes a combination of classic cuisine, comfort food, and a few
            surprises. No visit to Baba's Café is complete without sampling
            one of our unique desserts. At Baba's Café, we believe in making
            use of only the highest quality supplies and making everything
            from scratch. Our menu includes a combination of classic cuisine,
            comfort food, and a few surprises. No visit to Baba's Café is
            complete without sampling one of our unique desserts. But it's not
            just about the cuisine, Baba's Café is also a great spot to
            unwind, meet up with friends, or get some work done. We have free
            Wi-Fi, plenty of seats (both indoor and outdoor), and a warm,
            friendly atmosphere that will make you feel right at home. In
            addition, our coffee is some of the best in town, as a result to
            our top-of-the-line espresso equipment and trained coffee shop
            employees. Baba's Café has you covered whether you're looking for
            a big meal, a sweet treat, or simply a decent cup of coffee. Come
            see for yourself what all the hype is about!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      </Row>
      </Container>
    </div>
  );
}