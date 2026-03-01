import { useState } from "react";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import Book from "./Components/Book";
const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", num: "040-123456", id: 1 },
        { name: "Ada Lovelace", num: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", num: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", num: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState("");
    const [currSearch, setSearch] = useState("");

    let contacts = [...persons];

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setNewNum(event.target.value);
    };

    const handleFormSubmit = (event) => {
        console.log(persons);
        event.preventDefault();

        if (
            persons.find(
                (person) => person.name.toLowerCase() === newName.toLowerCase(),
            )
        ) {
            alert(`${newName} already exists!`);
        } else if (
            persons.find((person) => String(person.num) === String(newNum))
        ) {
            alert(`${newNum} is already in the Phonebook!`);
        } else {
            let newperson = {
                id: persons.length + 1,
                name: newName,
                num: newNum,
            };
            setPersons([...persons, newperson]);

            setNewName("");
            setNewNum("");
        }
    };

    const handlesearchChange = (event) => {
        
        setSearch(event.target.value);
        
    };

    const hasNonSpace = (s) => {
        console.log("Was called");
        return /[^\\s]/.test(s);
    };

  
        return (
            <div>
                <h2>Phonebook</h2>
                <div>debug: {newName}</div>

                <Filter currSearch={currSearch} searchChange={handlesearchChange} ></Filter>

               <Form handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} handlePhoneChange={handlePhoneChange} newName={newName} newNum={newNum}></Form>
                <Book contacts={contacts} hasNonSpace={hasNonSpace} persons={persons} currSearch={currSearch}></Book>
            </div>
        );

};

export default App;
