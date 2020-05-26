import React, {useContext, useState} from "react";
import './work-details.styles';
import ProjectDescription from "../../components/project-description/project-description.component";
import ProjectDisplay from "../../components/project-display/project-display.component";
import Next from "../../components/next/next.component";
import PortfolioContext from "../../contexts/portfolio.context";



const WorkDetails = () => {
    const portfolioData = useContext(PortfolioContext);
    const [page, setPage] = useState(1);
    let number = page - 1;
    const goToNext = () => {
        if (portfolioData[page] !== undefined){
            setPage(page+1);
         }else{
            setPage(1);
        }
    };

    return (
        <div style={{margin: '150px 20px 0'}}>
            <ProjectDescription number={number}/>
            <ProjectDisplay number={number}/>
            <Next number={number} onClick={goToNext}/>
        </div>
    );
};

export default WorkDetails;