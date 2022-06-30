// import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import fakepic1 from "../../assets/fakepic1.jpg";
import fakepic2 from "../../assets/fakepic2.jpg";
import fakepic3 from "../../assets/fakepic3.jpg";

export default function Home() {
  return (
    <>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="fake-pics"
              src={fakepic1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              id="fake-pics"
              src={fakepic2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              id="fake-pics"
              src={fakepic3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
