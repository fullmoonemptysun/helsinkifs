import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas", num:undefined }]);
    const [newName, setNewName] = useState("");
    const [newNum, setNewNum] = useState();

    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setNewNum((event.target.value));
    }

    const handleFormSubmit = (event) => {
        console.log(persons);
        event.preventDefault();

        if (
            persons.find(
                (person) => person.name.toLowerCase() === newName.toLowerCase()
            )
        ) {
            alert(`${newName} already exists!`);
        } 

        else if(persons.find(
            (person) => String(person.num) === String(newNum)
        )){
            alert(`${newNum} is already in the Phonebook!`);

        }
        
        
        else {
            let newperson = {
                id: persons.length + 1,
                name: newName,
                num: newNum
            };
            setPersons([...persons, newperson]);

            setNewName("");
            setNewNum("");
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
             <div>debug: {newName}</div>
           
            <form onSubmit={handleFormSubmit}>
                <div>
                    name: <input onChange={handleInputChange} value={newName} />
                </div>
                <div>
                    phone: <input type="tel" onChange={handlePhoneChange} value={newNum}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
           
             <ul>
                {persons.map((person) => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
