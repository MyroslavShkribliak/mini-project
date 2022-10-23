import {photosImages} from "../../configs";
import React from "react";

const PosterPreview = ({sss}) => {
    return (
        <div>
                <img src={photosImages + sss.poster_path} alt={sss.title}/>

        </div>
    );
};

export {PosterPreview};