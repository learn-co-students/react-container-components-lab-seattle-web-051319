// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {

    const renderMovie = () => {
        // console.log(props.reviews)
        return props.reviews.map((rev, idx) => {
            return (<div className='review' key={idx}>
                <h4>{rev.display_title}</h4>
            </div>)
        })
    }

    return(
        <div className='review-list' >
            {renderMovie()}
        </div>
    )

}

export default MovieReviews
