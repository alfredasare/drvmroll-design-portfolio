import React, {useContext, useState} from "react";
import {NextContainer, NextProject, Title} from "./next.style";
import PortfolioContext from "../../contexts/portfolio.context";


const Next = ({number, onClick}) => {
    const portfolioData = useContext(PortfolioContext);
    return (
        <NextContainer>
            <Title>
                Next project
            </Title>
            <NextProject onClick={onClick}>
                {portfolioData[number].nextProject}
                <i className="fas fa-arrow-right"/>
            </NextProject>
        </NextContainer>
    )
};
export default Next;