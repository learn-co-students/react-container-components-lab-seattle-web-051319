import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ksc4EpfgEUfJ69R8dYnS6zQTF9c7XtIF';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: '',
        }
    }
    handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault()
        // let searchTerm = event.target.elements[0].value
        // this.setState({
        //     searchTerm: searchTerm
        // })
        fetch(BASE_URL + this.state.searchTerm)
            .then(res => res.json())
            .then(json => {
                this.setState({ reviews: json.results})
            })
    }

    render() {
        return <div className='searchable-movie-reviews' >
            <label htmlFor="search-input">Search Movie Reviews</label>
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleSearchInputChange}/>
                <input type='submit' value='Search' />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}
