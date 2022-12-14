import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails } from '../features/userSlice';

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
      auth.onAuthStateChanged(async (user) =>{
        if(user) {
          setUser(user)
          navigate("/home")
        }
      } )
    },[userName,])

    const handleAuth = () =>{
      if(!userName){
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            setUser(result.user)
        })
        .catch((error) => {
            alert(error.message)
        });
      } else if(userName){
        auth.signOut().then(() => {
          dispatch(setSignOutState())
          navigate("/")
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
    const setUser = (user) => {
      dispatch(
        setUserLoginDetails({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL
        })
      )
    }
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt='disney'></img>
      </Logo>
      { !userName ? <Login onClick={handleAuth} > LOGIN </Login> :
      <>

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt='disney'></img>
          <span>home</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt='disney'></img>
          <span>search</span>
        </a>
        <a href="/watchlist">
        <img src="/images/watchlist-icon.svg" alt='disney'></img>
        <span>watchlist</span>
        </a>
        <a href="/originals">
        <img src="/images/original-icon.svg" alt='disney'></img>
        <span>search</span>
        </a>
        <a href="/movies">
        <img src="/images/movie-icon.svg" alt='disney'></img>
        <span>Movies</span>
        </a>
        <a href="/series">
        <img src="/images/series-icon.svg" alt='disney'></img>
        <span>series</span>
        </a>
      </NavMenu>
      <SignOut>
        <UserImage src={userPhoto} alt={userName} ></UserImage>
        <DropDown>
          <span onClick={handleAuth}> SignOut</span>
        </DropDown>
      </SignOut>
      
      </>}
    </Nav>
  )
}

const Nav = styled.nav`
position: fixed;
top:0;
left:0;
right:0;
height:100px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding:0 36px;
z-index:5;
`;

const Logo = styled.a`
padding:0;
min-width:150px;
width:150px;
margin-top: 5px;
height: 90px;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`;

const NavMenu=styled.div`
display: flex;
align-items: center;
flex-flow:row nowrap;
margin-right:auto;
height:100%;
justify-content: flex-end;
position: relative;
margin-left:20px;

a{
    display: flex;
    align-items: center;
    padding:0 15px;
    img{
        height:40px;
        min-width: 40px;
        width:40px;
    }
    span{
        color:rgb(249,249,249);
        font-size:25px;
        letter-spacing: 1.5px;
        line-height: 1.1;
        white-space: nowrap;
        margin-top:auto;
        position: relative;

        &::before{
          background-color: rgb(249,249,249);
          border-radius: 0 0 4px 4px;
          height: 4px;
          content: "";
          left:0px;
          opacity: 0;
          bottom: -6px;
          position: absolute;
          right:0;
          transform-origin:left;
          transform: scaleX(0.5);
          transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width:auto;
        }
    }
    &:hover{
        span::before{
            transform:scaleX(1);
            visibility: visible;
            opacity: 1 !important;

        }
    }
}



@media (max-width:760px){
    display: none;
}
`;

const Login = styled.a`
letter-spacing: 4px;
font-weight: 530;
font-size: x-large;
border: 1px solid #f9f9f9;
border-radius: 5px;
padding:14px;
cursor: pointer;
transform-origin:bottom;
transition:0.4s ease-in;

&:hover{
    background-color: #f9f9f9;
    color:#090b13;
    
}
`

const UserImage=styled.img`
height:75px;
width:75px;
border-radius:50%;
`;

const DropDown = styled.div`
position: absolute;
right:60px;
background-color: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
border-radius: 4px;
box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0;
padding: 10px;
font-size: 22px;
opacity: 0;
`;

const SignOut = styled.div`
cursor:pointer;
&:hover{
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
  }
}
`;