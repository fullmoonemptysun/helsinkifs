import '../App.css'

const ResultSingleItem = ({ country, isListItem }) => {
    if (!isListItem) {
        return (
            <div>
                <h1>{country.name.common}</h1>
                Capital: {country.capital.join()}
                <br></br>
                Area: {country.area}
                <h2>Languages:</h2>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png}></img>
            </div>
        );
    } else {
        return (
            <div>
                <h3>{country.name.common}</h3>
                Capital: {country.capital.join()}
                <br></br>
                Area: {country.area}
                <h4>Languages:</h4>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img className="smaller-flag" src={country.flags.png}></img>
            </div>
        );
    }
};

export default ResultSingleItem;
