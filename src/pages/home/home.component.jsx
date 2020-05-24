import React from "react";
import './home.styles';
import Quote from "../../components/quote/quote.component";

const Home = () => {

    return (
        <main style={{marginTop: '100px'}}>
            <h1>HOME</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi atque beatae, consequatur ea exercitationem ipsum laboriosam nostrum, porro, praesentium quidem soluta velit veniam voluptates? Natus optio temporibus vel?
            </p>

            <Quote />
        </main>
    );
};

export default Home;