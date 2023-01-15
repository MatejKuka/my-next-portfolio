import React from 'react';
import {Grid} from "@mui/material";

const CONTACT_FORM_DESC = "You can fill out the form or send me an email on contact@matejkuka.com";

function ContactMeSection() {
    return (
        <div className={"bg-secondary-color"}>
            <h1 className={"title-section pt-8"}> Contact form</h1>
            <p className={"text-center font-bold text-2xl text-primary-color"}>{CONTACT_FORM_DESC}</p>
            <form action="https://formsubmit.co/contact@matejkuka.com" method="POST">

                <Grid container className={"max-w-[1200px] mx-auto pb-24"}>
                    <Grid item md={6} className={"p-10"}>
                        <label className={"label-contact-section "}>Your name*</label>
                        <input className={"input-contact-section"} type="text" required/>
                        <label className={"label-contact-section"} htmlFor="">Your email*</label>
                        <input className={"input-contact-section"} type="email" required/>
                    </Grid>
                    <Grid item md={6} className={"p-10"}>
                        <label className={"label-contact-section"} htmlFor="">Message*</label>
                        <textarea className={"input-contact-section max-h-[160px]"} name="message" type="text" rows="3" required/>
                        <button
                            type="submit"
                            className={"mt-4 bg-green-700 text-3xl font-bold text-white p-2 rounded-xl"}>
                            Submit</button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default ContactMeSection;