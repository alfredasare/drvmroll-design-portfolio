import React, {useContext} from "react";
import './work-list.styles';
import {WorkListContainer, WorkListHeader} from "./work-list.styles";
import WorkItem from "../work-item/work-item.component";
import PortfolioContext from "../../contexts/portfolio.context";

const WorkList = () => {

    const portfolioData = useContext(PortfolioContext);

    return (
        <WorkListContainer id="works">
            <WorkListHeader>
                Our Works
            </WorkListHeader>

            {
                portfolioData.map(portfolioItem => {
                    return (
                        <WorkItem key={portfolioItem.id} {...portfolioItem}/>
                    );
                })
            }

        </WorkListContainer>
    );
};

export default WorkList