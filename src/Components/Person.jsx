import React from 'react';

function Person({ persons }) { // Receive persons array as a prop
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Skill: {person.skill}</p>
        </div>
      ))}
    </div>
  );
}

export default Person;