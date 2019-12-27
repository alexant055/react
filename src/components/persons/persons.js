import React from 'react';

/* Components */
import Person from '../person/person';

/* Style */
import './persons.scss';

const persons = (props) => {

    return (
        <div className="persons">
            {props.persons.map(p => {
                return <Person
                    key={p.id}
                    name={p.name}
                    age={p.age}
                    clickedDelete={() => props.deletePerson(p.id)}
                    changed={(event) => props.updateName(event, p.id)}
                />
            })}
        </div >
    );
}

export default persons;