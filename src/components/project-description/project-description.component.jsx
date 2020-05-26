import React, {useContext} from "react";
import PortfolioContext from "../../contexts/portfolio.context";
import {Description, HeaderContainer, MainDescription, ProjectName, SubHeader} from "./project-description.style";

const ProjectDescription = ({number}) => {
    const portfolioData = useContext(PortfolioContext);

    return (
        <MainDescription>
            <HeaderContainer>
                <ProjectName>
                    {portfolioData[number].name}
                </ProjectName>
                <SubHeader>
                    <div>
                        <p>Service</p>
                        <p>{portfolioData[number].projectCategory}</p>
                    </div>
                    <div>
                        <p>Link</p>
                        <p>{portfolioData[number].urlRep}<i/></p>
                    </div>
                </SubHeader>
            </HeaderContainer>
            <Description>
                {portfolioData[number].projectInfo}
                {portfolioData[number].projectInfo}
                {portfolioData[number].projectInfo}
                {portfolioData[number].projectInfo}
            </Description>
        </MainDescription>
    )
};

export default ProjectDescription;