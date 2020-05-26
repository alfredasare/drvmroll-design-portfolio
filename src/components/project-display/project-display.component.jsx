import React, {useContext} from "react";
import {ImageDisplayer} from "./project-display.style";
import PortfolioContext from "../../contexts/portfolio.context";


const ProjectDisplay = ({number}) => {
    const portfolioData = useContext(PortfolioContext);
    return (
        <>
            <ImageDisplayer coverImage={portfolioData[number].projectResources[0].url}>
            </ImageDisplayer>
            <ImageDisplayer coverImage={portfolioData[number].projectResources[1].url}>
            </ImageDisplayer>
        </>
    )
};

export default ProjectDisplay;