import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import CountryPick from './components/CountryPick/CountryPick';
import Footer from './components/Footer/Footer';
import { fetchData } from './components/DataFetch/Fetch';
import styles from './App.module.css';


class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  } 

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })

  }


  render() {
    const { data, country } = this.state
    console.log(data)
  
  return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPick handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer />
      </div>
  );
}
}
export default App;
