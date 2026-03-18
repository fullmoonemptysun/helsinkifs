import {useState} from 'react'
import Note from './Components/Note'
import { useEffect } from 'react';
import noteService from './services/notes'




const App = (props) => {
    const [notes, setNote] = useState([]);
    const [noteVal, setNoteVal] = useState("Enter a new note...");
    const [showAllnotes, setShowAll] = useState(true);


    useEffect(() => {
        console.log('effect');
       noteService.getAll().then(response => {
            console.log('promise fulfilled')
            setNote([...response.data, {id:"hehe", content: "THIS IS A SUS NOTE", important:true}]);
        })
    }, [])

    console.log('render', notes.length, 'notes');


    let notesToShow = showAllnotes? notes:notes.filter(note => note.important);

    const submitNote = (event) => {
        event.preventDefault();
        let newnote = {
           
            content: noteVal,
            important: Math.random() < 0.5,


        }


        noteService.create(newnote)
        .then(response => {
            console.log(response)
            setNote([...notes, response.data]);
        })
        

        setNoteVal(' ');


    }

    const toggleImportanceOf = (id) => {
        console.log(`Importance of ${id} needs to be chaged`);

        
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService.update(changedNote, id).then(response => {
            setNote(notes.map(note => note.id === id?response.data:note));
        }).catch(error => {alert(`The note you are trying to update does not exist on the server`); setNote(notes.filter(note => note.id !== id));
        })
    }

    const handleInputChange = (event) => {
        
        setNoteVal(event.target.value);
    }
    return(



        <div>
            <h1>Notes</h1>

            <button onClick={() => setShowAll(!showAllnotes)}>Show {showAllnotes? "Important":"All"}</button>
            <ul>
                {notesToShow.map(note => 
                    <Note toggleImportance={() => toggleImportanceOf(note.id)} key={note.id} note={note}/>)}
            </ul>


            <form onSubmit={submitNote}>
                <input onChange={handleInputChange} value={noteVal} />

                <button type="submit">Save</button>

                
            </form>
        </div>
    )
}


export default App
