import React from 'react';

function NameList() {
    // const names = ["Bruce", "Clark", "Diana"];
    const persons = [
        {
            id: 1,
            name: "Alice",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Bob",
            age: 25,
            skill: "JavaScript"
        },
        {
            id: 3,
            name: "Charlie",
            age: 35,
            skill: "Node.js"
        }
    ];

    // const nameslist = names.map(name => <h2>{name}</h2>);
    const personList = persons.map(person => { // Added curly braces, so need return
        return ( // Added return statement
            <div key={person.id}>
                <h2>{person.name}</h2>
                <p>Age: {person.age}</p>
                <p>Skill: {person.skill}</p>
            </div>
        );
    });
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {/* nameslist */}
            {personList}
        </div>
    );
}

export default NameList;