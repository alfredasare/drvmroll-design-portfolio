import React from "react";
import './home.styles';
import Quote from "../../components/quote/quote.component";
import Landing from "../../components/landing/landing.component";
import About from "../../components/about/about.component";

const Home = () => {

    return (
        <main style={{marginTop: '100px'}}>
            <Landing />
            <About />
            <Quote />
        </main>
    );
};

export default Home;