import React, { Component } from 'react';
import './App.css';
import CategoryMenu from './CategoryMenu';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      category: 'none',
      searchData: [],
      searchField: ''
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // After choosing category, request data from API, set category state, and store response in state
  async handleCategoryChange(event) {
    try {
      const targetID = event.target.id; // store event so it can be used asynchronously

      // If returning to landing page, reset category and searchField states
      if (targetID === 'none') {
        this.setState({
          category: 'none',
          searchField: ''
        });
      } else {

        const fetchURL = `https://swapi.co/api/${targetID}/?format=json`;
        const response = await fetch(fetchURL);
        const data = await response.json();

        this.setState({
          category: targetID,
          searchData: data.results

        })
      }
    }
    catch (err) {
      console.log('Error: ', err);
    }
  }

  // Store search input in state as it is typed
  onSearchChange(event) {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const { category, searchData, searchField } = this.state; // deconstruct state for more readable use

    const filteredData = searchData.filter((result => {
      if (category === 'films') {
        return result.title.toLowerCase().includes(searchField.toLowerCase());
      }
      else if (category === 'none') {
        return [];
      }
      else {
        return result.name.toLowerCase().includes(searchField.toLowerCase());
      }
    }))

    // No category chosen
    if (category === 'none') {
      return (
        <div>
          <header className='title'>
            <h1>SWAPI Search</h1>
          </header>
          <CategoryMenu onCategoryChange={this.handleCategoryChange} />
        </div>
      );
    }
    // Category chosen, but retrieving data
    else if (category !== 'none' && searchData.length === 0) {
      return <h1 className='title'>LOADING</h1>
    }
    // Category chosen with data retrieved
    else {
      return (
        <div>
          <header className='title'>
            <h1>SWAPI Search</h1>
          </header>
          <SearchBox onSearchChange={this.onSearchChange} />
          <CardList category={category} filteredData={filteredData} />
          <button className='button button--center' id='none' onClick={this.handleCategoryChange}>back</button>
        </div>
      );
    }
  }
}

export default App;