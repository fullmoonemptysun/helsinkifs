
import { useState } from 'react';
import ResultSingleItem from './ResultSingleItem';


const ResultListItem = ({ country, show }) => {
    
    const [showVar, setShow] = useState(show)

    const handleShowChange = () => {
        setShow(!showVar)
    }

    
    return (
        <div>
        {!showVar && (<>{country.name.common}
        <button onClick={handleShowChange}>Show</button></>)}

        {showVar && (
            <>
                <ResultSingleItem country={country} isListItem={true}></ResultSingleItem>
                <button onClick={handleShowChange}>Hide</button>

        </>)}

        </div>
    )

    

    
};

export default ResultListItem;
