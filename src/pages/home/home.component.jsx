import React from "react";
import './home.styles';
import Quote from "../../components/quote/quote.component";
import Landing from "../../components/landing/landing.component";
import About from "../../components/about/about.component";
import Contact from "../../components/contact/contact.component";
import WorkList from "../../components/work-list/work-list.component";

const Home = () => {

    return (
        <main style={{marginTop: '100px'}}>
            <Landing />
            <About />
            <WorkList />
            <Quote />
            <Contact />
        </main>
    );
};

export default Home;
