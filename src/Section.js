import React, { useState } from 'react';
import './Section.css';

const Section = ({ title, children, previewLength = 100, image }) => {
    const [showContent, setShowContent] = useState(false);
    const content = React.Children.toArray(children).find(child => typeof child === 'string');
    const preview = content.slice(0, previewLength);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <div className="section">
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}/>
            {showContent ? (
                <div>
                    <p>{content}</p>
                    <button onClick={toggleContent}>Ver Menos</button>
                </div>
            ) : (
                <div>
                    <p>{preview}...</p>
                    <button onClick={toggleContent}>Ver Mais</button>
                </div>
            )}
        </div>
    );
};

export default Section;
