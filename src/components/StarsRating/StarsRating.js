import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
    return (
        <div className={'rating'}>
            <StarRatings
                classname={'ba'}
                rating={rating}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="25px"
                starSpacing="0.5px"
            />
        </div>
    );
};

export {StarsRating};