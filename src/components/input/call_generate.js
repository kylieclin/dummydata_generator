import React from 'react';

//need a callback for onClick or Link

export default props => {
    return (
    <button className="waves-effect waves-light btn-large" onClick={props.passField}>Generate</button>
    );
}
