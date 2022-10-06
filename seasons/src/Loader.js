import React from "react";

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// Default props
// instead of {props.message !! 'Loading...'}
Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;