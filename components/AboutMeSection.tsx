import React from 'react';
import {Grid} from "@mui/material";
import Image from 'next/image'
import ImageOfMe from "../public/myphoto-bg.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const ABOUT_ME_TEXT = [
    "Let me introduce myself a little bit. I enjoy working in web development with people with the same proactive approach. I have a passion for start-ups or entrepreneurship generally. It is not just an obsession I have developed during my journey, but it is more the approach I have and can offer.",
    "My education is in Computer science - software development, therefore, I have a lot of experience with software development.",
    "In my leisure time, I listen to all kinds of podcasts (about technology, politics or philosophy for example), reading books or just exploring some local places. Last year, I decided to read 20 pages each day and at the end of the year, I read about 21 books. What a year...",
    "Originally, I am from Slovakia and as you could notice, I have a weakness for art, especially for Ancient Greek statues.",
    "How can I prove my qualities and my approach to you? Let´s make a project and see for yourself.",
]

const CALL_TO_ACTION_TEXT = "If you want to know more about me or my experiences, you can download my CV, check my LinkedIn profile or contact me directly.";

function AboutMeSection() {
    return (
        <div className={"p-10"}>
            <h1 className={"title-section"}>About me</h1>
            <Grid container className={"max-w-[1400px] mx-auto"}>
                <Grid lg={5} item className={"w-full"}>
                    <Image
                        className={"mx-auto"}
                        alt={"Matej Kuka picture"}
                        src={ImageOfMe}
                    />
                </Grid>
                <Grid lg={7} item className={"px-4"}>
                    {ABOUT_ME_TEXT.map(text => (
                        <p key={text} className={"text-2xl my-4"}>
                            {text}
                        </p>
                    ))}
                    <ul>
                        <li className={"list-aboutme-values"}>- Quality oriented</li>
                        <li className={"list-aboutme-values"}>- Team player</li>
                        <li className={"list-aboutme-values"}>- Independent</li>
                    </ul>
                </Grid>
            </Grid>
            <p className={"text-3xl font-bold text-center my-8 max-w-[850px] mx-auto"}>{CALL_TO_ACTION_TEXT}</p>
            <Grid container>
                <Grid item md={4}>
                    <a className={"button-aboutme-action"} href="#">
                        Download CV
                        <DownloadIcon className={"text-4xl pl-1"}/>
                    </a>
                </Grid>
                <Grid item md={4}>
                    <a className={"button-aboutme-action"} href="#">
                        LinkedIn
                        <LinkedInIcon className={"text-4xl pl-1"}/>
                    </a>
                </Grid>
                <Grid item md={4}>
                    <a className={"button-aboutme-action"} href="#">
                        Contact me
                        <EmailIcon className={"text-4xl pl-1"}/>
                    </a>
                </Grid>
            </Grid>


        </div>
    );
}

export default AboutMeSection;