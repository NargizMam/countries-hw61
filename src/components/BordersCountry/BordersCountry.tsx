import React from 'react';
import {ListItem, ListSubheader} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

const BordersCountry = () => {
    return (
        <>
            <ul>
                <ListSubheader>{'Страны с которыми граничит' }</ListSubheader>
                {[0, 1, 2].map((item) => (
                    <ListItem key={Math.random()}>
                        <ListItemText primary={'dvcv'} />
                    </ListItem>
                ))}
            </ul>
        </>
    );
};

export default BordersCountry;