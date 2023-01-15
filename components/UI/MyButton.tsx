import React from 'react';
import {Button} from "@mui/material";

type propsType = {
    title: string,
    iconNode: React.ReactNode
}

const MyButton: React.FC<propsType> = ({title, iconNode}) => {


    return (
        <Button variant="contained" startIcon={iconNode}>
            {title}
        </Button>
    );
}

export default MyButton;