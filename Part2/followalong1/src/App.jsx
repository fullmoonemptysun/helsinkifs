import {useState} from 'react'
import Note from './Components/Note'
import axios from 'axios';
import { useEffect } from 'react';




const App = (props) => {
    const [notes, setNote] = useState([]);
    const [noteVal, setNoteVal] = useState("Enter a new note...");
    const [showAllnotes, setShowAll] = useState(true);


    useEffect(() => {
        console.log('effect');
        axios
        .get('http://localhost:3001/notes')
        .then(response => {
            console.log('promise fulfilled')
            setNote(response.data);
        })
    }, [])

    console.log('render', notes.length, 'notes');


    let notesToShow = showAllnotes? notes:notes.filter(note => note.important);

    const submitNote = (event) => {
        event.preventDefault();
        let newnote = {
            id: notes.length + 1,
            content: noteVal,
            important: Math.random() < 0.5,


        }

        setNote([...notes, newnote]);

        setNoteVal(' ');
    }


    const handleInputChange = (event) => {
        console.log(event.target.value);
        setNoteVal(event.target.value);
    }
    return(



        <div>
            <h1>Notes</h1>

            <button onClick={() => setShowAll(!showAllnotes)}>Show {showAllnotes? "Important":"All"}</button>
            <ul>
                {notesToShow.map(note => 
                    <Note key={note.id} note={note}/>)}
            </ul>


            <form onSubmit={submitNote}>
                <input onChange={handleInputChange} value={noteVal} />

                <button type="submit">Save</button>

                
            </form>
        </div>
    )
}


export default App
