import React, {useCallback, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import CountriesList from "../../components/CountriesList/CountriesList";
import Country from "../../components/Country/Country";
import axiosApi from "../../axiosApi";
import Typography from "@mui/material/Typography";


const ALL_URL = '/all?fields=alpha3Code,name,flag,population';
const CODE_URL = '/alpha/';

const MainPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [aboutCountry, setAboutCountry] = useState<AboutCountry | null>(null);
    const [bordersCountry, setBordersCountry] = useState<string[] | null>(null);

    const fetchData = useCallback(async () => {
        try{
            const countriesResponse = await axiosApi.get<Country[]>(ALL_URL);
            await setCountries(countriesResponse.data);
            if(selectedCountry){
                const countryResponse = await axiosApi.get<AboutCountry>(CODE_URL + selectedCountry);
                let countryInfo ={
                    name: countryResponse.data.name,
                    capital: countryResponse.data.capital,
                    flag: countryResponse.data.flag,
                    population: countryResponse.data.population,
                    borders: countryResponse.data.borders
                }
                setAboutCountry(countryInfo);
                const promises = countryInfo.borders.map(async bordersAlpha3Code => {
                    const bordersResponse = await axiosApi.get<Country>(CODE_URL + bordersAlpha3Code);
                    return bordersResponse.data.name
                });
                const newBordersCountry = await Promise.all(promises);
                setBordersCountry(newBordersCountry);
            }

        }catch (e) {
            alert('Ошибка запроса!');
        }


    },[]);
    useEffect(() => {

        fetchData().catch(console.error);
    },[fetchData]);

    const clicked =  (alpha3Code: string) => {
        setSelectedCountry(alpha3Code);
    }
    return (
        <Grid container spacing={5}>
            <Grid item xs={3}>
                <CountriesList
                    key={Math.random()}
                    countries={countries}
                    onClick={clicked}
                />
            </Grid>
            {aboutCountry ? <Grid item xs={6}>
                <Country aboutCountry={aboutCountry}/>
            </Grid> : <Typography>Выберите страну</Typography>
            }
        </Grid>
    );
};

export default MainPage;