import uuid from 'react-uuid';

export const PORTFOLIO_DATA = [
    {
        id: uuid(),
        name: "Project 1",
        projectCategory: "UI / UX",
        urlRep: 'project1.com',
        url: "/works/project1",
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                url: `${require("../assets/images/bball-unsplash.jpg")}`
            },
            {
                id: uuid(),
                type: 'pic',
                url: `${require("../assets/images/person-playing-guitar-2079169.jpg")}`
            }
        ],
        nextProject: "project2"
    },
    {
        id: uuid(),
        name: "Project 2",
        projectCategory: "Graphic Design",
        urlRep: 'project2.com',
        url: "/works/project2",
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                url: `${require("../assets/images/man-in-black-top-wearing-headphones-showing-his-tattoos-838696.jpg")}`
            },
            {
                id: uuid(),
                type: 'pic',
                url: `${require("../assets/images/man-carrying-dj-mixing-console-2332406.jpg")}`
            }
        ],
        nextProject: "project3"
    },
    {
        id: uuid(),
        name: "Project 3",
        projectCategory: "Video Editing",
        urlRep: 'project3.com',
        url: "/works/project3",
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'video',
                url: `${require("../assets/videos/test.mp4")}`
            },
            {
                id: uuid(),
                type: 'pic',
                url: `${require("../assets/images/man-carrying-dj-mixing-console-2332406.jpg")}`
            }
        ],
        nextProject: "project1"
    }
];


