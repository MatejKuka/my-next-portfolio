import React, {useState} from 'react';
// @ts-ignore
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer} from "@mui/material";

function Navbar() {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>();

    return (
        <nav className={"flex w-full p-5 justify-between shadow-xl"}>
            <h1 className={"text-5xl font-extrabold"}>Matej.</h1>
            <div>
                <Drawer
                    anchor={"top"}
                    open={isOpenDrawer}
                    onClose={() => setIsOpenDrawer(false)}
                >
                    <a className={"link-navbar-drawer"} href="">Home</a>
                    <a className={"link-navbar-drawer"} href="">About</a>
                    <a className={"link-navbar-drawer"} href="">Skills</a>
                    <a className={"link-navbar-drawer text-primary-color bg-secondary-color"} href="">Contact</a>
                </Drawer>
                <MenuIcon
                    onClick={() => setIsOpenDrawer(true)}
                    className={"md:hidden text-5xl"}
                />
                <ul className={"hidden md:flex gap-6"}>
                    <li>
                        <a className={"link-navbar"} href="">Home</a>
                    </li>
                    <li>
                        <a className={"link-navbar"} href="">About</a>
                    </li>
                    <li>
                        <a className={"link-navbar"} href="">Skills</a>
                    </li>
                    <li>
                        <a className={"text-3xl font-bold bg-secondary-color text-primary-color p-2 rounded-lg"} href="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;