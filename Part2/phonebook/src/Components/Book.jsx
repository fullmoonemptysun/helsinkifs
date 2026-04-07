const Book = ({ currSearch, hasNonSpace, persons, deleteContact }) => {
    if (hasNonSpace(currSearch)) {
        return (
            <div className="book">
                <h2>Numbers</h2>
                <ul>
                    {persons
                        .filter((person) => person.name.toLowerCase().includes( currSearch.toLowerCase()))
                        .map((person) => (
                            <li key={person.id} >
                                <div>{person.name}: {person.number}</div>
                                <button className="" onClick={()=>deleteContact(person)}>Delete Contact</button>
                            </li>
                        ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="book">
                <h2>Numbers</h2>
                <ul>
                    {persons.map((person) => (
                        <li key={person.id}>
                            <div>{person.name}: {person.number}</div>
                            <button className="" onClick={()=>deleteContact(person)}>Delete Contact</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

//  <ul>
//                     {persons.map((person) => (
//                         <li key={person.id}>{person.name}</li>
//                     ))}
//                 </ul>

export default Book;
