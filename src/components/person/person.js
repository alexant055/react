import React from 'react';

/* Style */
import './person.scss';

const person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name}, {props.age} years old.</p>
            <button onClick={props.clickedDelete}>Delete</button>
        </div>
    );
}

export default person;