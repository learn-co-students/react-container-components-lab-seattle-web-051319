import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'c8RF5yiP45FzTvxFVtFvkR573FsnyxLO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: '',
        }
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const searchTerm = ev.target.elements[0].value
        this.setState({searchTerm})
        fetch(URL + searchTerm + `&api-key=${NYT_API_KEY}`)
            .then(res => res.json())
            .then(json => {
                this.setState({ reviews: json.results})
            })
    }

    render() {
        return <div className='searchable-movie-reviews' >
            <form onSubmit={this.handleSubmit}>
                <input type='text'/>
                <input type='submit' value='Search' />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}