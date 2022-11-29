import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import  { useState } from 'react';
import logo from "../asserts/logo.png"

export default function Navbar({isScrolled}) {
    const links = [
        { name: "Home", link: "/" },
        { name: "Tv Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
    ];

    const [showsearch, setShowSearch] = useState(false);
    const [inputHower, setInputHower] = useState(false);

    return (
        <Container>
            <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <ui className="links flex">
                        {
                            links.map((name, Link) => {
                                return (
                                    <li key={name} ><Link to={Link}>{name}</Link></li>
                                )
                            })
                        }
                    </ui>
                </div>
                <div className="right flex a-center">
                   <div className={`search ${showsearch ? "show-search" : ""} `}></div>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div``;