import { useState } from "react";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import Book from "./Components/Book";
import axios from 'axios'
import { useEffect } from "react";
const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState("");
    const [currSearch, setSearch] = useState("");

    useEffect(()=>{
        console.log("Effect");

        axios
        .get("http://localhost:3001/persons")
        .then(response => {
            console.log("Response successful");
            setPersons(response.data);
        })

    }, [])

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
            persons.find((person) => String(person.number) === String(newNum))
        ) {
            alert(`${newNum} is already in the Phonebook!`);
        } else {
            let newperson = {
                id: persons.length + 1,
                name: newName,
                number: newNum,
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
