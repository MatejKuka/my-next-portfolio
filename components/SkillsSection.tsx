import React from 'react';
import {Grid} from "@mui/material";

const MY_SKILLS_TITLE = "Programming languages and frameworks";
const MY_TECHNOLOGIES_TITLE = "Technologies I have been using";
const MY_METHODOLOGIES_TITLE = "Methodologies";

const MY_SKILLS_LIST = [
    "React.js, Express.js, Node.js",
    "TypeScript, Tailwind, SASS",
    "GraphQL + Apollo, SQL",
    "HTML5, CSS, JS",
    ".NET, C#, Java",
]
const MY_TECHNOLOGIES_LIST = [
    "Git, Github",
    "CI/CD (Github Actions)",
    "Firebase",
    "Docker, Kubernetes"
]

const MY_METHODOLOGIES_LIST = [
    "SCRUM (Agile)",
    "Test-Driven Development",
    "Extreme Programming",
]

function SkillsSection() {
    return (
        <div className={"max-w-[1300px] mx-auto"}>
            <h1 className={"title-section"}>My technical skills</h1>
            <Grid container>
                <Grid item md={6}>
                    <h2 className={"title-skills-section"}>{MY_SKILLS_TITLE}:</h2>
                    <ul>
                        {MY_SKILLS_LIST.map(skill => (
                            <li className={"text-3xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item md={6}>
                    <h2 className={"title-skills-section"}>{MY_TECHNOLOGIES_TITLE}:</h2>
                    <ul>
                        {MY_TECHNOLOGIES_LIST.map(skill => (
                            <li className={"text-3xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                    <h2 className={"title-skills-section mt-7"}>{MY_METHODOLOGIES_TITLE}:</h2>
                    <ul>
                        {MY_METHODOLOGIES_LIST.map(skill => (
                            <li className={"text-3xl py-1"} key={skill}>- {skill}</li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default SkillsSection;