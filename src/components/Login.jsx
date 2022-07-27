import React from 'react'
import styled from 'styled-components'

export default function Login(props) {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>Disney+ is a growing streaming platform featuring a massive library of movies, TV shows, and other stuff to binge-watch.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
          </CTA>
          <BgImage/>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.section`
overflow:hidden;
display: flex;
flex-direction: column;
text-align: center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;
const BgImage = styled.div`
height:100%;
background-image:url("/images/login-background.jpg");
background-repeat:no-repeat;
background-size:cover;
background-position:top;
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
z-index:-1;
`;

const CTA = styled.div`
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
font-size:40px;
width:100%;
letter-spacing:2px;
margin-bottom:12px;
padding:16px 0;
border-radius:4px;
&:hover{
    background-color:#0483ee;
    transition:0.4s;
}
`;

const Description = styled.h2`
font-weight:500;
color:hsla(0,0%,95%,1);
margin:0 0 34px;
line-height:1.5;
`;

const CTALogoTwo = styled.img`
margin-bottom:20px;
max-width:600px;
min-height:1px;
display:inline-block;
width:100%;
vertical-align:bottom;
`;