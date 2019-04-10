import React from 'react';

//need a callback for onClick or Link

export default props => {
    return (
    <button className="waves-effect waves-light btn-large modal-trigger" href="#modal1" onClick={props.passField}>Generate</button>
    );
}
