import React from "react";
import './work-item.styles';
import {
    ViewLink,
    WorkCategory,
    WorkItemContainer,
    WorkItemImage,
    WorkItemImageContainer,
    WorkItemText
} from "./work-item.styles";
import {Link} from "react-router-dom";

const WorkItem = ({projectCategory, projectInfo, url, projectResources}) => {

    const coverImage = projectResources[0].type === 'video' ? projectResources[1].url : projectResources[0].url;

    return (
        <WorkItemContainer>
            <WorkItemImageContainer>
                <Link to={url}><WorkItemImage coverImage={coverImage}/></Link>
            </WorkItemImageContainer>
            <WorkItemText>
                <WorkCategory>
                    {projectCategory}
                </WorkCategory>
                <p>
                    {projectInfo}
                </p>
                <ViewLink to={url}>View work</ViewLink>
            </WorkItemText>
        </WorkItemContainer>
    );
};

export default WorkItem;