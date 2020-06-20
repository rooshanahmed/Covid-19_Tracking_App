import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

let changableUrl = url;

export const fetchData = async (country) => {
    if(country){
        changableUrl = `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl)
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error){

    }
}
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        return data
    }
    catch (error){

    }
}
export const fetchCountries = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch (error){
        console.log(error)
    }
}