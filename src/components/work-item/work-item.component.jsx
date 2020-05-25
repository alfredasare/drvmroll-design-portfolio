import React from "react";
import './work-item.styles';
import {ViewLink, WorkCategory, WorkItemContainer, WorkItemImage, WorkItemText} from "./work-item.styles";

const WorkItem = ({projectCategory, projectInfo, url, projectResources}) => {

    const coverImage = projectResources[0].type === 'video' ? projectResources[1].url : projectResources[0].url;

    return (
        <WorkItemContainer>
            <WorkItemImage coverImage={coverImage}/>
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