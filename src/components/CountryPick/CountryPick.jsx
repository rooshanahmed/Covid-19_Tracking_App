import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPick.module.css';
import { fetchCountries } from '../DataFetch/Fetch';

const CountryPick = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPICountries = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPICountries()
    }, [setFetchedCountries])

    return (
        <FormControl variant="outlined" className={styles.formControl} >
            <NativeSelect defaultValue="global" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                { fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    );
}
export default CountryPick