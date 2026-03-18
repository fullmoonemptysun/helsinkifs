import { useState } from "react";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import Book from "./Components/Book";
import bookService from './services/Book'

import { useEffect } from "react";
const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState("");
    const [currSearch, setSearch] = useState("");

    useEffect(()=>{
        console.log("Effect");

       bookService.getAll()
        .then(response => {
            setPersons(response);
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
            
                name: newName,
                number: newNum,
            };

            bookService.create(newperson)
            .then(response => {
                setPersons([...persons, response]);
                setNewName("");
                setNewNum("");
            }).catch(error => {
                alert("There was an error in creating this contact!");
            })
            

            
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
