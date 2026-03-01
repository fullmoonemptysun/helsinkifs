const Book = ({ contacts, currSearch, hasNonSpace, persons }) => {
    if (hasNonSpace(currSearch)) {
        return (
            <div className="book">
                <h2>Numbers</h2>
                <ul>
                    {contacts
                        .filter((contact) => contact.name === currSearch)
                        .map((contact) => (
                            <li key={contact.id}>{contact.name}: {contact.num}</li>
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
                        <li key={person.id}>{person.name}: {person.num}</li>
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
