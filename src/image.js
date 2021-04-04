import React from 'react';


const Image = ({imagen}) =>{

    const {largeImageURL, likes, previewURL, tags, views} = imagen;
    
    return(
        <div className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className = "card">
                <img src = {previewURL} alt = {tags} className = "card-img.top" />

                <div className = "card-body">
                    <p className = "card-text"> {likes} Like</p>
                    <p className = "card-text"> {views} Views</p>
                </div>

                <div className = "card-footer">
                    <a href = {largeImageURL} rel = "noopener noreferrer" target="_blank" className = "btn btn-primary btn-block">View image</a>
                </div>

            </div>
        </div>

    );
}

export default Image;