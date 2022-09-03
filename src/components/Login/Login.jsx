import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase'
import { login } from '../../redux/features/userSlice';

const Login = () => {
    const dispatch = useDispatch()
    const SignIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch((e) => alert(e));
    }
    
    return (
        <Container>
            <Section>
                <Hero>
                    <Fade left>
                        <h1><span>Welcome</span> to your shopping online community</h1>
                        <img src="images/login.jpg" alt="login" />
                    </Fade>
                </Hero>
                <Form>
                    <Google onClick={SignIn}>
                        <Fade bottom>
                            <img src="images/google.png" alt="google" />
                            Sign in with Google
                        </Fade>
                    </Google>
                </Form>
                <MyPhoto>
                    <img src={'./images/profile.jpg'} alt="Meng" />
                </MyPhoto> 
                <Copyright>
                    Copyright © 2022{' '}
                    <a href="https://web.facebook.com/sin.meng.3720" target="_blank" rel="noopener noreferrer">
                        Meng
                    </a>
                    . All rights reserved.     
                </Copyright>
            </Section>
        </Container>
    )
}

const MyPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    vertical-align: middle;
    transition-duration: 167ms;
    margin-top: 35px;
    img{
        border-radius: 50%;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
    @media (max-width: 768px){
        justify-content: center;
        align-items: center;
    }
`

const Hero = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        span{
            background-color: #CA4246;
            font-weight: 700;
            background-image: linear-gradient(
                    45deg,
                    #CA4246 16.666%, 
                    #E16541 16.666%, 
                    #E16541 33.333%, 
                    #F18F43 33.333%, 
                    #F18F43 50%, 
                    #8B9862 50%, 
                    #8B9862 66.666%, 
                    #476098 66.666%, 
                    #476098 83.333%, 
                    #A7489B 83.333%);
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
        }
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    img{
        /* z-index: -1; */
        width: 450px;
        height: 450px;
        bottom: -2px;
        right: -150px;
        border-radius: 50%;
        @media (max-width: 768px) {
            top: 230px;
            position: initial;
            align-content: center;
        }
        
    }
`

const Copyright = styled.span`
    margin-top: 60px;
    text-align: center;
    width: 100%;
    font-size: 14px;
    a{
        text-decoration: none;
        font-size: 15px;
        color: blue;
        &:hover{
            text-decoration: underline;
        }
    }
`

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgb(0, 0, 0, 0.6);
    padding: 11px 60px;
    &:hover{
        background-color: rgb(207, 207, 207, 0.25);
        cursor: pointer;
        color: rgb(0, 0, 0, 0.75)
    }
    img{
        width: 18px;
        height: 18px;
        object-fit: cover;
    }
    @media (max-width: 768px){
        float: right;
    }
`

const Form = styled.div`
    margin-top: -250px;
    width: 408px;
    @media (max-width: 768px){
        margin-top: 20px;
    }
`

const Section = styled.section`
    display: flex;
    align-content: start;
    /* min-height: 700px; */
    height: 100vh;
    padding-bottom: 138px;
    /* background: red; */
    padding-top: 40px;
    padding: 60px 0;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0;
    }
`

const Container = styled.div`
    padding: 0;
`

export default Login
