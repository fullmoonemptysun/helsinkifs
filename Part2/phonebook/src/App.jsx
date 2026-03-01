import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {id:1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');


  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleFormSubmit = (event) => {
    console.log(persons);
    event.preventDefault();
    let newperson = {
        id:persons.length + 1,
        name: newName
    }
    setPersons([...persons,
        
        newperson]
    )


    setNewName('');
  }



  

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map((person)=>
            <li key={person.id}>{person.name}</li>
        )}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleInputChange} value={newName}/>
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>debug: {newName}</div>
      ...
    </div>
  )
}

export default App
