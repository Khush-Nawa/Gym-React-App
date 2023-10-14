import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
         <Carousel data-bs-theme="light">
        {/* First slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://bp-fitnessaustralia-production.s3.amazonaws.com/uploads/website_image/image/5999/extra_widescreen_NSW_gyms_must_now_be_staffed_at_all_times_NSW_Premier_takes_step_to_manage_physical_distancing_and_hygiene.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://cdn.quotesgram.com/img/16/28/726310302-getbetter-1280x720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://wallpapers.com/images/featured/gym-og6h4kg6ciwvrj5i.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='my-3 container'>
        <h2 className='text-center'>Stay Healthy with Good Gym Hygiene</h2>
      <div className='row'>
        <div className='my-3 col-md-6'>
          <Card border="dark">
            <Card.Body>
              <Card.Img src='https://i.imgur.com/2Nyb0hD.jpg'></Card.Img>
            </Card.Body>
          </Card>
        </div>
        <div className='my-3 col-md-6'>
          <Card border="dark">
            <Card.Body>
            <Card.Title className='text-center'>Gym Locations in your City</Card.Title>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d108858.86500374829!2d77.10901887961126!3d28.644114447092715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgym%20in%20delhi!5e0!3m2!1sen!2sin!4v1697215780633!5m2!1sen!2sin" 
                style={{ width: "100%", height: 400 }}
                title='Map'
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
