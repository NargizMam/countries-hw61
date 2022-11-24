import React, {useCallback, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import CountriesList from "../../components/CountriesList/CountriesList";
import Country from "../../components/Country/Country";
import axiosApi from "../../axiosApi";


const ALL_URL = '/all?fields=alpha3Code,name';

const CODE_URL = '/alpha/';


const MainPage = () => {
    const [countriesName, setCountriesName] = useState<string[]>([])
    ;
    const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);

    const fetchData = useCallback(async () => {
        const countriesResponse = await axiosApi.get<CountryLi[]>(ALL_URL);
        const promises = countriesResponse.data.map(async country => {
            setCountriesName(prev=>[ ...prev, country.name]);
            const countryResponse = await axiosApi.get<Country>(CODE_URL + 1);
            const newCountry = countryResponse.data
            return {
                name: country.name,
                capital: newCountry.capital,
                population: newCountry.population,
                flag: newCountry.flag
            }
        });
        console.log(countriesName)
        const aboutCountry = await Promise.all(promises);
        // setCountries(aboutCountry);

    },[]);
    useEffect(() => {

        fetchData().catch(console.error);
    },[fetchData]);

    const clicked = () => {
        console.log('d;vkzdvkdjn')
    }
    return (
        <Grid container spacing={5}>
            <Grid item xs={3}>
                <CountriesList
                    key={Math.random()}
                    countriesName={countriesName}
                    onClick={() => clicked()}
                />
            </Grid>
            <Grid item xs={6}>
                <Country/>
            </Grid>
        </Grid>
    );
};

export default MainPage;