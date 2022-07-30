import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


export default function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    }
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href='/movie'>
          <img src="/images/slider-badag.jpg" alt="slider-img"></img>
        </a>
      </Wrap>
      <Wrap>
        <a href='/movie' >
            <img src="/images/slider-scale.jpg" alt="slider-img"></img>
        </a>
      </Wrap>
      <Wrap>
        <a href='/movie' >
            <img src="/images/slider-badging.jpg" alt="slider-img"></img>
        </a>
      </Wrap>
        <Wrap>
            <a href='/movie'>
                <img src="/images/slider-scales.jpg" alt="slider-img"></img>
            </a>
        </Wrap>
        <Wrap>
            <a href='/movie'>
                <img src="/images/slider-badging.jpg" alt="slider-img"></img>
            </a>
        </Wrap>
        
    </Carousel>
  )
}

const Carousel = styled(Slider)`
margin:30px 105px 30px 115px;
& > button{
    opacity: 1;
    height: 100%;
    width:5vw;
    z-index: 1;
    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
};

ul li button {
    &::before{
        font-size: 10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button::before{
    color: white;
}
.slick-list{
    overflow: visible;
}
.slick-prev{
    left:-105px;
    &:before{
        font-size: 30px;
    }

}
.slick-next{
    right:-75px;
    &:before{
        font-size: 30px;
    }
}
`;

const Wrap = styled.div`
position: relative ;
box-sizing: border-box;
img{
    position:relative;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 6px;
    width:100%;
    height: 100%;
    
    &:hover{
        padding:0px;
        border: 3px solid white;
    }
}
`