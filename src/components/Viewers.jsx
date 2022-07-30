import React from 'react'
import styled from 'styled-components'


export default function Viewers() {
  return (
    <Container>
        
        <img src="/images/viewers-disney.png" alt="viewers" ></img>

        <img src="/images/viewers-marvel.png" alt="viewers" ></img>
        <img src="/images/viewers-national.png" alt="viewers" ></img>
        <img src="/images/viewers-pixar.png" alt="viewers" ></img>
        <img src="/images/viewers-starwars.png" alt="viewers" ></img>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content:space-around;
img{
    max-width: 15%;
    border : 5px solid rgba(255, 255, 255,0.13);
    border-radius: 11px;
    padding:5px;
    &:hover{
        padding:0;
        border: 5px solid white;
    }
    @media (max-width: 768px) {
        max-width: 85%;
        margin:10px;
    }
}
@media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`