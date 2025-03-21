import React from "react";
import Person from "./Person"; // Import the Person component

function NameList1() {
  const persons = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
      skill: "JavaScript",
    },
    {
      id: 3,
      name: "Charlie",
      age: 35,
      skill: "Node.js",
    },
  ];

  return (
    <div>
      <Person persons={persons} />
    </div>
  );
}

export default NameList1;
