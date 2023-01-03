import React from 'react';

// Gif
import spinner from "../../gif/Spinner.gif"

const Loader = () => {
    return (
        <div style={{width: "100%", textAlign: "center"}}>
            <img src={spinner} alt="Loading" />
        </div>
    );
};

export default Loader;