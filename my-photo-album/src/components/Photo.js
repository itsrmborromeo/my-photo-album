import React, { useState } from 'react';
import './Photo.css';

const Photo = ({ photo, onClick }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="photo" onClick={onClick}>
            <div className={`image-container ${isLoading ? 'blur' : ''}`}>
                <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    onLoad={handleLoad} 
                    className="image" 
                />
            </div>
            <div className="overlay">
                <h3>{photo.desc}</h3>
            </div>
        </div>
    );
};

export default Photo;
