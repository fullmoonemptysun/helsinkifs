import { useState } from "react";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import Book from "./Components/Book";
import bookService from "./services/Book";

import './App.css'

import { useEffect } from "react";
const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState("");
    const [currSearch, setSearch] = useState("");

    useEffect(() => {
        console.log("Effect");

        bookService.getAll().then((response) => {
            setPersons(response);
        });
    }, []);

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setNewNum(event.target.value);
    };

    const updateExisting = (newContact, id) =>  {
            bookService.update(newContact, id)
            .then(response => setPersons(persons.map(person => person.id === response.id? response:person)))
            .catch(error => {alert("THE CONTACT LIKELY DOES NOT EXIST ON THE SERVER"); 
                setPersons(persons.filter(person => person.id !== id))
            });
    }

    const handleFormSubmit = (event) => {
        console.log(persons);
        event.preventDefault();

        if (
            persons.find(
                (person) => person.name.toLowerCase() === newName.toLowerCase(),
            )
        ) {

            const existingContact = persons.find(person=>person.name.toLowerCase() === newName.toLowerCase());

            const confirmChange = window.confirm(`You are about to change the information for ${existingContact.name}. Confirm?`);
            if(confirmChange){
                const changedContact = {...existingContact, number:newNum};
                updateExisting(changedContact, existingContact.id)
            }
        } else if (
            persons.find((person) => String(person.number) === String(newNum))
        ) {
            alert(`${newNum} is already in the Phonebook!`);
        } else {
            let newperson = {
                name: newName,
                number: newNum,
            };

            bookService
                .create(newperson)
                .then((response) => {
                    setPersons([...persons, response]);
                    setNewName("");
                    setNewNum("");
                })
                .catch((error) => {
                    alert("There was an error in creating this contact!");
                });
        }
    };

    const deleteContact = (person) => {

        // console.log("THE CONTACT TO BE DELETED IS ")
        // console.log(person)
        const confirm = window.confirm(
            `Contact info for ${person.name} will be deleted. Are you Sure?\n`,
        );

        if (confirm) {
            bookService
                .del(person.id)
                .then((response) => {
                    console.log(response);
                    bookService.getAll().then((response) => {
                        setPersons(response);
                    });
                })
                .catch((error) => {
                    alert("ERROR DELETING THIS CONTACT!");
                });
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
        <div className="">
            <h2 className="">Phonebook</h2>
            <div>debug: {newName}</div>

            <Filter
                currSearch={currSearch}
                searchChange={handlesearchChange}
            ></Filter>

            <Form
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                handlePhoneChange={handlePhoneChange}
                newName={newName}
                newNum={newNum}
            ></Form>
            <Book
                deleteContact={deleteContact}
                hasNonSpace={hasNonSpace}
                persons={persons}
                currSearch={currSearch}
            ></Book>
        </div>
    );
};

export default App;
