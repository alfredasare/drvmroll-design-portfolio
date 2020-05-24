import React from "react";
import './home.styles';
import Quote from "../../components/quote/quote.component";
import Landing from "../../components/landing/landing.component";

const Home = () => {

    return (
        <main style={{marginTop: '100px'}}>
            <Landing />
            <Quote />
        </main>
    );
};

export default Home;