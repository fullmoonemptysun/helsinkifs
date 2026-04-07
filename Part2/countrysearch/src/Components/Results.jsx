import ResultListItem from "./ResultListItem"
import ResultSingleItem from "./ResultSingleItem"


const Results = ({results}) => {



    if(results.length > 10){
    return(
        <div>
            Too many results. Please increase the query size.
        </div>
    )
}

    else if(results.length <= 10 && (results.length > 1)){
        return(
            <div>
                <ul>
                    {results.map((country)=>(<li key={country.name.common}><ResultListItem show={false} country={country}></ResultListItem></li>)
                )}
                </ul>
            </div>
        )
    }

    else if(results.length == 1){
        return(
            <div>
                <ResultSingleItem country={results[0]} isListItem={false}></ResultSingleItem>
            </div>
        )
    }
}

export default Results
