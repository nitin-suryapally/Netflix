import React from 'react';
import background from "../asserts/login.jpg"
import styled from 'styled-components';


export default function BackgroundImage(){

    return(

        <Container>
            <img src={background} alt="background" />
        </Container>

    );

}

const Container = styled.div``;




