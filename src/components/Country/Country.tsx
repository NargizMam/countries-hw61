import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BordersCountry from "../BordersCountry/BordersCountry";

const Country = () => {
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Country name
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Capital
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Capital
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        Population
                    </Box>
                    <BordersCountry/>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Flag"
                />

            </Card>


        </div>
    );
};

export default Country;
