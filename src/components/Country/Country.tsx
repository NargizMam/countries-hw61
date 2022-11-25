import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BordersCountry from "../BordersCountry/BordersCountry";

interface Props {
    aboutCountry: AboutCountry;
}

const Country: React.FC<Props> = ({aboutCountry}) => {
    return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {aboutCountry.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {aboutCountry.capital}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        {aboutCountry.population} человек
                    </Box>
                    <BordersCountry borders={aboutCountry.borders}/>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width:180}}
                    image={aboutCountry.flag}
                    alt="Flag"
                />
            </Card>


        </div>
    );
};

export default Country;

