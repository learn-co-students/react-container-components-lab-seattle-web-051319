// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {

    const renderreviews = () => {
        return props.reviews.map(review => {
            return <div className='review' key={review.headline}>
                <h4>{review.display_title}</h4>
                <img src={review.multimedia ? review.multimedia.src : null} alt={review.display_title + " Poster"}></img>
            </div>
        })
    }

    return <div className='review-list' >
        {renderreviews()}
    </div>

}

export default MovieReviews