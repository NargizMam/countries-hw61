import React from 'react';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

interface Props {
    countries: Country[];
    onClick: (alpha3Code: string) => void;
}

const CountriesList: React.FC<Props> = ({countries, onClick}) => {
    return countries && (
        <>
            <List
            sx={{
            width: '100%',
            maxWidth: 360,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 600,
                '& ul': { padding: 0 },
        }}
            subheader={<li />}
            >
                <Typography variant="h4" >
                    All countries
                </Typography>
                {countries.map((country) => (
                <li key={country.alpha3Code} style={{borderBottom: '1px dotted',margin: 10}}>
                    <img src={country.flag} alt="Flag" style={{width:50}}/>
                    <Button
                        onClick={() => onClick(country.alpha3Code)}
                    >
                        {country.name}
                    </Button>
                </li>
            ))}
            </List>
        </>
    );
};

export default CountriesList;