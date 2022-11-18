import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../Components/BackgroundImage';
import Header from '../Components/Header';


export default function signup(){

    return <Container>
        <BackgroundImage />
        <Header />
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, Tv shows and more</h1>
                <h4>Watch anywhere, and cancel anytime.</h4>
                <h6>Ready to watch? Enter your email to create or restart your membership</h6>
            </div>

            <div className="form">
                <input type="email" placeholder="Email Address" name="Email" />
                <input type="password" placeholder="password" name = "password" />
                <button>Get Started</button>
            </div>
                <button>Login</button>
        </div>
    </Container>

}

const Container = styled.div``;
