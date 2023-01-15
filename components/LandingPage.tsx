import React from 'react';
import {Grid} from "@mui/material";


const MAIN_TEXT = "I’m Matej Kuka";
const SECONDARY_TEXT = "Web developer using React.js & TypeScript with passion in business and start-ups";
const TERCIARY_TEXT = "Currently based in Esbjerg, Denmark";

function LandingPage() {
    return (
        <div className={"w-full h-[88vh] bg-custom-gradient"}>
            <div className={"w-full h-[88vh] flex items-center bg-statue-md"}>
                <Grid container className={"h-[20rem]"}>
                    <Grid md={6} item className={"pr-4 pl-16"}>
                        <h1 className={"text-7xl font-extrabold text-gray-900"}>{MAIN_TEXT}</h1>
                        <h2 className={"text-3xl font-extrabold py-4 text-gray-900 pr-14"}>{SECONDARY_TEXT}</h2>
                        <h3 className={"text-2xl font-bold text-gray-900"}>• {TERCIARY_TEXT}</h3>
                    </Grid>
                    <Grid md={6} item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default LandingPage;