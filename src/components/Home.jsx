import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

export default function Home() {
  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers/>
      
    </Container>
  )
}

const Container = styled.main`
position: relative;
min-height: 86vh;
overflow-x: hidden;
display: block;
top:100px;
padding: 0 calc(3.5vw+5px);
&::after{
  background : url("/images/home-background.png") center center / cover no-repeat fixed ;
  position: absolute;
  content: "";
  opacity: 1;
  z-index:-1;
  inset:0px;
}

`;