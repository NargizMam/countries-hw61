import React from 'react';
import {ListSubheader} from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
    borders: string[];
}

const BordersCountry: React.FC<Props> = ({borders}) => {
    return (
        <>
            <ul>
                <ListSubheader>{'Страны с которыми граничит' }</ListSubheader>
                {borders.map((item) => (
                    <Typography>
                        {item}
                    </Typography>
                ))}
            </ul>
        </>
    );
};

export default BordersCountry;