import React from 'react';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import {hover} from "@testing-library/user-event/dist/hover";

interface Props {
    countriesName: string[];
    onClick: React.MouseEventHandler;
}

const CountriesList: React.FC<Props> = ({countriesName, onClick}) => {
    return (
        <>
            <List
            sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 200,
                '& ul': { padding: 0 },
        }}
            subheader={<li />}
            >
                <Typography variant="h4" >
                    All countries
                </Typography>
        {countriesName.map((countryName) => (
            <li key={'lfkvdlfvk'}>
                <Typography variant="h6"
                            style={{borderBottom: '1px dotted',margin: 10}}
                            onClick={this.props.onClick}
                >
                    {countryName}
                </Typography>
            </li>
            ))}
            </List>
        </>
    );
};

export default CountriesList;