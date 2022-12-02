import React from "react";
import { useState } from 'react';
import Navbar from "../Components/Navbar";
import backgroundImage from "../asserts/home.jpg";
import MovieLogo from "../asserts/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";

export default function Netflix() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (

     
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img src= {backgroundImage} alt="background" className="background-image" />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie logo" />
                    </div>
                    <div className="button flex">
                        <button className="flex j-center a-center">
                            <FaPlay /> play
                        </button>
                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  background-color : black;
  .hero{
    position : relative;
    .background-image{
        filter: brightness(60%);
    }
    img {
        height : 100vh;
        width : 100vw;

    }

    .container {
        position : absolute;
        bottom : 5rem;
        .logo{
            img{
                width : 100%;
                height : 100%;
            }
        }
    }
  }

`;